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
    <div v-for="(item, index) in l" :key="index">
      <div id="home-carousel">
        <img alt="" :src="item.url" />
        <div id="home-carousel-text">
          <h1>{{ item.title }}</h1>
          <h2>{{ item.subTitle }}</h2>
          <p>{{ item.p }}</p>
          <div class="home-carousel-button">
            <a-space :size="10">
              <a-button>{{ item.title }}</a-button>
              <a-button>{{ item.subTitle }}</a-button>
            </a-space>
          </div>
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<script lang="ts">
  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
  import { openWindow } from '/@/utils';
  import { defineComponent, onMounted, reactive, toRef } from 'vue';
  import { Carousel, Button, Space } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getCarouselInfo } from '/@/api/home/carousel';

  export default defineComponent({
    name: 'HomeCarousel',
    components: {
      LeftCircleOutlined,
      RightCircleOutlined,
      ACarousel: Carousel,
      AButton: Button,
      ASpace: Space,
    },

    setup() {
      let items = reactive({
        carouselInfos: {},
      });
      const { t } = useI18n();
      onMounted(() => {
        getCarouselList();
      });
      function getCarouselClass() {
        return {
          background: 'url(http://pic.qiantucdn.com/images/banner/63aa99402a874.jpg) center center',
        };
      }
      function getCarouselList() {
        getCarouselInfo().then((res) => {
          console.log(res);
          items.carouselInfos = res;
        });
      }
      return {
        t,
        openWindow,
        getCarouselClass,
        l: toRef(items, 'carouselInfos'),
      };
    },
  });
</script>

<style scoped>
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 400px;
    width: 100%;
    line-height: 150px;
    background: #fff1f0;
    /*border: #0e161f 5px;*/
    background-size: 100% 100%;
    overflow: hidden;
    /*position: relative;*/
  }

  .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 45px;
    height: 45px;
    font-size: 45px;
    color: #aaaaaa;
    /*background-color: rgba(31, 45, 61, 0.11);*/
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

  #home-carousel {
    width: 100%;
    /*text-align: center;*/
    /*vertical-align: middle;*/
  }

  #home-carousel img {
    width: 100%;
    max-width: 1920px;
    max-height: 400px;
    position: absolute;
  }

  #home-carousel-text h1 {
    text-align: left;
    font-size: 50px;
    color: #000000;
  }

  #home-carousel-text h2 {
    text-align: left;
    font-size: 10px;
    color: #000c17;
    margin-top: -130px;
  }

  #home-carousel-text p {
    text-align: left;
    font-size: 20px;
    color: #000c17;
    margin-top: -130px;
  }

  #home-carousel-text {
    position: relative;
    padding-left: 10%;
    padding-right: 10%;
  }

  #home-carousel-text .home-carousel-button {
    position: absolute;
  }
</style>
