<template>
  <PageWrapper title="引导商铺管理" content="自行管理引导商铺！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5">
        <template #toolbar>
          <a-button type="primary" @click="handleCreate"> 添加商铺 </a-button>
          <a-button type="primary" @click="handleMultiCreate"> 批量添加商铺 </a-button>
          <a-button type="primary" @click="expandAll">展开全部</a-button>
          <a-button type="primary" @click="collapseAll">折叠全部</a-button>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  icon: 'clarity:list-line',
                  label: '管理',
                  onClick: handleManage.bind(null, record),
                },
                // {
                //   icon: 'clarity:note-edit-line',
                //   label: '修改',
                //   onClick: handleEdit.bind(null, record),
                // },
                {
                  icon: 'ant-design:delete-outlined',
                  color: 'error',
                  label: '删除',
                  tooltip: '删除商铺',
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

      <ChannelShopMultiCreate @register="registerMultiModal" />
      <ChannelShop @register="registerModal" />
      <ChannelShopUpd @register="registerUpdModal" />
      <ChannelShopManage @register="registerListManageModal" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    deleteChannelShopByShopRemark,
    getMultiTreeChannelShopList,
  } from '/@/api/channel/channel';
  import { columns, getTreeTableData } from '/@/views/channel/shop/data';
  import ChannelShop from '/@/views/channel/shop/components/ChannelShop.vue';
  import ChannelShopMultiCreate from '/@/views/channel/shop/components/ChannelShopMultiCreate.vue';
  import ChannelShopUpd from '/@/views/channel/shop/components/ChannelShopUpd.vue';
  import ChannelShopManage from '/@/views/channel/shop/components/ChannelShopManage.vue';

  const { createMessage } = useMessage();
  export default defineComponent({
    components: {
      ChannelShop,
      ChannelShopMultiCreate,
      ChannelShopUpd,
      PageWrapper,
      BasicTable,
      TableAction,
      ChannelShopManage,
    },
    setup() {
      const [registerModal, { openModal: openM }] = useModal();

      const [registerMultiModal, { openModal: openMulti }] = useModal();

      const [registerUpdModal, { openModal: openMUpd }] = useModal();
      // debugger;
      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: '商铺列表',
        // api: getMultiChannelShopList,
        api: getMultiTreeChannelShopList,
        isTreeTable: true,
        columns,
        // columns: getBasicColumns(),
        // dataSource: getTreeTableData(),
        rowKey: 'id',
        formConfig: {
          labelWidth: 120,
        },
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });
      const [registerListManageModal, { openModal: openManageM }] = useModal();

      function handleSuccess() {
        reload();
      }

      onMounted(() => {
        // getUser();
      });
      function handleCreate() {
        openM(true, {});
      }
      function handleMultiCreate() {
        openMulti(true, {});
      }
      function handleEdit(record: Recordable) {
        openMUpd(true, {
          record,
          isUpdate: true,
        });
      }
      function handleDelete(record: Recordable) {
        try {
          console.log(record);
          let ret = deleteChannelShopByShopRemark(record.shopRemark);
          console.log(ret);
          createMessage.success(`删除商铺成功`);
          reload();
        } catch (e) {
          createMessage.error('删除商铺失败');
        } finally {
          reload();
        }
      }
      function handleManage(record: Recordable) {
        openManageM(true, {
          record,
          isUpdate: true,
        });
      }
      return {
        handleMultiCreate,
        handleCreate,
        handleDelete,
        handleEdit,
        handleManage,
        registerTable,
        registerModal,
        registerMultiModal,
        registerUpdModal,
        registerListManageModal,
        handleSuccess,

        expandAll,
        collapseAll,
      };
    },
  });
</script>

<!-- <template>
  <PageWrapper title="引导商铺管理" content="自行管理引导商铺！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5">
        <template #toolbar>
          <a-button type="primary" @click="handleCreate"> 添加商铺 </a-button>
          <a-button type="primary" @click="handleMultiCreate"> 批量添加商铺 </a-button>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  icon: 'clarity:list-line',
                  label: '管理',
                  onClick: handleManage.bind(null, record),
                },
                // {
                //   icon: 'clarity:note-edit-line',
                //   label: '修改',
                //   onClick: handleEdit.bind(null, record),
                // },
                {
                  icon: 'ant-design:delete-outlined',
                  color: 'error',
                  label: '删除',
                  tooltip: '删除商铺',
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

      <ChannelShopMultiCreate @register="registerMultiModal" />
      <ChannelShop @register="registerModal" />
      <ChannelShopUpd @register="registerUpdModal" />
      <ChannelShopManage @register="registerListManageModal" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteChannelShopByShopRemark, getMultiChannelShopList } from '/@/api/channel/channel';
  import { columns } from '/@/views/channel/shop/data';
  import ChannelShop from '/@/views/channel/shop/components/ChannelShop.vue';
  import ChannelShopMultiCreate from '/@/views/channel/shop/components/ChannelShopMultiCreate.vue';
  import ChannelShopUpd from '/@/views/channel/shop/components/ChannelShopUpd.vue';
  import ChannelShopManage from '/@/views/channel/shop/components/ChannelShopManage.vue';

  const { createMessage } = useMessage();
  export default defineComponent({
    components: {
      ChannelShop,
      ChannelShopMultiCreate,
      ChannelShopUpd,
      PageWrapper,
      BasicTable,
      TableAction,
      ChannelShopManage,
    },
    setup() {
      const [registerModal, { openModal: openM }] = useModal();

      const [registerMultiModal, { openModal: openMulti }] = useModal();

      const [registerUpdModal, { openModal: openMUpd }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '商铺列表',
        api: getMultiChannelShopList,
        columns,
        formConfig: {
          labelWidth: 120,
        },
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });
      const [registerListManageModal, { openModal: openManageM }] = useModal();

      function handleSuccess() {
        reload();
      }

      onMounted(() => {
        // getUser();
      });
      function handleCreate() {
        openM(true, {});
      }
      function handleMultiCreate() {
        openMulti(true, {});
      }
      function handleEdit(record: Recordable) {
        openMUpd(true, {
          record,
          isUpdate: true,
        });
      }
      function handleDelete(record: Recordable) {
        try {
          console.log(record);
          let ret = deleteChannelShopByShopRemark(record.shopRemark);
          console.log(ret);
          createMessage.success(`删除商铺成功`);
          reload();
        } catch (e) {
          createMessage.error('删除商铺失败');
        } finally {
          reload();
        }
      }
      function handleManage(record: Recordable) {
        openManageM(true, {
          record,
          isUpdate: true,
        });
      }
      return {
        handleMultiCreate,
        handleCreate,
        handleDelete,
        handleEdit,
        handleManage,
        registerTable,
        registerModal,
        registerMultiModal,
        registerUpdModal,
        registerListManageModal,
        handleSuccess,
      };
    },
  });
</script> -->
