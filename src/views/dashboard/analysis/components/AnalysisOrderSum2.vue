<template>
  <div>
    <div ref="chartRef" :style="{ height, width }"></div>
  </div>
</template>
<script lang="ts">
  import { basicProps } from './props';
</script>
<script lang="ts" setup>
  import { onMounted, ref, Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { getVboxUserOrderSum } from '/@/api/channel/user';

  defineProps({
    ...basicProps,
  });

  // let data = [1, 1];
  onMounted(() => {
    listOrderView();
  });
  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  let seriesDataX = [];
  let seriesDataY = [];
  function listOrderView() {
    getVboxUserOrderSum().then((res) => {
      // setOptions({
      //   tooltip: {
      //     trigger: 'axis',
      //     axisPointer: {
      //       lineStyle: {
      //         width: 1,
      //         color: '#019680',
      //       },
      //     },
      //   },
      //   grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      //   xAxis: {
      //     type: 'category',
      //     data: [...new Array(24)].map((_item, index) => `${index}:00`),
      //   },
      //   yAxis: {
      //     type: 'value',
      //     max: 10000,
      //     splitNumber: 5,
      //   },
      //   series: [
      //     {
      //       data: res,
      //       type: 'bar',
      //       barMaxWidth: 80,
      //     },
      //   ],
      // });
      let legendData = [];
      // let seriesData = [];

      res.forEach((item) => {

        // console.log(item.account);
        // legendData.push(item.account);
        let l = new Map(Object.entries(item.list));
        console.log(l);
        l.forEach((item, index) => {
          // console.log(item);
          // console.log(index);
          seriesDataX.push(index);
          seriesDataY.push(item);
        });
      });
      setOptions({
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
          {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: 400,
          },
        ],
        title: [
          {
            left: 'center',
            text: 'item.account',
          },
          {
            top: '55%',
            left: 'center',
            text: 'item.account x',
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
        xAxis: [
          {
            data: seriesDataX,
          },
          {
            data: seriesDataX,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {},
          {
            gridIndex: 1,
          },
        ],
        grid: [
          {
            bottom: '60%',
          },
          {
            top: '60%',
          },
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: seriesDataY,
          },
          {
            type: 'line',
            showSymbol: false,
            data: seriesDataY,
            yAxisIndex: 1,
            xAxisIndex: 1,
          },
        ],
      });
    });
  }
</script>
