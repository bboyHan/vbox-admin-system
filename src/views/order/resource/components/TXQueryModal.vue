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
      <iframe :src="htmlStr" border="0" width="100%" height="600px"></iframe>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { FormSchema, useForm } from '/@/components/Form';
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
    components: { BasicModal },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const htmlStr = ref('');
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
      async function handleCopyLink() {
        try {
          const values = await validate();
          console.log(values);
          htmlStr.value = values.content;
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
        htmlStr.value = data.content;

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
        htmlStr,
        handleVisibleChange,
      };
    },
  });
</script>
