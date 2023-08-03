<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="formTitle"
    @visible-change="handleVisibleChange"
    @ok="customSubmitFunc"
    class="custom-modal"
    :width="1200"
    :height="500"
  >
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
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
    </div>
    <!-- <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div> -->
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useForm } from '/@/components/Form';
  import { channelShopUpdColumn } from '/@/views/channel/shop/data';
  import { columns } from '/@/views/channel/shop/manageData';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {
    updateChannelShop,
    getManageChannelShopList,
    deleteChannelShop,
  } from '/@/api/channel/channel';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  export default defineComponent({
    components: { BasicModal, BasicTable, TableAction },
    props: {
      userData: { type: Object },
    },
    emits: ['register'],
    setup(props, { emit }) {
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const shopRemark = ref('');
      const [
        registerForm,
        {
          setFieldsValue,
          // setProps,
          validate,
        },
      ] = useForm({
        labelWidth: 120,
        layout: 'horizontal',
        schemas: channelShopUpdColumn,
        showActionButtonGroup: false,
      });
      const [registerTable, { reload }] = useTable({
        title: '商铺列表',
        // api: ref(() => getChannelShopList({ shopRemark: shopRemark.value, page: 1, pageSize: 20 })),
        api: ref(() => getManageChannelShopList(shopRemark.value)),
        columns,
        formConfig: {
          labelWidth: 120,
        },
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 50,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          await handleUpdChannelShop(values);
        } catch (error) {}
      }

      async function handleUpdChannelShop(record: Recordable) {
        console.log(record);
        console.log(record.id);
        try {
          updateChannelShop(record)
            .then(() => {
              createMessage.success(`修改配置成功`);
              location.reload();
            })
            .catch(() => {
              createMessage.error('修改配置失败');
              emit('register');
            });
        } catch (e) {
          createMessage.error('修改配置失败');
        } finally {
        }
      }

      function onDataReceive(data) {
        console.log('Manage Data Received', data.record);
        formTitle.value = data.record.title;
        shopRemark.value = data.record.shopRemark;
        console.log('shuchu ' + data.record.shopRemark);
        reload(); // 重新加载表格数据
      }
      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
        var record = data.record;
        setFieldsValue({
          id: record.id,
          channel: record.channel,
          shopRemark: record.shopRemark,
          address: record.address,
          // ac_pwd: data.ac_pwd,
          money: record.money,
          status: record.status,
        });
      });

      function handleVisibleChange(v) {
        console.log(v);
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      function handleSuccess() {
        reload();
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
        register,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        formTitle,
        customSubmitFunc,

        registerTable,
        handleSuccess,
        handleDelete,
      };
    },
  });
</script>
<style scoped>
  .custom-modal .modal-content {
    width: 300px;
  }
</style>
