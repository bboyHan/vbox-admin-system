<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="formTitle"
    @visible-change="handleVisibleChange"
    @ok="customSubmitFunc"
    width="1000px"
  >
    <div class="pt-3px pr-3px">
      <Checkbox
        :indeterminate="indeterminate"
        v-model:checked="checkAll"
        @change="onCheckAllChange"
      >
        cc
      </Checkbox>
      <CheckboxGroup v-model:value="checkedList" :options="plainOptions" />
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick, reactive, toRefs, watch, onMounted } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { disableBatchAcListColumns } from '/@/views/channel/pre/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { batchSetCAccountStatus, getChannelAccount } from '/@/api/channel/channel';
  import { Checkbox } from 'ant-design-vue';

  export default defineComponent({
    components: { Checkbox, CheckboxGroup: Checkbox.Group, BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      onMounted(() => {
        getPreAcList();
      });

      let plainOptions = [];

      const state = reactive({
        indeterminate: true,
        checkAll: false,
        checkedList: plainOptions,
      });

      function getPreAcList() {}
      const onCheckAllChange = (e: any) => {
        Object.assign(state, {
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
        });
      };
      watch(
        () => state.checkedList,
        (val) => {
          state.indeterminate = !!val.length && val.length < plainOptions.length;
          state.checkAll = val.length === plainOptions.length;
          console.log(plainOptions.length);
        },
      );

      // let columns = ;
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const balance = ref('');
      const [registerForm, { resetFields, updateSchema, validate }] = useForm({
        layout: 'horizontal',
        schemas: disableBatchAcListColumns,
        showActionButtonGroup: false,
        showSubmitButton: true,
        labelAlign: 'left',
        size: 'large',
      });

      const [register, { setModalProps, closeModal }] = useModalInner((data) => {
        data && onDataReceive(data);
        setModalProps({ confirmLoading: false });
        getChannelAccount({ status: 1 })
          .then((acList) => {
            console.log(acList.length);
            plainOptions = [];

            // let acList = rs.data;
            for (let index = 0; index < acList.length; index++) {
              let ac = acList[index];
              let acid = ac.acid;
              let acRemark = ac.acRemark;
              plainOptions.push({
                label: acRemark,
                value: acid,
                key: index,
              });
            }

            console.log(plainOptions);
            updateSchema({
              field: 'acidList',
              componentProps: {
                options: plainOptions,
              },
            });
          })
          .catch(() => {});
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          console.log(values);
          setModalProps({ confirmLoading: true });
          handleBatchChannelAccount(values);
          closeModal();
        } catch (error) {
          console.log(error);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleBatchChannelAccount(record: Recordable) {
        console.log(record);
        batchSetCAccountStatus(record)
          .then((ret) => {
            console.log(ret);
            createMessage.success(`批量开启成功`);
          })
          .catch(() => {
            createMessage.error('批量开启失败');
          });
      }

      function onDataReceive(data) {
        console.log('Data Received', data);
        formTitle.value = data.title;
        balance.value = data.balance;
        resetFields();
      }

      function handleVisibleChange(v) {
        console.log(v);
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        ...toRefs(state),
        plainOptions,
        onCheckAllChange,
        register,
        // columns,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        formTitle,
        customSubmitFunc,
      };
    },
  });
</script>
