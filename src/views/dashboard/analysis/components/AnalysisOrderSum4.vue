<template>
  <div>
    <div v-for="(data, index) in chartData" :key="index">
      <h3>{{ data.account }} - {{ data.sid }}</h3>
      <div ref="data.chartRef" style="width: 100%; height: 500px"></div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, Ref, ref } from 'vue';
  import { getVboxUserOrderSum } from '/@/api/channel/user';
  // import * as echarts from 'echarts';
  import { useECharts } from '/@/hooks/web/useECharts';
  let chartData = [];

  // let data = [1, 1];
  export default defineComponent({
    setup() {
      onMounted(() => {
        listOrderView();
      });

      function renderCharts() {
        chartData.forEach((data, index) => {
          const { setOptions } = useECharts(data.chartRef as Ref<HTMLDivElement>);
          setOptions({
            xAxis: {
              type: 'category',
              data: data.xData,
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                data: data.yData,
                type: 'bar',
              },
            ],
          });
        });
      }
      function listOrderView() {
        getVboxUserOrderSum()
          .then((res) => {
            chartData = res.map((data) => {
              const xData = [];
              const yData = [];
              for (const key in data.list) {
                xData.push(key);
                yData.push(data.list[key]);
              }
              return {
                chartRef: ref<HTMLDivElement | null>(null),
                account: data.account,
                sid: data.sid,
                xData,
                yData,
              };
            });
            console.log(chartData);
          })
          .then(() => {
            renderCharts();
          });
      }

      return { chartData };
    },
  });
</script>
