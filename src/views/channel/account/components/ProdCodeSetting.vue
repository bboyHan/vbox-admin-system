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

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const [registerForm, { setFieldsValue, validate }] = useForm({
        labelWidth: 120,
        layout: 'horizontal',
        schemas: formModalSchema,
        showActionButtonGroup: false,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          handlePCSetting(values);
        } catch (error) {}
      }

      function handlePCSetting(record: Recordable) {
        console.log(record);
        console.log(record.id);
        try {
          //TODO 配置产码
          // let ret = deleteCAccount(record.id);
          // console.log(ret);
          createMessage.success(`配置产码成功`);
        } catch (e) {
          createMessage.error('配置产码失败');
        } finally {
        }
      }

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
        console.log(data.id);
        console.log(data.acid);
        setFieldsValue({
          id: data.id,
          acid: data.acid,
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
