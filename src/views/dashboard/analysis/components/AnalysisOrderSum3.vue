<template>
  <div>
<!--    <div ref="chartRef" style="{ height: 100%; width: 100% }"></div>-->
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

  function listOrderView() {
    getVboxUserOrderSum().then((res) => {
      let xAxisData = [];
      let yAxisData = [];
      let gridData = [];
      let seriesData = [];
      let visualMapData = [];
      let titleData = [];
      res.forEach((item, i, arr) => {
        let arrSize = arr.length;
        console.log(arrSize);
        let seriesDataX = [];
        let seriesDataY = [];
        // console.log(item.account);
        // legendData.push(item.account);
        let l = new Map(Object.entries(item.list));
        // console.log(l);
        l.forEach((item, index) => {
          // console.log(index);
          // console.log(item);
          seriesDataX.push(index);
          seriesDataY.push(item);
        });
        let xAxis = {
          data: seriesDataX,
          gridIndex: i,
        };
        let yAxis = {
          gridIndex: i,
        };
        let series = {
          type: 'line',
          showSymbol: false,
          data: seriesDataY,
          yAxisIndex: i,
          xAxisIndex: i,
        };
        let visualMap = {
          show: false,
          type: 'continuous',
          seriesIndex: i,
          dimension: 3,
          min: 0,
          max: 500,
        };
        let h = (100 / arrSize) * i;
        console.log(h);
        let title = {
          top: h + '%',
          left: 'center',
          text: item.account,
        };
        let grid = {
          top: '10%',
        };
        xAxisData.push(xAxis);
        yAxisData.push(yAxis);
        gridData.push(grid);
        seriesData.push(series);
        visualMapData.push(visualMap);
        titleData.push(title);
      });
      console.log(visualMapData);
      console.log(titleData);
      console.log(xAxisData);
      console.log(yAxisData);
      console.log(gridData);
      console.log(seriesData);
      setOptions({
        // Make gradient line here
        visualMap: visualMapData,
        title: titleData,
        tooltip: {
          trigger: 'axis',
        },
        xAxis: xAxisData,
        yAxis: yAxisData,
        grid: gridData,
        series: seriesData,
      });
    });
  }
</script>
