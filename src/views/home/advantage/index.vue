<template>
  <div id="home-advantage">
    <div id="home-advantage-introduce">
      <a-divider style="font-size: x-large">我们的优势</a-divider>
      <p style="font-size: large; text-align: center"> 数字化运营平台 </p>
    </div>
    <div id="home-advantage-content">
      <a-row justify="center" bordered="false" :gutter="[16, 16]">
        <div v-for="(item, index) in advantageList" :key="index">
          <a-col :span="6">
            <a-card hoverable style="width: 340px">
              <a-card-meta :title="item.title">
                <template #description>{{ item.p }}</template>
              </a-card-meta>
            </a-card>
          </a-col>
        </div>
      </a-row>
    </div>
  </div>
</template>

<script>
  import { openWindow } from '/@/utils';
  import { defineComponent, onMounted, ref } from 'vue';
  import { Card, Divider, Row, Col } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { advantageItems } from './data';

  export default defineComponent({
    name: 'HomeAdvantage',
    components: {
      ACard: Card,
      ACardMeta: Card.Meta,
      ADivider: Divider,
      ARow: Row,
      ACol: Col,
    },
    setup() {
      const { t } = useI18n();
      const advantageList = ref();
      onMounted(() => {
        getAdvantageList();
      });
      function getAdvantageList() {
        advantageList.value = advantageItems;
      }
      return {
        t,
        openWindow,
        advantageList,
      };
    },
  });
</script>

<style scoped>
  #home-advantage {
    width: 90%;
    height: 600px;
    position: relative;
    margin-left: 5%;
    margin-right: 5%;
  }

  #home-advantage-introduce {
    /*子元素绝对定位*/
    /*position: absolute;*/
    /*子元素分别相对top,left偏移50%*/
    /*vertical-align: middle;*/
    width: 100%;
    height: 100px;
  }

  /*#home-advantage-content {*/
  /*  !*子元素绝对定位*!*/
  /*  !*position: relative;*!*/
  /*  width: 80%;*/
  /*  height: 400px;*/
  /*  !*top: 30%;*!*/
  /*  !*left: 5%;*!*/
  /*  right: 5%;*/
  /*  vertical-align: middle;*/
  /*}*/
</style>
