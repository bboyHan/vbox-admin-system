<template>
  <PageWrapper title="添加商户" content="添加自行管理的商户！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';

  import { formSchema } from './data';
  import { createSaleSub } from '/@/api/channel/codesales';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createMessage } = useMessage();
  export default defineComponent({
    components: { BasicForm, PageWrapper },
    setup() {
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        baseColProps: { span: 14 },
        labelWidth: 200,
        showActionButtonGroup: false,
        schemas: formSchema,
      });

      async function handleSubmit() {
        const values = await validate();
        const { account, password, charge, min, max, status } = values;
        let user = {
          account: account,
          pass: password,
          charge: charge,
          min: min,
          max: max,
          status: status,
        };

        await createSaleSub(user)
          .then((ret) => {
            console.log(ret);
            createMessage.success('创建码商成功');
          })
          .catch((e) => {
            createMessage.error(e.response.data.result);
          });
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>
