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
  import { formModalSchema } from '/@/views/channel/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { accountInfoApi } from '/@/api/demo/account';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps,
          validate,
        },
      ] = useForm({
        labelWidth: 120,
        layout: 'horizontal',
        schemas: formModalSchema,
        showActionButtonGroup: false,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          handleDelete(values);
        } catch (error) {}
      }

      function handleDelete(record: Recordable) {
        console.log(record);
        console.log(record.id);
        try {
          let ret = accountInfoApi();
          console.log(ret);
          createMessage.success(`添加账户成功`);
        } catch (e) {
          createMessage.error('添加账户失败');
        } finally {
        }
      }

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
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
