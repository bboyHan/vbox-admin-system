<template>
  <PageWrapper title="短信中心" contentBackground content="用于短信发送等" contentClass="p-4">
    <CollapseContainer title="详情编辑">
      <BasicForm @register="register" />
    </CollapseContainer>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { CollapseContainer } from '/@/components/Container';
  import { BasicForm, useForm } from '/@/components/Form';
  import { useTable } from '/@/components/Table';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { columns, tableColumns } from './msg.data';
  import { useDrawer } from '/@/components/Drawer';
  import { getMsgList } from '/@/api/demo/msg';
  import { PageWrapper } from '/@/components/Page';
  export default defineComponent({
    name: `MessageEdit`,
    components: {
      BasicForm,
      CollapseContainer,
      PageWrapper,
    },
    setup() {
      const { createMessage } = useMessage();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [register, { validate, setFieldsValue, setProps }] = useForm({
        labelWidth: 200,
        showActionButtonGroup: true,
        baseColProps: {
          span: 28,
        },
        wrapperCol: {
          span: 15,
        },
        schemas: columns,
        actionColOptions: {
          offset: 8,
          span: 23,
        },
        submitButtonOptions: {
          text: '提交',
        },
        submitFunc: customSubmitFunc,
      });

      interface DelayLoading {
        delay: number;
      }

      let loading = ref<boolean | DelayLoading>(false);

      async function customSubmitFunc() {
        try {
          let v = await validate();
          loading.value = { delay: 100 };
          console.log(v);
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });

          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            loading.value = false;
            createMessage.success('提交成功！');
          }, 5000);
        } catch (error) {}
      }

      function handleSubmit() {
        createMessage.success('更新成功！');
      }

      const [registerTable, { reload }] = useTable({
        api: getMsgList,
        columns: tableColumns,
        bordered: false,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleDelete(record: Recordable) {
        console.log(record);
        const { createMessage } = useMessage();
        createMessage.success(`删除角色成功`);
      }

      return {
        register,
        columns,
        handleSubmit,
        setFieldsValue,
        customSubmitFunc,
        loading,
        handleEdit,
        handleDelete,
        registerTable,
        handleSuccess,
        registerDrawer,
      };
    },
  });
</script>
