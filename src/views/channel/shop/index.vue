<template>
  <PageWrapper title="引导商铺管理" content="自行管理引导商铺！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5">
        <template #toolbar>
          <a-button type="primary" @click="handleCreate"> 添加商铺 </a-button>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  icon: 'clarity:note-edit-line',
                  label: '修改',
                  onClick: handleEdit.bind(null, record),
                },
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
      <ChannelShop @register="registerModal" />
      <ChannelShopUpd @register="registerUpdModal" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteChannelShop, getChannelShopList } from '/@/api/channel/channel';
  import { columns } from '/@/views/channel/shop/data';
  import ChannelShop from '/@/views/channel/shop/components/ChannelShop.vue';
  import ChannelShopUpd from '/@/views/channel/shop/components/ChannelShopUpd.vue';
  const { createMessage } = useMessage();
  export default defineComponent({
    components: { ChannelShop, ChannelShopUpd, PageWrapper, BasicTable, TableAction },
    setup() {
      const [registerModal, { openModal: openM }] = useModal();
      const [registerUpdModal, { openModal: openMUpd }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '商铺列表',
        api: getChannelShopList,
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
      function handleSuccess() {
        reload();
      }

      onMounted(() => {
        // getUser();
      });
      function handleCreate() {
        openM(true, {});
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
          let ret = deleteChannelShop(record.id);
          console.log(ret);
          createMessage.success(`删除商铺成功`);
        } catch (e) {
          createMessage.error('删除商铺失败');
        } finally {
          reload();
        }
      }
      return {
        handleCreate,
        handleDelete,
        handleEdit,
        registerTable,
        registerModal,
        registerUpdModal,
        handleSuccess,
      };
    },
  });
</script>
