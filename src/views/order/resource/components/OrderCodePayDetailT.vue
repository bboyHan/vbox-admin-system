<template>
  <div>
    <!--<iframe :srcdoc="htmlStr" border="0" width="100%" height="600px"></iframe>-->
<!--    <iframe id="code" ref="iframe" width="100%" height="100%"> </iframe>-->
    <div id="pid"></div>
  </div>
</template>

<script lang="ts">
  import { nextTick, defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { wechat } from '/@/assets/js/wx2.js';
  import { testOrderPay } from '/@/api/channel/pay';
  import PayGif from '/@/assets/images/jd_pay.gif';
  import jdImg from '/@/assets/images/jdpay-logo.png';
  export default defineComponent({
    name: 'OrderCodeDetail',
    components: {},
    setup() {
      const route = useRoute();
      // 此处可以得到用户ID
      console.log(route.query);
      let cost = ref(0);
      let titlePay = ref('');
      let payUrl = ref('');
      let htmlStr = ref('');
      // 此处可以得到用户ID
      console.log(route.query);
      const orderId = ref(route.query?.orderId);
      let oid = orderId.value == null ? '' : orderId.value.toString();
      testOrderPay(oid).then((res) => {
        console.log(res);
        htmlStr.value = res;
        setHTMLWithScript(document.getElementById('pid'), htmlStr.value);
      });
      let width = ref(300);
      console.log(payUrl);
      // if (payStr == '') {
      //   width.value = 0;
      // }
      function runScript(script) {
        return new Promise<void>((reslove, rejected) => {
          // 直接 document.head.appendChild(script) 是不会生效的，需要重新创建一个
          const newScript = document.createElement('script');
          // 获取 inline script
          newScript.innerHTML = script.innerHTML;
          // 存在 src 属性的话
          const src = script.getAttribute('src');
          if (src) newScript.setAttribute('src', src);

          // script 加载完成和错误处理
          newScript.onload = () => reslove();
          newScript.onerror = (err) => rejected();
          document.head.appendChild(newScript);
          document.head.removeChild(newScript);
          if (!src) {
            // 如果是 inline script 执行是同步的
            reslove();
          }
        });
      }

      function setHTMLWithScript(container, rawHTML) {
        container.innerHTML = rawHTML;
        const scripts = container.querySelectorAll('script');

        return Array.prototype.slice.apply(scripts).reduce((chain, script) => {
          return chain.then(() => runScript(script));
        }, Promise.resolve());
      }

      return {
        width,
        wechat,
        cost,
        titlePay,
        payUrl,
        PayGif,
        jdImg,
        htmlStr,
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
