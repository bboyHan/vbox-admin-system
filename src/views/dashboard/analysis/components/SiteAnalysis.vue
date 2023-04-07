<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tab-change="onTabChange"
  >
    <!--<p v-if="activeKey === 'tab1'">
      <VisitAnalysis />
    </p>-->
    <p v-if="activeKey === 'tab1'">
      <AnalysisOrderSum />
    </p>
    <p v-if="activeKey === 'tab2'">
      <AnalysisOrderNum />
    </p>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  // import VisitAnalysis from './VisitAnalysis.vue';
  import AnalysisOrderNum from './AnalysisOrderNum.vue';
  import AnalysisOrderSum from './AnalysisOrderSum.vue';

  const activeKey = ref('tab1');

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '成交金额',
    },
    {
      key: 'tab2',
      tab: '订单数量',
    },
    // {
    //   key: 'tab3',
    //   tab: '订单数量',
    // },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
