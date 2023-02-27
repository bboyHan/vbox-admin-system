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
  import { caUpdColumn } from '/@/views/channel/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { updateCAccount } from '/@/api/channel/channel';

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
        schemas: caUpdColumn,
        showActionButtonGroup: false,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          await handleUpdAc(values);
        } catch (error) {}
      }

      async function handleUpdAc(record: Recordable) {
        console.log(record);
        console.log(record.id);
        try {
          updateCAccount(record)
            .then(() => {
              createMessage.success(`修改配置成功`);
              location.reload();
            })
            .catch(() => {
              createMessage.error('修改配置失败');
              emit('register');
            });
        } catch (e) {
          createMessage.error('修改配置失败');
        } finally {
        }
      }

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
        setFieldsValue({
          id: data.id,
          acid: data.acid,
          ac_remark: data.ac_remark,
          ac_account: data.ac_account,
          // ac_pwd: data.ac_pwd,
          daily_limit: data.daily_limit,
          total_limit: data.total_limit,
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
