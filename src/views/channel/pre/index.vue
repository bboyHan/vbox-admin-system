<template>
  <div>
    <PageWrapper title="预产管理" content="自行管理预产！" contentBackground contentClass="flex">
      <div class="py-8 bg-white flex flex-col justify-center items-center">
        <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5">
          <template #toolbar>
            <a-button type="primary" @click="batchCreate"> 批量导入 </a-button>
            <a-button type="primary" @click="handleCreate"> 预产添加 </a-button>
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
                    tooltip: '删除资源',
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

        <ChannelPre @register="registerModal" />
        <ChannelPreBatch @register="registerBatchModal" />
        <ChannelPreUpd @register="registerUpdModal" />
      </div>
    </PageWrapper>
    <BasicTable @register="registerCountTable" class="w-4/4 xl:w-5/5" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteChannelPre, getChannelPreList, countChannelPreList } from '/@/api/channel/channel';
  import { columns, countPreColums } from '/@/views/channel/pre/data';
  import ChannelPre from '/@/views/channel/pre/components/ChannelPre.vue';
  import ChannelPreBatch from '/@/views/channel/pre/components/ChannelPreBatch.vue';
  import ChannelPreUpd from '/@/views/channel/pre/components/ChannelPreUpd.vue';
  const { createMessage } = useMessage();
  export default defineComponent({
    components: {
      ChannelPre,
      ChannelPreBatch,
      ChannelPreUpd,
      PageWrapper,
      BasicTable,
      TableAction,
    },
    setup() {
      const [registerModal, { openModal: openM }] = useModal();
      const [registerBatchModal, { openModal: openBatchM }] = useModal();
      const [registerUpdModal, { openModal: openMUpd }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '预产列表',
        api: getChannelPreList,
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
      const [registerCountTable] = useTable({
        title: '预产统计',
        api: countChannelPreList,
        columns: countPreColums,
        formConfig: {
          labelWidth: 120,
        },
        showIndexColumn: true,
        bordered: true,
        showSummary: true,
        pagination: false,
        summaryFunc: handleSummary,
      });

      function handleSummary(tableData: Recordable[]) {
        const totalNo = tableData.reduce((prev, next) => {
          console.log(next);
          prev += next.count;
          return prev;
        }, 0);
        console.log(totalNo);
        return [
          {
            _row: '合计',
            _index: '共计',
            count: totalNo,
          },
        ];
      }

      function handleSuccess() {
        reload();
      }

      onMounted(() => {
        // getUser();
      });
      function batchCreate() {
        openBatchM(true, {});
      }
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
          let ret = deleteChannelPre(record.id);
          console.log(ret);
          createMessage.success(`删除商铺成功`);
        } catch (e) {
          createMessage.error('删除商铺失败');
        } finally {
          reload();
        }
      }
      return {
        batchCreate,
        handleCreate,
        handleDelete,
        handleEdit,
        registerTable,
        registerCountTable,
        registerModal,
        registerBatchModal,
        registerUpdModal,
        handleSuccess,
      };
    },
  });
</script>
