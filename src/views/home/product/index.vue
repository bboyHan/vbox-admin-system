<template>
  <div id="home-product">
    <div id="home-product-introduce">
      <a-divider style="font-size: x-large">安全、可靠的产品</a-divider>
      <p style="font-size: large; text-align: center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mini
        ista ista ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
    <div id="home-product-content">
      <a-row justify="center">
        <a-space :size="40">
          <div v-for="(item, index) in prodDescList" :key="index">
            <a-col :span="6">
              <a-card hoverable style="width: 240px">
                <template #cover>
                  <img alt="example" :src="item.url" />
                </template>
                <a-card-meta :title="item.title">
                  <template #description>{{ item.p }}</template>
                </a-card-meta>
              </a-card>
            </a-col>
          </div>
        </a-space>
      </a-row>
    </div>
  </div>
</template>

<script>
  import { openWindow } from '/@/utils';
  import { defineComponent, onMounted, ref } from 'vue';
  import { Card, Divider, Row, Col, Space } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { getProductDescList } from '/@/api/home/product';

  export default defineComponent({
    name: 'HomeProduct',
    components: {
      ACard: Card,
      ACardMeta: Card.Meta,
      ADivider: Divider,
      ARow: Row,
      ACol: Col,
      ASpace: Space,
    },
    setup() {
      const { t } = useI18n();
      const prodDescList = ref();
      onMounted(() => {
        getProductList();
      });
      function getProductList() {
        getProductDescList().then((res) => {
          console.log(res);
          prodDescList.value = res;
        });
      }
      return {
        t,
        openWindow,
        prodDescList,
      };
    },
  });
</script>

<style scoped>
  #home-product {
    width: 90%;
    height: 600px;
    position: relative;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
  }

  #home-product-introduce {
    /*子元素绝对定位*/
    position: absolute;
    /*子元素分别相对top,left偏移50%*/
    /*vertical-align: middle;*/
    width: 100%;
    height: 200px;
  }

  #home-product-content {
    /*子元素绝对定位*/
    position: absolute;
    /*子元素分别相对top,left偏移50%*/
    top: 30%;
    left: 5%;
    right: 5%;
    vertical-align: middle;
  }
</style>
