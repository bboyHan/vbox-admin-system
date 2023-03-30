<template>
  <div class="md:flex">
    <Description @register="register" class="md:w-1/1 w-full" />
    <!-- <Card
       size="small"
       :loading="loading"
       title="昨日收入"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 1 < 8, '!mt-8': 0 > 0 }"
     >
       <template #extra>
         <Tag color="blue">元</Tag>
       </template>

       <div class="py-8 px-12 flex justify-between items-center">
         <CountTo prefix="￥" :startVal="1" :endVal="yesterdaySum" class="text-2xl" />
       </div>
     </Card>
     <Card
       size="small"
       :loading="loading"
       title="今日收入"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 1 + 1 < 8, '!mt-8': 1 > 0 }"
     >
       <template #extra>
         <Tag color="blue">元</Tag>
       </template>

       <div class="py-8 px-8 flex justify-between items-center">
         <CountTo prefix="￥" :startVal="1" :endVal="todaySum" class="text-2xl" />
       </div>
     </Card>
     <Card
       size="small"
       :loading="loading"
       title="今日成功率"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 2 + 1 < 8, '!mt-8': 2 > 0 }"
     >
       <template #extra>
         <Tag color="orange">百分比</Tag>
       </template>

       <div class="py-8 px-12 flex justify-between items-center">
         <CountTo
           suffix="%"
           :startVal="1"
           :endVal="getPercent(todayNum, todayProdNum)"
           class="text-2xl"
         />
       </div>
     </Card>
     <Card
       size="small"
       :loading="loading"
       title="总成功率"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 3 + 1 < 8, '!mt-8': 3 > 0 }"
     >
       <template #extra>
         <Tag color="blue">百分比</Tag>
       </template>

       <div class="py-8 px-8 flex justify-between items-center">
         <CountTo
           suffix="%"
           :startVal="1"
           :endVal="getPercent(totalNum, totalProdNum)"
           class="text-2xl"
         />
       </div>
     </Card>
     <Card
       size="small"
       :loading="loading"
       title="一小时成功率"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 4 < 8, '!mt-8': 4 > 0 }"
     >
       <template #extra>
         <Tag color="blue">百分比</Tag>
       </template>

       <div class="py-8 px-12 flex justify-between items-center">
         <CountTo
           suffix="%"
           :startVal="1"
           :endVal="getPercent(hourNum, hourProdNum)"
           class="text-2xl"
         />
       </div>
     </Card>
     <Card
       size="small"
       :loading="loading"
       title="一小时总金额"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 5 + 1 < 8, '!mt-8': 5 > 0 }"
     >
       <template #extra>
         <Tag color="blue">元</Tag>
       </template>

       <div class="py-8 px-8 flex justify-between items-center">
         <CountTo prefix="￥" :startVal="1" :endVal="hourSum" class="text-2xl" />
       </div>
     </Card>
     <Card
       size="small"
       :loading="loading"
       title="累计充值"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 6 + 1 < 8, '!mt-8': 6 > 0 }"
     >
       <template #extra>
         <Tag color="orange">元</Tag>
       </template>

       <div class="py-8 px-12 flex justify-between items-center">
         <CountTo prefix="￥" :startVal="1" :endVal="totalSum" class="text-2xl" />
       </div>
     </Card>
     <Card
       size="small"
       :loading="loading"
       title="累计订单数"
       class="md:w-1/8 w-full !md:mt-0"
       :class="{ '!md:mr-8': 7 + 1 < 8, '!mt-8': 7 > 0 }"
     >
       <template #extra>
         <Tag color="blue">笔</Tag>
       </template>

       <div class="py-8 px-8 flex justify-between items-center">
         <CountTo suffix="" :startVal="1" :endVal="totalNum" class="text-2xl" />
         <span class="text-2xl">/</span>
         <CountTo suffix="" :startVal="1" :endVal="totalProdNum" class="text-2xl" />
       </div>
     </Card>-->
  </div>
</template>
<script lang="ts">
  import { CountTo } from '/@/components/CountTo';
  import { Tag, Card } from 'ant-design-vue';
  import { defineComponent, h, onMounted, ref } from 'vue';
  import Img from '/@/assets/images/jx3.jpg';
  import { Description, DescItem, useDescription } from '/@/components/Description';
  import { getVboxUserInfo } from '/@/api/channel/user';

  const userData = ref({});

  export default defineComponent({
    components: { CountTo, Tag, Card, Description },
    props: {
      account: String,
      yesterdayNum: Number,
      todayNum: Number,
      yesterdaySum: Number,
      todaySum: Number,
      todayProdNum: Number,
      hourProdNum: Number,
      hourSum: Number,
      hourNum: Number,
      totalNum: Number,
      totalSum: Number,
      totalProdNum: Number,
      loading: Boolean,
    },
    setup(props) {
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
      const commonTagRender = (color: string) => (curVal) => h(Tag, { color }, () => curVal);
      // const commonLinkRender = (text: string) => (href) => h('a', { href, target: '_blank' }, text);
      const commonCountRender = (suffix: string, color: string, endVal: number) => (culVal) =>
        h(CountTo, { suffix: suffix, color, endVal: culVal }, () => {
          endVal;
        });

      const infoSchema: DescItem[] = [
        {
          label: '昨日订单量',
          field: 'yesterdayProdOrderNum',
          render: commonTagRender('blue'),
        },
        {
          label: '昨日成单量',
          field: 'yesterdayOrderNum',
          render: commonTagRender('blue'),
        },
        {
          label: '昨日成功率',
          field: 'yesterdayPercent',
          render: commonCountRender('%', 'red', 0),
          // render: (curVal, data) => {
          //   return `${data.balance}`;
          // },
        },
        {
          label: '昨日收入',
          field: 'yesterdayOrderSum',
          render: commonTagRender('red'),
        },
        {
          label: '今日订单量',
          field: 'todayProdOrderNum',
          render: commonTagRender('blue'),
        },
        {
          label: '今日成单量',
          field: 'todayOrderNum',
          render: commonTagRender('blue'),
        },
        {
          label: '今日成功率',
          field: 'todayPercent',
          render: commonCountRender('%', 'red', 0),
          // render: (curVal, data) => {
          //   return `${data.balance}`;
          // },
        },
        {
          label: '今日收入',
          field: 'todayOrderSum',
          render: commonTagRender('red'),
        },
        {
          label: '1小时订单量',
          field: 'hourProdOrderNum',
          render: commonTagRender('blue'),
        },
        {
          label: '1小时成单量',
          field: 'hourOrderNum',
          render: commonTagRender('blue'),
        },
        {
          label: '1小时成功率',
          field: 'hourPercent',
          render: commonCountRender('%', 'red', 0),
        },
        {
          label: '1小时收入',
          field: 'hourOrderSum',
          render: commonTagRender('red'),
        },
      ];
      onMounted(() => {
        getUser();
      });
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
          // balance.value = res.balance;
          // account.value = res.account;
          // yesterdayOrderNum.value = res.yesterdayOrderNum;
          // todayOrderNum.value = res.todayOrderNum;
          // yesterdayOrderSum.value = res.yesterdayOrderSum;
          // todayOrderSum.value = res.todayOrderSum;

        });
      }
      const [register] = useDescription({
        title: '账户信息',
        data: userData,
        schema: infoSchema,
        column: 4,
      });
      return {
        props,
        Img,
        getPercent,
        register,
      };
    },
  });
</script>
