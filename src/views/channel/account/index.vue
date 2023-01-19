<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增码商 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '产码配置',
                icon: 'clarity:note-edit-line',
                color: 'success',
                onClick: prodCodeSetting.bind(null, record),
              },
              {
                label: '产码',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '测试',
                icon: 'ant-design:thunderbolt-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountDrawer @register="registerDrawer" @success="handleSuccess" />
    <ProdCodeSetting @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { useDrawer } from '/@/components/Drawer';
  import AccountDrawer from './components/AccountDrawer.vue';

  import { columns, searchFormSchema } from '/@/views/channel/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { deleteCodeSales, getCodeSalesListByPage } from '/@/api/channel/codesales';
  import { useModal } from '/@/components/Modal';
  import ProdCodeSetting from '/@/views/channel/account/components/ProdCodeSetting.vue';

  export default defineComponent({
    name: 'CodeAccountManagement',
    components: { BasicTable, AccountDrawer, TableAction, ProdCodeSetting },
    setup() {
      const [registerModal, { openModal: openM }] = useModal();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '',
        api: getCodeSalesListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function prodCodeSetting(record: Recordable) {
        const titleDesc = '帐号产码设置：' + record.name + '（当前帐号）';
        openM(true, {
          title: titleDesc,
          info: 'Info',
        });
      }

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

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
        const { createMessage } = useMessage();
        try {
          console.log(record);
          let ret = deleteCodeSales(record.id);
          console.log(ret);
          createMessage.success(`删除码商成功`);
        } catch (e) {
          createMessage.error('删除码商失败');
        } finally {
          reload();
        }
      }

      return {
        registerTable,
        registerDrawer,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        prodCodeSetting,
      };
    },
  });
</script>
