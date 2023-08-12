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
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { accountBatchColumns } from '/@/views/channel/pre/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { createChannelPre } from '/@/api/channel/channel';
  import { getChannelPreAccount } from '/@/api/channel/channel';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const keyword = ref<string>('');
      const searchParams = computed<Recordable>(() => {
        return { keyword: unref(keyword) };
      });

      function onSearch(value: string) {
        keyword.value = value;
      }

      // let columns = ;
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const balance = ref('');
      const [registerForm, { resetFields, validate }] = useForm({
        layout: 'horizontal',
        schemas: accountBatchColumns,
        showActionButtonGroup: false,
        showSubmitButton: false,
        labelAlign: 'left',
        size: 'large',
      });

      const [register, { setModalProps, closeModal }] = useModalInner((data) => {
        data && onDataReceive(data);
        setModalProps({ confirmLoading: false });
        console.log(balance.value);
        resetFields();
      });
      // const [register, { setModalProps, closeModal }] = useModalInner((data) => {
      //   data && onDataReceive(data);
      // });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          console.log(values);
          setModalProps({ confirmLoading: true });
          handleChannelPre(values);
          closeModal();
        } catch (error) {
          console.log(error);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleChannelPre(record: Recordable) {
        console.log(record);
        createChannelPre(record)
          .then((ret) => {
            console.log(ret);
            createMessage.success(`预产创建成功`);
          })
          .catch(() => {
            createMessage.error('预产创建失败');
          });
      }

      function onDataReceive(data) {
        console.log('Data Received', data);
        formTitle.value = data.title;
        balance.value = data.balance;
        // resetFields();
      }

      function handleVisibleChange(v) {
        console.log(v);
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        searchParams,
        onSearch,
        register,
        // columns,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        formTitle,
        customSubmitFunc,
        getChannelPreAccount,
      };
    },
  });
</script>
