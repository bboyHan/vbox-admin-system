<template>
  <PageWrapper title="通道管理" contentFullHeight contentBackground>
    <Alert
      message="通道列表内容管理，可在此添加通道帐号，目前只支持剑网情缘3"
      show-icon
      style="margin-bottom: 10px"
    />
    <!--<Card title="通道列表" v-bind="$attrs">
      <template #extra>
        <a-button type="text" size="middle">更多</a-button>
      </template>

      <CardGrid v-for="item in items" :key="item" class="!md:w-1/3 !w-full">
        <a-space class="text-lg ml-4">{{ item.title }}</a-space>
        <div>
          <span class="flex">
            <img :src="item.icon" alt="" style="height: 150px" />
          </span>
        </div>
        <div class="flex justify-between text-secondary">
          <a-button type="text" @click="send(item.title, item.channel_id)"> 添加帐号 </a-button>
          <a-button type="text">
            <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
          </a-button>
          <a-button type="text" @click="send(item.title)"> 设置倍率 </a-button>
        </div>
      </CardGrid>
    </Card>-->
    <Row :gutter="[6, 6]">
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="JX3" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="send('剑网3（微信端）', 'jx3_weixin')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="剑网3（微信端）" description="This is the description">
            <template #avatar>
              <img :src="WeChat" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="JX3" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="send('剑网3（支付宝端）', 'jx3_alipay')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="剑网3（支付宝端）" description="This is the description">
            <template #avatar>
              <img :src="AliPay" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="JX3" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="send('剑网3（京东端）', 'jx3_jd')"> 添加帐号 </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="剑网3（京东端）" description="This is the description">
            <template #avatar>
              <img :src="JD" style="width: 30px; height: 30px" alt=""/>
            </template>
          </CardMeta>
        </Card>
      </Col>
    </Row>

    <CreateU @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Row, Col, Alert, Card, CardMeta } from 'ant-design-vue';
  import { channelItems } from './data';
  import { useModal } from '/@/components/Modal';
  import CreateU from '/@/views/channel/resource/components/CreateU.vue';
  import { PageWrapper } from '/@/components/Page';

  import JX3 from '/@/assets/images/jx3.jpg';
  import WeChat from '/@/assets/images/wechat.jpg';
  import AliPay from '/@/assets/images/alipay.png';
  import JD from '/@/assets/images/jd.png';

  // const go = useGo();
  export default defineComponent({
    components: {
      Row,
      Col,
      Alert,
      CreateU,
      Card,
      CardMeta,
      PageWrapper,
    },
    setup() {
      const [register, { openModal: openM }] = useModal();

      function send(title, channel_id) {
        openM(true, {
          title: title,
          channel_id: channel_id,
        });
      }

      return { items: channelItems, send, register, JX3, WeChat, AliPay, JD };
    },
  });
</script>
