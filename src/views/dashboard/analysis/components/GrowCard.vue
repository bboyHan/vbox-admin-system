<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      title="昨日订单"
      class="md:w-1/4 w-full !md:mt-0"
      :class="{ '!md:mr-4': 1 < 4, '!mt-4': 0 > 0 }"
    >
      <template #extra>
        <Tag color="blue">笔</Tag>
      </template>

      <div class="py-8 px-12 flex justify-between items-center">
        <CountTo prefix="" :startVal="1" :endVal="yesterdayOrderNum" class="text-2xl" />
      </div>
    </Card>
    <Card
      size="small"
      :loading="loading"
      title="昨日充值"
      class="md:w-1/4 w-full !md:mt-0"
      :class="{ '!md:mr-4': 2 + 1 < 4, '!mt-4': 2 > 0 }"
    >
      <template #extra>
        <Tag color="blue">元</Tag>
      </template>

      <div class="py-8 px-8 flex justify-between items-center">
        <CountTo prefix="￥" :startVal="1" :endVal="yesterdayOrderSum" class="text-2xl" />
      </div>
    </Card>
    <Card
      size="small"
      :loading="loading"
      title="今日订单"
      class="md:w-1/4 w-full !md:mt-0"
      :class="{ '!md:mr-4': 1 + 1 < 4, '!mt-4': 1 > 0 }"
    >
      <template #extra>
        <Tag color="orange">笔</Tag>
      </template>

      <div class="py-8 px-12 flex justify-between items-center">
        <CountTo prefix="" :startVal="1" :endVal="todayOrderNum" class="text-2xl" />
      </div>
    </Card>
    <Card
      size="small"
      :loading="loading"
      title="今日充值"
      class="md:w-1/4 w-full !md:mt-0"
      :class="{ '!md:mr-4': 3 + 1 < 4, '!mt-4': 3 > 0 }"
    >
      <template #extra>
        <Tag color="blue">元</Tag>
      </template>

      <div class="py-8 px-8 flex justify-between items-center">
        <CountTo prefix="￥" :startVal="1" :endVal="todayOrderSum" class="text-2xl" />
      </div>
    </Card>
  </div>
</template>
<script lang="ts">
  import { CountTo } from '/@/components/CountTo';
  import { Tag, Card } from 'ant-design-vue';
  import { growCardList } from '../data';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { CountTo, Tag, Card },
    props: {
      account: String,
      yesterdayOrderNum: Number,
      todayOrderNum: Number,
      yesterdayOrderSum: Number,
      todayOrderSum: Number,
      loading: Boolean,
    },
    setup(props) {
      return {
        props,
        growCardList,
      };
    },
  });
</script>
