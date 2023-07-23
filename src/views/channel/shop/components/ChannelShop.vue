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
  import { BasicForm, useForm } from '/@/components/Form';
  import { shopColumns } from '/@/views/channel/shop/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { createChannelShop } from '/@/api/channel/channel';

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
      const [registerForm, { resetFields, validate }] = useForm({
        labelWidth: 100,
        layout: 'horizontal',
        schemas: shopColumns,
        showActionButtonGroup: false,
        // submitFunc: customSubmitFunc,
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
          handleChannelShop(values);
          closeModal();
        } catch (error) {
          console.log(error);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleChannelShop(record: Recordable) {
        console.log(record);
        createChannelShop(record)
          .then((ret) => {
            console.log(ret);
            createMessage.success(`创建商铺成功`);
          })
          .catch(() => {
            createMessage.error('创建商铺失败');
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
