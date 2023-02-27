<template>
  <div class="p-4">
    <div class="md:flex enter-y">
      <Description @register="register" class="md:w-1/2 w-full" />
      <GrowCard
        :loading="loading"
        :account="account"
        :yesterdayOrderNum="yesterdayOrderNum"
        :todayOrderNum="todayOrderNum"
        :yesterdayOrderSum="yesterdayOrderSum"
        :todayOrderSum="todayOrderSum"
        class="md:w-1/2 !md:mx-4 !md:my-0 !my-4 w-full"
      />
    </div>
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
    <!--<div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading" />
    </div>-->
  </div>
</template>
<script lang="ts" setup>
  import { h, onMounted, ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';
  // import VisitSource from './components/VisitSource.vue';
  // import VisitRadar from './components/VisitRadar.vue';
  // import SalesProductPie from './components/SalesProductPie.vue';
  import { Description, DescItem, useDescription } from '/@/components/Description';
  import { CountTo } from '/@/components/CountTo';
  import { getVboxUserInfo } from '/@/api/channel/user';

  const loading = ref(true);

  const userData = ref({});
  const account = ref('');
  const balance = ref(0);
  const yesterdayOrderNum = ref(0);
  const todayOrderNum = ref(0);
  const yesterdayOrderSum = ref(0);
  const todayOrderSum = ref(0);

  onMounted(() => {
    getUser();
  });
  function getUser() {
    getVboxUserInfo().then((res) => {
      userData.value = res;
      console.log(userData.value);
      balance.value = res.balance;
      account.value = res.account;
      yesterdayOrderNum.value = res.yesterdayOrderNum;
      todayOrderNum.value = res.todayOrderNum;
      yesterdayOrderSum.value = res.yesterdayOrderSum;
      todayOrderSum.value = res.todayOrderSum;
    });
  }

  setTimeout(() => {
    loading.value = false;
  }, 1500);

  // const commonTagRender = (color: string) => (curVal) => h(Tag, { color }, () => curVal);
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
</script>
