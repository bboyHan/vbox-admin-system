<template>
  <PageWrapper title="积分管理" content="自行管理的积分商户！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <Description @register="register" class="md:w-1/1 w-full" />
      <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5" :searchInfo="searchInfo">
        <template #toolbar>
          <a-button type="primary" @click="handleCreate"> 积分充值 </a-button>
        </template>
<!--        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  icon: 'clarity:note-edit-line',
                  onClick: handleEdit.bind(null, record),
                },
              ]"
            />
          </template>
        </template>-->
      </BasicTable>
      <WalletModal @register="registerModal" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { Description, DescItem, useDescription } from '/@/components/Description';
  import { defineComponent, h, onMounted, reactive, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getVboxUserInfo } from '/@/api/channel/user';
  import { CountTo } from '/@/components/CountTo';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { getSaleRechargeListByPage } from '/@/api/channel/codesales';
  import { columns, searchFormSchema } from '/@/views/codesale/recharge/data';
  import WalletModal from '/@/views/codesale/recharge/components/WalletModal.vue';
  const userData = ref({});
  const { createMessage } = useMessage();
  export default defineComponent({
    components: { WalletModal, PageWrapper, Description, BasicTable, TableAction },
    setup() {
      const [registerModal, { openModal: openM }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '积分管理列表',
        api: getSaleRechargeListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
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
      const searchInfo = reactive<Recordable>({});
      function handleSelect(saleName = '') {
        searchInfo.saleName = saleName;
        reload();
      }
      onMounted(() => {
        getUser();
      });
      function handleCreate() {
        var res = userData.value;
        console.log(res.balance)
        const titleDesc = '核销帐号：' + res.account + '（当前帐号）';
        openM(true, {
          title: titleDesc,
          balance: res.balance,
        });
      }
      function getUser() {
        getVboxUserInfo().then((res) => {
          userData.value = res;
          console.log(userData.value);
          userData.value['yesterdayPercent'] = getPercent(
            res.yesterdayOrderNum,
            res.yesterdayProdOrderNum,
          );
          userData.value['todayPercent'] = getPercent(res.todayOrderNum, res.todayProdOrderNum);
          userData.value['hourPercent'] = getPercent(res.hourOrderNum, res.hourProdOrderNum);
        });
      }
      function getPercent(num, total) {
        num = parseFloat(num);
        total = parseFloat(total);
        if (isNaN(num) || isNaN(total)) {
          return 0;
        }
        let rs = total <= 0 ? 0 : Math.round((num / total) * 10000) / 100.0;
        console.log(num, total, rs);
        return rs;
      }

      const commonLinkRender = (text: string) => (href) => h('a', { href, target: '_blank' }, text);
      const commonCountRender = (prefix: string, color: string, endVal: number) => (culVal) =>
        h(CountTo, { prefix, color, endVal: culVal }, () => {
          endVal;
        });
      const infoSchema: DescItem[] = [
        {
          label: '登录商户',
          field: 'account',
          // render: commonTagRender('blue'),
        },
        {
          label: '商户余额',
          field: 'balance',
          render: commonCountRender('￥', 'blue', 0),
          // render: (curVal, data) => {
          //   return `${data.balance}`;
          // },
        },
        {
          label: '商户费率',
          field: 'tariff',
          render: commonLinkRender('请联系运营确认'),
          span: 2,
        },
        {
          label: '商户类型',
          field: 'userLevel',
          render: commonLinkRender('主号模式'),
        },
      ];
      const [register] = useDescription({
        title: '账户信息',
        data: userData,
        schema: infoSchema,
        column: 2,
      });
      return {
        handleCreate,
        registerTable,
        registerModal,
        getPercent,
        register,
        handleSuccess,
        searchInfo,
        handleSelect,
      };
    },
  });
</script>
