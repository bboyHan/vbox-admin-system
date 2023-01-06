<template>
  <div id="home-product">
    <div id="home-product-introduce">
      <a-divider style="font-size: x-large">安全、可靠的产品</a-divider>
      <p style="font-size: x-large; text-align: center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mini
        ista ista ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
    <div id="home-product-content">
      <a-row justify="center">
        <a-space :size="40">
          <a-col :span="6">
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </template>
              <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </template>
              <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </template>
              <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card hoverable style="width: 240px">
              <template #cover>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </template>
              <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-space>
      </a-row>
    </div>
  </div>
</template>

<script>
  import { openWindow } from '/@/utils';
  import { defineComponent } from 'vue';
  import { Card, Divider, Row, Col, Space } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';

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
      return {
        t,
        openWindow,
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
