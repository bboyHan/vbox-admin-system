<template>
  <Content>
    <!-- <div> {{ w }}</div> -->
    <home-carousel />
    <home-product />
    <home-advantage />
  </Content>
</template>

<script lang="ts">
  import { openWindow } from '/@/utils';
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import HomeCarousel from '/@/views/home/carousel/index.vue';
  import HomeProduct from '/@/views/home/product/index.vue';
  import HomeAdvantage from '/@/views/home/advantage/index.vue';
  //import { get_w } from './w.js';

  export default defineComponent({
    name: 'HomeContent',
    components: {
      Content: Layout.Content,
      HomeCarousel,
      HomeProduct,
      HomeAdvantage,
    },
    setup() {
      const { t } = useI18n();
      //                     时间戳                 真实坐标的 [x, y]  x/300*100,y/200*10000    lot_num  "235,69",
      //1674050483318
      //1674050484334
      // const w = get_w(
      //   '1674050484334',
      //   '[[235,69],[128,144],[43,100]]',
      //   '222f7abf80bf4922b76f96e02ccd329c',
      // );
      return {
        t,
        openWindow,
        // w,
      };
    },
  });
</script>
