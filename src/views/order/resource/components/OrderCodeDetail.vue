<template>
  <div>
    <div class="m-5 result-success">
      <!--      <Result
        :title="titlePay"
        sub-title="该订单限时有效期为5分钟，为避免付款码失效，请收到后及时付款。无法充值或者提示错误，请联系客服!"
      >-->
      <Result>
        <template #icon>
          <Image :src="jdImg" style="margin: 20px 20px" />
          <Card size="small" style="color: red">
            {{ titlePay }}
          </Card>
          <Alert
            type="info"
            message="该订单限时有效期为5分钟，为避免付款码失效，请收到后及时付款。无法充值或者提示错误，请联系客服!"
          />
        </template>
        <template #extra>
          <Button type="primary" @click="jumpTo(payUrl)" style="margin: 20px 20px">
            一键复制并跳转支付
          </Button>
          <!-- <Button @click="wechat"> ddd </Button>
           <Button @click="test(payStr)"> ddd </Button>
           <Button @click="testApp(payStr)"> ddd </Button>-->
          <Button type="default"> 请先认真阅读以下支付流程 </Button>
          <Card hoverable style="width: 240px">
            <template #cover>
              <img :src="PayGif" alt="" />
            </template>
            <CardMeta title="请认真阅读视频支付流程" style="color: red">
              <template #description>
                <div>1.复制链接并跳转京东支付</div>
                <div>2.[订单信息]{{ titlePay }}</div>
                <div>3.西山居[剑网3]游戏充值</div>
              </template>
            </CardMeta>
          </Card>
          <TypographyText> 支付链接: {{ payUrl }} </TypographyText>
        </template>
      </Result>
      <!--<QrCode :value="payStr" />-->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { useRoute } from 'vue-router';
  import { Result, Button, TypographyText, Card, CardMeta, Image, Alert } from 'ant-design-vue';
  // import { decodeByBase64 } from '/@/utils/cipher';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { wechat } from '/@/assets/js/wx2.js';
  import CallApp from 'callapp-lib';
  import { getOrderCode } from '/@/api/channel/pay';
  import PayGif from '/@/assets/images/pay.gif';
  import jdImg from '/@/assets/images/jdpay-logo.png';
  export default defineComponent({
    name: 'OrderCodeDetail',
    components: { Result, Button, TypographyText, Card, CardMeta, Image, Alert },
    setup() {
      const route = useRoute();
      const { clipboardRef, copiedRef } = useCopyToClipboard();
      const { createMessage } = useMessage();
      // 此处可以得到用户ID
      console.log(route.query);
      const orderId = ref(route.query?.orderId);
      let oid = orderId.value == null ? '' : orderId.value.toString();
      let cost = ref(0);
      let titlePay = ref('');
      let payUrl = ref('');
      getOrderCode(oid).then((res) => {
        // copy(res.payUrl);
        cost.value = res.cost;
        titlePay.value = '金额：' + cost.value + '元';
        payUrl.value = res.payUrl;
      });
      let width = ref(300);
      console.log(payUrl);
      // if (payStr == '') {
      //   width.value = 0;
      // }

      function getPayCode(payUrl) {
        getOrderCode(payUrl).then((res) => {
          // copy(res.payUrl);
          cost.value = res.cost;
          titlePay.value = '微信支付：' + cost.value + '元';
        });
      }

      function copy(val) {
        clipboardRef.value = val;
        if (unref(copiedRef)) {
          createMessage.warning('复制成功: ' + val);
        }
        test(val);
      }

      function test(val) {
        // navigator.share({
        //   title: '西山居（微信）',
        //   text: '请再1-3分钟内进行支付',
        //   url: val,
        // });
        const options = {
          scheme: {
            protocol: 'weixin', //必填项 URL Scheme 的 scheme 字段，要打开的 APP 的标识，比如这里是微信的标识
          },
          intent: {
            //安卓原生谷歌浏览器必须传递 Intent 协议地址，才能唤起 APP
            // 这两个是intent的必填项
            package: 'com.tencent.mm', //腾讯微信包名
            scheme: 'weixin://',
          },
          appstore: 'https://weixin.qq.com/', //必填项 APP 的下载地址，比如这里是微信的下载地址
          yingyongbao: 'https://sj.qq.com/myapp/detail.htm?apkName=com.tencent.mm', //必填项 APP 的应用宝地址，比如这里微信的应用宝下载地址
          fallback: location.href, //必填项 唤起app端失败后跳转的地址。
        };
        const callLib = new CallApp(options);
        console.log(val);
        callLib.open({
          path: '',
        });
      }

      function testApp(url) {
        var t = 1000,
          hasApp = true;
        setTimeout(function () {
          if (!hasApp) {
            //没有安装微信
            var r = confirm('您没有安装微信，请先安装微信!');
            if (r == true) {
              location.href = 'http://weixin.qq.com/';
            }
          } else {
            //安装微信
          }
          document.body.removeChild(ifr);
        }, 2000);

        var t1 = Date.now();
        var ifr = document.createElement('iframe');
        console.log(ifr);
        ifr.setAttribute('src', url);
        ifr.setAttribute('style', 'display:none');
        document.body.appendChild(ifr);
        setTimeout(function () {
          var t2 = Date.now();
          if (!t1 || t2 - t1 < t + 100) {
            hasApp = false;
          }
        }, t);
      }

      function jumpTo(url) {
        clipboardRef.value = url;
        if (unref(copiedRef)) {
          createMessage.warning('复制成功: ' + url);
        }
        window.open(url, '_blank');
      }

      return {
        width,
        copy,
        wechat,
        test,
        testApp,
        cost,
        getPayCode,
        titlePay,
        payUrl,
        PayGif,
        jumpTo,
        jdImg,
      };
    },
  });
</script>

<style lang="less" scoped>
  .result-success {
    padding: 28px 12px;
    background-color: @component-background;

    &__content {
      padding: 14px 30px;
      background-color: @background-color-light;
    }
  }
</style>
