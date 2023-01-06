<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 50px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 50px">
        <right-circle-outlined />
      </div>
    </template>
    <div>
      <img alt="example" src="http://pic.qiantucdn.com/images/banner/63ad61a14317f.jpg" />
      <div class="carousel-subtitle"> VBox，你值得拥有 </div>
    </div>
    <div>
      <img alt="example" src="http://pic.qiantucdn.com/images/banner/63aa99402a874.jpg" />
    </div>
    <div>
      <img alt="example" src="http://pic.qiantucdn.com/images/banner/63aac425c0e15.jpg" />
    </div>
  </a-carousel>
</template>

<script lang="ts">
  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
  import { openWindow } from '/@/utils';
  import { defineComponent } from 'vue';
  import { Carousel } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'HomeCarousel',
    components: {
      LeftCircleOutlined,
      RightCircleOutlined,
      ACarousel: Carousel,
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

<style scoped>
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 400px;
    line-height: 160px;
    /*background: #364d79;*/
    background: url(http://pic.qiantucdn.com/images/banner/63aa99402a874.jpg) center center
      no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
  }

  .ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
  }

  .ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
  }

  .ant-carousel :deep(.slick-slide h3) {
    color: #fff;
  }

  .carousel-subtitle {
    margin-top: 8px;
    line-height: 40px;
    font-size: 28px;
    color: #252c3a;
  }
</style>
