<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <div>{{ item.account }}的统计图：</div>
      <div ref="chart{{ index }}"></div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';
  import * as echarts from 'echarts';
  // import { getVboxUserOrderSum } from '/@/api/channel/user';
  // const chartData = ref([]);
  //
  // getVboxUserOrderSum().then((res) => {
  //   chartData.value = res;
  //   console.log(chartData.value);
  // });
  export default defineComponent({
    name: 'ChartComponent',
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      // console.log(this.data);
      this.data.forEach((item, index) => {
        console.log(item);
        let s = 'chart' + index;
        console.log(s);
        // const chart = echarts.init(this.$refs[`chart${index}`] as HTMLDivElement);
        // // const chart = echarts.init(document.getElementById(s));
        // const xData: string[] = [];
        // const yData: number[] = [];
        // for (const key in item.list) {
        //   if (Object.prototype.hasOwnProperty.call(item.list, key)) {
        //     xData.push(key);
        //     yData.push(item.list[key]);
        //   }
        // }
        // const option = {
        //   xAxis: {
        //     type: 'category',
        //     data: xData,
        //   },
        //   yAxis: {
        //     type: 'value',
        //   },
        //   series: [
        //     {
        //       data: yData,
        //       type: 'bar',
        //     },
        //   ],
        // };
        // chart.setOption(option);
      });
    },
  });
</script>
