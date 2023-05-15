<template>
  <div>
    <chart-component :data="data" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ChartComponent from './ChartComponent.vue';
  import { getVboxUserOrderSum } from '/@/api/channel/user';
  const chartData = ref([]);

  getVboxUserOrderSum().then((res) => {
    chartData.value = res;
    // console.log(chartData.value);
  });
  export default defineComponent({
    name: 'App',
    components: {
      ChartComponent,
    },
    data() {
      return {
        data: chartData.value,
      };
    },
  });
</script>
