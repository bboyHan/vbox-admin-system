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
          <CardMeta title="剑网3（微信端）" description="wechat pay">
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
          <CardMeta title="剑网3（支付宝端）" description="ali pay">
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
          <CardMeta title="剑网3（京东端）" description="JD pay">
            <template #avatar>
              <img :src="JD" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="TH" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="send('剑网3（特惠礼盒）', 'jx3_ali_gift')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="剑网3（特惠礼盒-支付宝）" description="固额（76，156，162，276）">
            <template #avatar>
              <img :src="AliPay" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="TH" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="send('剑网3（特惠礼盒）', 'jx3_wx_gift')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="剑网3（特惠礼盒-微信）" description="固额（76，156，162，276）">
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
            <a-button type="text" @click="send('剑网3（微信扫码端）', 'jx3_weixin_qr')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="剑网3（微信扫码端）" description="使用手机设备扫码电脑链接二维码">
            <template #avatar>
              <img :src="WeChat" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="QQ" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="sendTx('腾讯QB（交易猫）', 'tx_jym')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="腾讯（交易猫）" description="引导类支付">
            <template #avatar>
              <img :src="AliPay" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="QQ" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="sendTx('腾讯QB（淘宝）', 'tx_tb')"> 添加帐号 </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="腾讯QB（淘宝）" description="引导类支付，固额30，50，100，200，300">
            <template #avatar>
              <img :src="TaoBaoLogo" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="QQ" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="sendTx('腾讯QB（抖音）', 'tx_dy')"> 添加帐号 </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="腾讯QB（抖音）" description="引导类支付，固额50，100，200，300，500">
            <template #avatar>
              <img :src="DouYin" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="QQ" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="sendTx('腾讯QB（京东）', 'tx_jd')"> 添加帐号 </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="腾讯QB（京东）" description="引导类支付，固额50，100，200，300，500">
            <template #avatar>
              <img :src="JD" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="QQ" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="sendTx('腾讯QB（支付宝小程序）', 'tx_zfb')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta
            title="腾讯QB（支付宝小程序）"
            description="引导类支付，固额50，100，200，300，500"
          >
            <template #avatar>
              <img :src="AliPay" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="SDO" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="sendSdo('测试（支付宝）', 'sdo_alipay')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="测试（支付宝）" description="预产类支付，固额50，100，200，300，500">
            <template #avatar>
              <img :src="AliPay" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="SDO" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="sendSdo('测试2（支付宝）', 'cy_alipay')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="测试2（支付宝）" description="预产类支付，固额100-1000">
            <template #avatar>
              <img :src="AliPay" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
      <Col :span="6">
        <Card hoverable>
          <template #cover>
            <img :src="SDO" alt="" style="height: 150px" />
          </template>
          <template #actions>
            <a-button type="text" @click="send('剑三预产（支付宝）', 'jx3_alipay_pre')">
              添加帐号
            </a-button>
            <a-button type="text">
              <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
            </a-button>
          </template>
          <CardMeta title="剑三预产（支付宝）" description="预产类支付，固额100-1000">
            <template #avatar>
              <img :src="AliPay" style="width: 30px; height: 30px" alt="" />
            </template>
          </CardMeta>
        </Card>
      </Col>
    </Row>

    <CreateU @register="register" />
    <CreateTxU @register="registerTx" />
    <CreateSdoU @register="registerSdo" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Row, Col, Alert, Card, CardMeta } from 'ant-design-vue';
  import { channelItems } from './data';
  import { useModal } from '/@/components/Modal';
  import CreateU from '/@/views/channel/resource/components/CreateU.vue';
  import CreateTxU from '/@/views/channel/resource/components/CreateTxU.vue';
  import CreateSdoU from '/@/views/channel/resource/components/CreateSdoU.vue';
  import { PageWrapper } from '/@/components/Page';

  import JX3 from '/@/assets/images/jx3.jpg';
  import WeChat from '/@/assets/images/wechat.jpg';
  import AliPay from '/@/assets/images/alipay.png';
  import JD from '/@/assets/images/jd.png';
  import TH from '/@/assets/images/th.png';
  import QQ from '/@/assets/images/QQ_C.jpg';
  import SDO from '/@/assets/images/test.png';
  import TaoBaoLogo from '/@/assets/images/taobao.png';
  import DouYin from '/@/assets/images/douyin.png';

  // const go = useGo();
  export default defineComponent({
    components: {
      Row,
      Col,
      Alert,
      CreateU,
      CreateTxU,
      CreateSdoU,
      Card,
      CardMeta,
      PageWrapper,
    },
    setup() {
      const [register, { openModal: openM }] = useModal();
      const [registerTx, { openModal: openTxM }] = useModal();
      const [registerSdo, { openModal: openSdoM }] = useModal();

      function send(title, channel_id) {
        openM(true, {
          title: title,
          channel_id: channel_id,
        });
      }
      function sendTx(title, channel_id) {
        openTxM(true, {
          title: title,
          channel_id: channel_id,
        });
      }
      function sendSdo(title, channel_id) {
        openSdoM(true, {
          title: title,
          channel_id: channel_id,
        });
      }

      return {
        items: channelItems,
        send,
        sendTx,
        sendSdo,
        register,
        registerTx,
        registerSdo,
        QQ,
        SDO,
        JX3,
        WeChat,
        AliPay,
        TaoBaoLogo,
        DouYin,
        JD,
        TH,
      };
    },
  });
</script>
