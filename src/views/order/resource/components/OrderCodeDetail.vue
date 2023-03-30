<template>
  <div>
    <div v-if="isError">
      <div class="m-5 result-success">
        <Result>
          <template #icon>
            <Empty description="" />
            <Card size="small" style="color: red; font-size: 25px">
              订单异常或不存在，请5秒后尝试重新刷新页面获取，如仍旧异常，请联系客服重新下单...
            </Card>
            <Button size="large" type="primary" @click="renew()" block> 点此尝试刷新 </Button>
          </template>
          <template #extra>
            <!--<hr class="my-4" />
            <Card hoverable style="width: 240px">
              <CardMeta title="请认真阅读支付流程" style="color: red">
                <template #description>
                  <div>1.长时等待仍未出订单</div>
                  <div>2.请联系客服重新下单</div>
                  <div>3.西山居[剑网3]游戏充值</div>
                </template>
              </CardMeta>
            </Card>
            <hr class="my-4" />-->
          </template>
        </Result>
        <!--<QrCode :value="payStr" />-->
      </div>
    </div>
    <div v-if="isPending">
      <div class="m-5 result-success">
        <Result>
          <template #icon>
            <Button
              id="ppid"
              size="large"
              shape="circle"
              v-bind="$attrs"
              @click="handleStart"
              :disabled="isStart"
              :loading="loading"
              style="
                background-color: blue;
                height: 100px;
                width: 100px;
                font-size: 35px;
                color: white;
              "
              block
            >
              <div style="font-size: 25px">{{ getButtonText }}</div>
            </Button>
            <!--<Card size="small" style="color: red; font-size: 35px">
              订单生成中
            </Card>-->
            <hr class="my-4" />
            <div style="color: black; font-size: 25px; margin: 10px">
              订单生成中
            </div>
            <hr class="my-4" />
            <div style="color: black; font-size: 25px; margin: 10px">
              大约需等待5-20秒，请客官喝口茶耐心等待...
            </div>
            <hr class="my-4" />
          </template>
          <template #extra>
            <!--<hr class="my-4" />
            <Card hoverable style="width: 240px">
              <CardMeta title="请认真阅读支付流程" style="color: red">
                <template #description>
                  <div>1.长时间等待仍未出现订单</div>
                  <div>2.请联系客服重新下单</div>
                  <div>3.西山居[剑网3]游戏充值</div>
                </template>
              </CardMeta>
            </Card>
            <hr class="my-4" />-->
          </template>
        </Result>
        <!--<QrCode :value="payStr" />-->
      </div>
    </div>
    <div v-if="isPaying">
      <div class="m-5 result-success">
        <Result>
          <template #icon>
            <Image :src="Img" style="margin: 20px 20px; width: 150px; height: 50px" />
            <!--<Alert type="info" message="无法充值或者提示错误，请联系客服!" />-->
            <hr class="my-4" />
            <div style="color: black; font-size: 25px; margin: 10px">
              {{ titlePay }}
            </div>
            <hr class="my-4" />
          </template>
          <template #extra>
            <Button size="large" type="primary" @click="jumpTo(payUrl, cid, oid)" block>
              <div style="font-size: 20px">
                点此立即付款
              </div>
            </Button>
          </template>
        </Result>
      </div>
    </div>
    <div v-if="isFinished">
      <div class="m-5 result-success">
        <Result>
          <template #icon>
            <Image :src="Img" style="margin: 20px 20px; width: 150px; height: 50px" />
            <Alert type="info" message="该订单已支付成功，欢迎再次光临!" />
          </template>
          <template #extra>
            <Button size="large" type="primary" block> 已完成支付 </Button>
          </template>
        </Result>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { onMounted, computed, defineComponent, ref, unref, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  import { Empty, Result, Button, Card, Image, Alert } from 'ant-design-vue';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { wechat } from '/@/assets/js/wx2.js';
  import CallApp from 'callapp-lib';
  import { getOrderCode, handleOrder } from '/@/api/channel/pay';
  import jdGif from '/@/assets/images/jd_pay.gif';
  import jdImg from '/@/assets/images/jdpay-logo.png';
  import wxImg from '/@/assets/images/wxpay-logo.png';
  import aliImg from '/@/assets/images/alipay-logo.png';
  import { useGo } from '/@/hooks/web/usePage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { isFunction } from '/@/utils/is';
  import { tryOnUnmounted } from '@vueuse/core';
  const props = {
    value: { type: [Object, Number, String, Array] },
    count: { type: Number, default: 60 },
    beforeStartFunc: {
      type: Function as PropType<() => Promise<boolean>>,
      default: null,
    },
  };

  export default defineComponent({
    name: 'OrderCodeDetail',
    components: { Empty, Result, Button, Card, Image, Alert },
    props,
    setup(props) {
      const { t } = useI18n();
      const loading = ref(false);
      const getButtonText = computed(() => {
        return t('component.countdown.timeText', [unref(currentCount)]);
      });
      const route = useRoute();
      const { clipboardRef, copiedRef } = useCopyToClipboard();
      const { createMessage } = useMessage();
      const go = useGo();
      // 此处可以得到用户ID
      console.log(route.query);
      const orderId = ref(route.query?.orderId);
      let oid = orderId.value == null ? '' : orderId.value.toString();
      let cost = ref(0);
      let titlePay = ref('');
      let payUrl = ref('');
      let Img = ref();
      let PayGif = ref();
      let payStatus = ref(0);
      let cid = ref('');
      let isPending = ref(true);
      let isPaying = ref(false);
      let isError = ref(false);
      let isFinished = ref(false);
      function getOrder() {
        getOrderCode(oid)
          .then((res) => {
            // copy(res.payUrl);
            cost.value = res.cost;
            titlePay.value = '金额：' + cost.value + '元';
            payUrl.value = res.payUrl;
            payStatus.value = res.status;
            if (payStatus.value == 4) {
              isPending.value = true;
              isPaying.value = false;
            } else if (payStatus.value == 5) {
              isPending.value = false;
              isError.value = true;
            } else if (payStatus.value == 1) {
              isPending.value = false;
              isFinished.value = true;
            } else {
              isPending.value = false;
              isPaying.value = true;
            }
            cid.value = res.channelId;
            if (cid.value == 'jx3_weixin') {
              Img.value = wxImg;
            }
            if (cid.value == 'jx3_jd') {
              Img.value = jdImg;
              PayGif.value = jdGif;
            }
            if (cid.value == 'jx3_alipay') {
              Img.value = aliImg;
            }
          })
          .catch(() => {
            isError.value = true;
            isPending.value = false;
            console.log(isPending.value);
          });
      }

      let width = ref(300);
      console.log(payUrl);
      // //模拟点击事件
      // setTimeout(function () {
      //   // IE
      //   if (document.all) {
      //     document.getElementById('ppid').click();
      //   }
      //   // 其它浏览器
      //   else {
      //     var e = document.createEvent('MouseEvents');
      //     e.initEvent('click', true, true);
      //     document.getElementById('ppid').dispatchEvent(e);
      //   }
      // }, 1000);

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

      function jumpTo(url, cid, oid) {
        // clipboardRef.value = url;
        // if (unref(copiedRef)) {
        //   createMessage.warning('复制成功: ' + url);
        // }
        if (cid == 'jx3_weixin') {
          go('/code/pay/detail?orderId=' + oid);
          return;
        }
        window.open(url, '_blank');
      }

      let currentCount = ref(props.count);

      let isStart = ref(false);

      let timerId: ReturnType<typeof setInterval> | null;
      watchEffect(() => {
        // props.value === undefined && handleStart();
      });

      async function handleStart() {
        const { beforeStartFunc } = props;
        if (beforeStartFunc && isFunction(beforeStartFunc)) {
          loading.value = true;
          try {
            const canStart = await beforeStartFunc();
            canStart && start();
          } finally {
            loading.value = false;
          }
        } else {
          start();
        }
      }

      function handleCurrentOrder() {
        handleOrder(oid);
      }

      function clear() {
        timerId && window.clearInterval(timerId);
      }

      function stop() {
        isStart.value = false;
        clear();
        timerId = null;
      }

      function start() {
        if (unref(isStart) || !!timerId) {
          return;
        }
        isStart.value = true;
        timerId = setInterval(() => {
          if (unref(currentCount) < 40) {
            // stop();
            location.reload();
            // isPending.value = false;
            // isError.value = true;
            // currentCount.value = props.count;
          } else {
            getOrder();
            if (isPending.value == false) {
              stop();
            }
            currentCount.value -= 1;
          }
        }, 1000);
      }

      function reset() {
        currentCount.value = props.count;
        stop();
      }
      function renew() {
        location.reload();
      }

      // function restart() {
      //   reset();
      //   start();
      // }

      tryOnUnmounted(() => {
        reset();
      });

      onMounted(() => {
        handleCurrentOrder();
        handleStart();
      });

      return {
        width,
        copy,
        renew,
        wechat,
        test,
        testApp,
        cost,
        getPayCode,
        titlePay,
        payUrl,
        PayGif,
        jumpTo,
        Img,
        cid,
        oid,
        handleStart,
        currentCount,
        loading,
        getButtonText,
        isStart,
        isPending,
        isPaying,
        isError,
        isFinished,
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
