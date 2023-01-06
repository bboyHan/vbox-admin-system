<template>
  <Content>
    <home-carousel />
    <home-product />
  </Content>
</template>

<script lang="ts">
  import { openWindow } from '/@/utils';
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import HomeCarousel from '/@/views/home/carousel/index.vue';
  import HomeProduct from '/@/views/home/product/index.vue';

  export default defineComponent({
    name: 'HomeContent',
    components: {
      Content: Layout.Content,
      HomeCarousel,
      HomeProduct,
    },
    setup() {
      const { t } = useI18n();
      return {
        t,
        openWindow,
      };
    },
  });
</script>
