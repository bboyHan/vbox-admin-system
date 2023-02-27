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
  import { formSchema } from '/@/views/payer/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { createPAccount } from '/@/api/channel/pay';

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
      const channelId = ref('');
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps,
          validate,
          updateSchema,
        },
      ] = useForm({
        labelWidth: 100,
        layout: 'horizontal',
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [register, { setModalProps, closeModal }] = useModalInner(async (data) => {
        data && onDataReceive(data);
        setModalProps({ confirmLoading: false });
        updateSchema({
          field: 'c_gateway',
          componentProps: {
            params: {
              c_channel_id: channelId.value,
            },
          },
        });
      });
      async function customSubmitFunc() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          await handleCreate(values);
          closeModal();
        } catch (error) {
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleCreate(record: Recordable) {
        try {
          record.c_channel_id = channelId.value;
          console.log(record);
          let ret = createPAccount(record);
          console.log(ret);
          createMessage.success(`添加付方账户成功`);
        } catch (e) {
          createMessage.error('添加付方账户失败');
        } finally {
        }
      }

      // const [register] = useModalInner((data) => {
      //   data && onDataReceive(data);
      // });

      function onDataReceive(data) {
        console.log('Data Received', data);
        formTitle.value = data.title;
        channelId.value = data.channel_id;
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
