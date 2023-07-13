<template>
  <div>
    <PageWrapper contentBackground>
      <!-- <div class="md:flex enter-y">
         <OrderGrowCard
           :loading="loading"
           :account="account"
           :yesterdayNum="yesterdayNum"
           :todayNum="todayNum"
           :yesterdaySum="yesterdaySum"
           :todaySum="todaySum"
           :todayProdNum="todayProdNum"
           :hourProdNum="hourProdNum"
           :hourSum="hourSum"
           :hourNum="hourNum"
           :totalNum="totalNum"
           :totalSum="totalSum"
           :totalProdNum="totalProdNum"
           class="md:w-1/1 !md:mx-8 !md:my-0 !my-8 w-full"
         />
       </div>-->
      <div>
        <BasicTable @register="registerTable">
          <template #bodyCell="{ column, record }">
            <!--<template v-if="column.key === 'resourceUrl'">
              <QrCode :value="record.resourceUrl" :width="70" />
            </template>-->
            <template v-if="column.key === 'action'">
              <TableAction
                :actions="[
                  {
                    icon: 'ant-design:copy-outlined',
                    onClick: copyLink.bind(null, record),
                  },
                  {
                    icon: 'ant-design:thunderbolt-outlined',
                    popConfirm: {
                      title: '模拟回调',
                      confirm: mockCallback.bind(null, record),
                    },
                  },
                  {
                    icon: 'ant-design:sound-outlined',
                    popConfirm: {
                      title: '手动回调',
                      confirm: checkAndCallback.bind(null, record),
                    },
                  },
                ]"
              />
            </template>
          </template>
        </BasicTable>
      </div>
      <div>
        <BasicTable @register="registerTableWait">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
              <TableAction
                :actions="[
                  {
                    icon: 'ant-design:copy-outlined',
                    onClick: copyLink.bind(null, record),
                  },
                  {
                    icon: 'ant-design:thunderbolt-outlined',
                    popConfirm: {
                      title: '模拟回调',
                      confirm: mockCallback.bind(null, record),
                    },
                  },
                  {
                    icon: 'ant-design:sound-outlined',
                    popConfirm: {
                      title: '手动回调',
                      confirm: checkAndCallback.bind(null, record),
                    },
                  },
                ]"
              />
            </template>
          </template>
        </BasicTable>
      </div>
<!--      <SelfIndex />-->
    </PageWrapper>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, unref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columnsWait, columns, searchFormSchema } from '/@/views/order/resource/data';
  import {
    getOrderList,
    testCallback,
    queryAndCallback,
    getOrderListWait,
  } from '/@/api/channel/pay';
  import { PageWrapper } from '/@/components/Page';
  import { getVboxUserInfo } from '/@/api/channel/user';
  // import OrderGrowCard from './components/OrderGrowCard.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useFormRules, useFormValid } from '/@/views/sys/login/useLogin';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  const { createMessage } = useMessage();
  const { clipboardRef, copiedRef } = useCopyToClipboard();
  // import SelfIndex from '/@/views/codesale/self/index.vue';
  import dayjs from 'dayjs';

  const formData = reactive({
    inputNum: '',
  });
  const formRef = ref();
  const loadingNum = ref(false);
  const { getFormRules } = useFormRules(formData);
  const { validForm } = useFormValid(formRef);
  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      // QrCode,
      PageWrapper,
      // OrderGrowCard,
      // SelfIndex,
    },
    setup() {
      const loading = ref(true);
      const userData = ref({});
      const account = ref('');
      const balance = ref(0);

      const yesterdayNum = ref(0);
      const yesterdaySum = ref(0);

      const todaySum = ref(0);
      const todayNum = ref(0);
      const todayProdNum = ref(0);

      const hourProdNum = ref(0);
      const hourSum = ref(0);
      const hourNum = ref(0);

      const totalProdNum = ref(0);
      const totalNum = ref(0);
      const totalSum = ref(0);

      onMounted(() => {
        getUser();
      });
      setTimeout(() => {
        loading.value = false;
      }, 1500);
      function getUser() {
        getVboxUserInfo().then((res) => {
          userData.value = res;
          console.log(res);
          balance.value = res.balance;
          account.value = res.account;
          yesterdayNum.value = res.yesterdayOrderNum;
          todayNum.value = res.todayOrderNum;
          yesterdaySum.value = res.yesterdayOrderSum;
          todaySum.value = res.todayOrderSum;
          todayProdNum.value = res.todayProdOrderNum;
          hourProdNum.value = res.hourProdOrderNum;
          hourSum.value = res.hourOrderSum;
          hourNum.value = res.hourOrderNum;
          totalNum.value = res.totalCostNum;
          totalSum.value = res.totalCostSum;
          totalProdNum.value = res.totalProdNum;
        });
      }
      const [registerTableWait] = useTable({
        title: '订单列表（待取码）',
        api: getOrderListWait,
        columns: columnsWait,
        // scroll: { x: 1800, y: 500 },
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // fixed: 'right',
        },
      });

      const [registerTable, { reload }] = useTable({
        title: '订单详情列表',
        api: getOrderList,
        columns,
        // scroll: { x: 1800, y: 500 },
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // fixed: 'right',
        },
      });

      /**
       * 模拟回调
       */
      function mockCallback(record: Recordable) {
        testCallback(record.orderId)
          .then((res) => {
            createMessage.info('模拟回调成功，谨慎操作' + res.toString());
          })
          .catch(() => {
            createMessage.error('模拟回调失败');
          });
      }
      function copyLink(record) {
        let orderId = record.orderId;
        clipboardRef.value = 'http://101.42.16.241:10717/#/code/pay?orderId=' + orderId;
        // clipboardRef.value = 'http://127.0.0.1:3100/#/code/pay?orderId=' + orderId;
        if (unref(copiedRef)) {
          createMessage.warning('复制成功: ' + clipboardRef.value);
        }
      }

      /**
       * 查单回调
       */
      function checkAndCallback(record) {
        queryAndCallback(record.orderId)
          .then((res) => {
            createMessage.info('手动回调成功,响应数据：' + res + '，谨慎操作');
          })
          .catch(() => {
            createMessage.error('手动回调失败');
          });
      }
      function handleSuccess() {
        reload();
      }
      async function handleRegister() {
        const data = await validForm();
        if (!data) return;
        console.log(data);
      }

      let ct;
      function dateFormat(val) {
        val = dayjs(val).format('MM-DD HH:mm:ss');
        console.log(val);
        return val;
      }

      return {
        registerTableWait,
        registerTable,
        ct,
        dateFormat,
        copyLink,
        mockCallback,
        checkAndCallback,
        handleSuccess,
        loading,
        account,
        balance,
        yesterdayNum,
        todayNum,
        yesterdaySum,
        todaySum,
        todayProdNum,
        hourProdNum,
        hourSum,
        hourNum,
        totalNum,
        totalSum,
        totalProdNum,
        handleRegister,
        getFormRules,
        loadingNum,
        formData,
      };
    },
  });
</script>
