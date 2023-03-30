<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title=""
    @visible-change="handleVisibleChange"
    @ok="handleCopyLink"
    okText="复制"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { createMessage } = useMessage();
  const schemas: FormSchema[] = [
    {
      field: 'content',
      component: 'Input',
      label: '支付链接',
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
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
          validate,
        },
      ] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });
      const { clipboardRef, copiedRef } = useCopyToClipboard();
      async function handleCopyLink() {
        try {
          const values = await validate();
          console.log(values);
          clipboardRef.value = values.content;
          if (unref(copiedRef)) {
            createMessage.warning('复制成功: ' + clipboardRef.value);
          }
        } catch (error) {}
      }
      const [register] = useModalInner((data) => {
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
        modelRef.value = { content: data.content };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        handleCopyLink,
        register,
        schemas,
        registerForm,
        model: modelRef,
        handleVisibleChange,
      };
    },
  });
</script>
