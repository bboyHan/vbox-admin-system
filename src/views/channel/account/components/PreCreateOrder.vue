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
  import { preOrderColumn } from '/@/views/channel/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { createChannelPre } from '/@/api/channel/channel';

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
        schemas: preOrderColumn,
        showActionButtonGroup: false,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          await handleChannelPre(values);
        } catch (error) {}
      }

      async function handleChannelPre(record: Recordable) {
        console.log(record);
        console.log(record.count);
        var count = record.count;
        for (let i = 0; i < count; i++) {
          createChannelPre(record)
          .then((res) => {
            console.log(res);
            createMessage.success(`预产建单成功`);

          })
          .catch(() => {
            createMessage.error('预产建单失败');
            emit('register');
          });
        }
        
      }

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
        setFieldsValue({
          id: data.id,
          acid: data.acid,
          channel: data.channel,
          acAccount: data.acAccount,
          acRemark: data.acRemark,
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
