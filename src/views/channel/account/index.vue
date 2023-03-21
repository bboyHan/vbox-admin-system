<template>
  <div>
    <PageWrapper title="通道管理" contentFullHeight contentBackground>
      <BasicTable @register="registerTable">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  label: '产码配置',
                  icon: 'clarity:note-edit-line',
                  color: 'success',
                  onClick: prodCodeSetting.bind(null, record),
                  ifShow: false,
                },
                {
                  label: '模拟建单',
                  icon: 'ant-design:send-outlined',
                  onClick: mockCreateOrder.bind(null, record),
                },
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
    </PageWrapper>
    <ProdCodeSetting @register="registerPCModal" />
    <MockCreateOrder @register="registerMockModal" />
    <ChannelAccountUpd @register="registerUpdModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { columns, searchFormSchema } from '/@/views/channel/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import ProdCodeSetting from '/@/views/channel/account/components/ProdCodeSetting.vue';
  import ChannelAccountUpd from '/@/views/channel/account/components/ChannelAccountUpd.vue';
  import { deleteCAccount, getCAccountListByPage } from '/@/api/channel/channel';
  import MockCreateOrder from '/@/views/channel/account/components/MockCreateOrder.vue';

  export default defineComponent({
    components: {
      PageWrapper,
      MockCreateOrder,
      BasicTable,
      TableAction,
      ProdCodeSetting,
      ChannelAccountUpd,
    },
    setup() {
      const { createMessage } = useMessage();
      const [registerPCModal, { openModal: openPCM }] = useModal();
      const [registerMockModal, { openModal: openMockM }] = useModal();
      const [registerUpdModal, { openModal: openUpdM }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '全部帐号',
        api: getCAccountListByPage,
        columns,
        scroll: { x: 1500, y: 500 },
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: 'right',
        },
      });

      function prodCodeSetting(record: Recordable) {
        const titleDesc = '产码设置：' + record.ac_remark + '（当前帐号）';
        openPCM(true, {
          title: titleDesc,
          id: record.id,
          acid: record.acid,
        });
      }

      function mockCreateOrder(record: Recordable) {
        const titleDesc = '模拟建单：' + record.ac_remark + '（当前帐号）';
        let status = record.status;
        console.log(status);
        if (status != 1) {
          createMessage.error(`该账户未正常开启，无法模拟建单`);
          return;
        }
        openMockM(true, {
          title: titleDesc,
          id: record.id,
          acid: record.acid,
          c_channel_id: record.c_channel_id,
        });
      }

      function handleEdit(record: Recordable) {
        const titleDesc = '通道帐号：' + record.ac_remark + '（当前帐号）';
        openUpdM(true, {
          title: titleDesc,
          id: record.id,
          acid: record.acid,
          ac_remark: record.ac_remark,
          ac_account: record.ac_account,
          daily_limit: record.daily_limit,
          total_limit: record.total_limit,
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleDelete(record: Recordable) {
        const { createMessage } = useMessage();
        try {
          console.log(record);
          let ret = deleteCAccount(record.id);
          console.log(ret);
          createMessage.success(`删除账户成功`);
        } catch (e) {
          createMessage.error('删除账户失败');
        } finally {
          reload();
        }
      }

      return {
        registerTable,
        registerPCModal,
        registerMockModal,
        registerUpdModal,
        mockCreateOrder,
        handleEdit,
        handleDelete,
        handleSuccess,
        prodCodeSetting,
      };
    },
  });
</script>
