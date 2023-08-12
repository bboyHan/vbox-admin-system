<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title=""
    @visible-change="handleVisibleChange"
    @ok="confirmOrder"
    okText="强补"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { callbackOrder } from '/@/api/channel/pay';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {fn} from "../../../../../dist/assets/index.ccaf1f6f";
  const { createMessage } = useMessage();
  const schemas: FormSchema[] = [
    {
      field: 'orderId',
      component: 'Input',
      label: '订单ID',
      colProps: {
        span: 24,
      },
      dynamicDisabled: true,
    },
    {
      field: 'captcha',
      component: 'Input',
      label: '验证码',
      colProps: {
        span: 24,
      },
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const modelRef = ref({});
      const [registerForm, { validate }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { setModalProps, closeModal }] = useModalInner((data) => {
        data && onDataReceive(data);
      });
      function onDataReceive(data) {
        console.log('Data Received', data);
        // 方式1;
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });
        // // 方式2
        modelRef.value = { orderId: data.orderId };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }
      /**
       * 强补回调
       */
      async function confirmOrder(record: Recordable) {
        try {
          const values = await validate();
          console.log(values);
          setModalProps({ confirmLoading: true });
          handleCallBack(values);
          closeModal();
        } catch (error) {
          console.log(error);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      function handleCallBack(record) {
        callbackOrder(record.orderId, record.captcha)
          .then((res) => {
            createMessage.info('补单回调成功，谨慎操作' + res.toString());
          })
          .catch(() => {
            createMessage.error('补单回调失败');
          });
      }
      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        register,
        schemas,
        confirmOrder,
        registerForm,
        model: modelRef,
        handleVisibleChange,
      };
    },
  });
</script>
