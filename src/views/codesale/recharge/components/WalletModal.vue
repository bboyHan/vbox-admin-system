<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="formTitle"
    @visible-change="handleVisibleChange"
    @ok="customSubmitFunc"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { rechargeColumns } from '/@/views/codesale/recharge/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { addSaleRecharge } from '/@/api/channel/codesales';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      // let columns = ;
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const balance = ref('');
      const [
        registerForm,
        {
          setFieldsValue,
          resetFields,
          validate,
        },
      ] = useForm({
        labelWidth: 100,
        layout: 'horizontal',
        schemas: rechargeColumns,
        showActionButtonGroup: false,
        // submitFunc: customSubmitFunc,
      });

      const [register, { setModalProps, closeModal }] = useModalInner((data) => {
        data && onDataReceive(data);
        setModalProps({ confirmLoading: false });
        console.log(balance.value);
        resetFields();
        setFieldsValue({
          balance: balance.value,
        });
      });
      // const [register, { setModalProps, closeModal }] = useModalInner((data) => {
      //   data && onDataReceive(data);
      // });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          console.log(values);
          setModalProps({ confirmLoading: true });
          handleRecharge(values);
          closeModal();
        } catch (error) {
          console.log(error);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleRecharge(record: Recordable) {
        try {
          console.log(record);
          let ret = addSaleRecharge(record);
          console.log(ret);
          createMessage.success(`充值积分成功`);

        } catch (e) {
          createMessage.error('充值积分失败');
        } finally {
        }
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
