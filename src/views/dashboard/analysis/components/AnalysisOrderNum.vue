<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
  import { basicProps } from './props';
</script>
<script lang="ts" setup>
  import { onMounted, ref, Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { getVboxUserOrderNum } from '/@/api/channel/user';

  defineProps({
    ...basicProps,
  });

  // let data = [1, 1];

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  onMounted(() => {
    listOrderView();
  });
  function listOrderView() {
    getVboxUserOrderNum().then((res) => {
      setOptions({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              width: 1,
              color: '#019680',
            },
          },
        },
        grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
        xAxis: {
          type: 'category',
          data: [...new Array(24)].map((_item, index) => `${index}:00`),
        },
        yAxis: {
          type: 'value',
          max: 1000,
          splitNumber: 5,
        },
        series: [
          {
            data: res,
            type: 'bar',
            barMaxWidth: 80,
          },
        ],
      });
    });
  }
</script>
