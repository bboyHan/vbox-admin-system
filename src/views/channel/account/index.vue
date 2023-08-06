<template>
  <div>
    <PageWrapper title="通道账号" contentFullHeight contentBackground>
      <BasicTable @register="registerTable">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :dropDownActions="[
                {
                  label: '修改',
                  icon: 'clarity:note-edit-line',
                  onClick: handleEdit.bind(null, record),
                },
                {
                  label: '清码',
                  icon: 'ic:outline-delete-outline',
                  onClick: handleDeletePre.bind(null, record),
                  divider: true,
                },
              ]"
              :actions="[
                // {
                //   label: '产码配置',
                //   icon: 'clarity:note-edit-line',
                //   color: 'success',
                //   onClick: prodCodeSetting.bind(null, record),
                //   ifShow: false,
                // },
                // {
                //   label: '模拟建单',
                //   icon: 'ant-design:send-outlined',
                //   onClick: mockCreateOrder.bind(null, record),
                // },
                {
                  label: '预产',
                  icon: 'clarity:note-edit-line',
                  onClick: handleCreatePre.bind(null, record),
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
    <PreCreateOrder @register="registerPreModal" />
    <ChannelAccountUpd @register="registerUpdModal" />
    <ChannelTxAccountUpd @register="registerUpdTxModal" />
    <ChannelSdoAccountUpd @register="registerUpdSdoModal" />
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
  import ChannelTxAccountUpd from '/@/views/channel/account/components/ChannelTxAccountUpd.vue';
  import ChannelSdoAccountUpd from '/@/views/channel/account/components/ChannelSdoAccountUpd.vue';
  import {
    deleteCAccount,
    getCAccountListByPage,
    deleteChannelPreByACID,
  } from '/@/api/channel/channel';
  import MockCreateOrder from '/@/views/channel/account/components/MockCreateOrder.vue';
  import PreCreateOrder from '/@/views/channel/account/components/PreCreateOrder.vue';

  export default defineComponent({
    components: {
      PageWrapper,
      MockCreateOrder,
      PreCreateOrder,
      BasicTable,
      TableAction,
      ProdCodeSetting,
      ChannelAccountUpd,
      ChannelTxAccountUpd,
      ChannelSdoAccountUpd,
    },
    setup() {
      const { createMessage } = useMessage();
      const [registerPCModal, { openModal: openPCM }] = useModal();
      const [registerMockModal, { openModal: openMockM }] = useModal();
      const [registerPreModal, { openModal: openPreM }] = useModal();
      const [registerUpdModal, { openModal: openUpdM }] = useModal();
      const [registerUpdTxModal, { openModal: openUpdTxM }] = useModal();
      const [registerUpdSdoModal, { openModal: openUpdSdoM }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '帐号列表',
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

      function handleCreatePre(record: Recordable) {
        const titleDesc = '预产建单：' + record.ac_remark + '（当前帐号）';
        let status = record.status;
        console.log(status);
        if (status != 1) {
          createMessage.error(`该账户未正常开启，无法预产`);
          return;
        }
        if (
          record.c_channel_id.includes('jx3_alipay_pre') ||
          record.c_channel_id.includes('sdo_alipay')
        ) {
          openPreM(true, {
            title: titleDesc,
            id: record.id,
            acid: record.acid,
            channel: record.c_channel_id,
            acAccount: record.ac_account,
            acRemark: record.ac_remark,
          });
        } else {
          createMessage.error(`该通道不支持在此预产`);
          return;
        }
      }

      function handleEdit(record: Recordable) {
        const titleDesc = '通道帐号：' + record.ac_remark + '（当前帐号）';
        if (record.c_channel_id.includes('tx')) {
          openUpdTxM(true, {
            title: titleDesc,
            id: record.id,
            acid: record.acid,
            ac_remark: record.ac_remark,
            ac_account: record.ac_account,
            daily_limit: record.daily_limit,
            total_limit: record.total_limit,
          });
        }
        if (record.c_channel_id.includes('jx3')) {
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
        if (record.c_channel_id.includes('sdo')) {
          openUpdSdoM(true, {
            title: titleDesc,
            id: record.id,
            acid: record.acid,
            ac_remark: record.ac_remark,
            ac_account: record.ac_account,
            daily_limit: record.daily_limit,
            total_limit: record.total_limit,
          });
        }
      }

      function handleSuccess() {
        reload();
      }

      function handleDeletePre(record: Recordable) {
        const { createMessage } = useMessage();
        try {
          console.log(record);
          deleteChannelPreByACID(record.acid)
            .then((ret) => {
              createMessage.success(`账户清码成功` + ret);
            })
            .catch((e) => {
              createMessage.error('账户清码失败' + e);
            });
        } finally {
          reload();
        }
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
        registerPreModal,
        registerUpdModal,
        registerUpdTxModal,
        registerUpdSdoModal,
        mockCreateOrder,
        handleEdit,
        handleCreatePre,
        handleDelete,
        handleDeletePre,
        handleSuccess,
        prodCodeSetting,
      };
    },
  });
</script>
