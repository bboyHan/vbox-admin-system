<template>
  <Layout>
    <HomeHeader />
    <Layout>
      <HomeContent />
    </Layout>
    <HomeFooter />
  </Layout>
</template>

<script lang="ts">
  import { openWindow } from '/@/utils';
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import HomeHeader from '/@/views/home/header/index.vue';
  import HomeContent from '/@/views/home/content/index.vue';
  import HomeFooter from '/@/views/home/footer/index.vue';

  export default defineComponent({
    name: 'HomeLayout',
    components: {
      Layout,
      HomeFooter,
      HomeHeader,
      HomeContent,
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
