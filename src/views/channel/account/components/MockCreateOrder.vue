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
  import { mockOrderColumn } from '/@/views/channel/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { testCreateOrder } from '/@/api/channel/pay';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    emits: ['register'],
    setup(props, { emit }) {
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const [
        registerForm,
        {
          setFieldsValue,
          // setProps,
          validate,
        },
      ] = useForm({
        labelWidth: 120,
        layout: 'horizontal',
        schemas: mockOrderColumn,
        showActionButtonGroup: false,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          await handleMockOrder(values);
        } catch (error) {}
      }

      async function handleMockOrder(record: Recordable) {
        console.log(record);
        testCreateOrder(
          record.money,
          record.c_channel_id,
          record.acid,
          record.pr,
          record.payIp,
          record.area,
        )
          .then((res) => {
            createMessage.success(`模拟建单成功`);
            window.open(res.payUrl, '_blank');
          })
          .catch(() => {
            createMessage.error('模拟建单失败');
            emit('register');
          });
      }

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
        setFieldsValue({
          id: data.id,
          acid: data.acid,
          c_channel_id: data.c_channel_id,
        });
      });

      function onDataReceive(data) {
        console.log('Data Received', data);
        formTitle.value = data.title;
      }

      function handleVisibleChange(v) {
        console.log(v);
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        register,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        formTitle,
        customSubmitFunc,
      };
    },
  });
</script>
