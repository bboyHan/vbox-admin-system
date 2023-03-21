<template>
  <div>
    <div class="md:flex enter-y">
      <OrderOverviewCard
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
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import { testCallback } from '/@/api/channel/pay';
  import { getVboxUserInfo } from '/@/api/channel/user';
  import OrderOverviewCard from './components/OrderOverviewCard.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useFormRules, useFormValid } from '/@/views/sys/login/useLogin';
  const { createMessage } = useMessage();

  const formData = reactive({
    inputNum: '',
  });
  const formRef = ref();
  const loadingNum = ref(false);
  const { getFormRules } = useFormRules(formData);
  const { validForm } = useFormValid(formRef);
  export default defineComponent({
    components: {
      OrderOverviewCard,
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
      function handleDetail(record: Recordable) {
        testCallback(record.orderId)
          .then(() => {
            createMessage.info('回调测试成功，谨慎操作');
          })
          .catch(() => {
            createMessage.error('回调失败');
          });
      }

      function handleSuccess() {}

      async function handleRegister() {
        const data = await validForm();
        if (!data) return;
        console.log(data);
      }

      return {
        handleDetail,
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
