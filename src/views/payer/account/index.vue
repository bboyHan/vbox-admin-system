<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增付方账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'pub'">
          <textarea v-model="record.pub"></textarea>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '修改',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
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
    <PAccountUpd @register="registerUpdModal" />
    <CreatePA @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { columns, searchFormSchema } from '/@/views/payer/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import PAccountUpd from '/@/views/payer/account/components/PAccountUpd.vue';
  import CreatePA from '/@/views/payer/account/components/CreatePA.vue';
  import { getPAccountList, deletePAccount } from '/@/api/channel/pay';
  import { Button } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicTable, TableAction, PAccountUpd, CreatePA, AButton: Button },
    setup() {
      const [registerUpdModal, { openModal: openUpdM }] = useModal();
      const [register, { openModal: openPAM }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '付方帐号',
        api: getPAccountList,
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
          width: 60,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate(record: Recordable) {
        openPAM(true, {
          record,
          isUpdate: true,
        });
      }

      function handleEdit(record: Recordable) {
        openUpdM(true, {
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
          let ret = deletePAccount(record.id);
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
        registerUpdModal,
        register,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
