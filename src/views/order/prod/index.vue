<template>
  <div>
    <!--<iframe :srcdoc="htmlStr"></iframe>
    <div class="md:flex enter-y">
      <Form class="p-4 enter-x" :model="formData2" :rules="getFormRules2" ref="formRef2">
        <FormItem name="orderId" class="enter-x">
          <Input
            size="large"
            v-model:value="formData2.orderId"
            placeholder="訂單"
            class="fix-auto-fill"
          />
        </FormItem>
        <FormItem class="enter-x">
          <Button type="primary" class="enter-x" block @click="handleSuccess"> 提交 </Button>
        </FormItem>
      </Form>
    </div>-->
    <div class="md:flex enter-y">
      <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
        <FormItem name="inputNum" class="enter-x">
          <Input
            size="large"
            v-model:value="formData.inputNum"
            placeholder="金额"
            class="fix-auto-fill"
          />
        </FormItem>
        <FormItem name="channel" class="enter-x">
          <Input
            size="large"
            v-model:value="formData.channel"
            placeholder="通道"
            class="fix-auto-fill"
          />
        </FormItem>
        <FormItem class="enter-x">
          <Button type="primary" class="enter-x" block @click="handleRegister"> 提交 </Button>
        </FormItem>
      </Form>
      <Button type="primary" class="enter-x" block @click="open(htmlStr)"> {{ htmlStr }} </Button>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useFormRules, useFormValid } from '/@/views/sys/login/useLogin';
  const { createMessage } = useMessage();
  import { Form, Input, Row, Col, Button, Divider } from 'ant-design-vue';
  import { getOrderCode, getOrderProdForWX, testCreateOrder } from '/@/api/channel/pay';
  const formData = reactive({
    channel: '',
    inputNum: '',
  });
  const formData2 = reactive({
    orderId: '',
  });
  const formRef = ref();
  const formRef2 = ref();
  const loadingNum = ref(false);
  const { getFormRules } = useFormRules(formData);
  const { getFormRules: getFormRules2 } = useFormRules(formData2);
  const { validForm } = useFormValid(formRef);
  const { validForm: validForm2 } = useFormValid(formRef2);

  let htmlStr = '';
  export default defineComponent({
    components: {
      Form,
      Input,
      Button,
      FormItem: Form.Item,
      PageWrapper,
    },
    setup() {
      const loading = ref(true);

      onMounted(() => {
        orderProd();
      });
      setTimeout(() => {
        loading.value = false;
      }, 1500);
      function orderProd() {
        handleSuccess();
      }

      function handleDetail(record: Recordable) {
        console.log(record);
        createMessage.success(1);
      }

      async function handleSuccess() {
        const data = await validForm2();
        console.log(data);

        let oid = ref('');
        oid.value = data.orderId;
        getOrderCode(oid.value).then((res) => {
          console.log(res);
          // cost.value = res.cost;
          // titlePay.value = '金额：' + cost.value + '元';
          let payUrl = res.payUrl;
          let s1 = decodeURIComponent(payUrl);

          // console.log(s);
          let obj = getUrlParams(payUrl);
          console.log(obj);
          console.log(obj.prepay_id);
          console.log(obj.package);
          console.log(obj.redirect_url);
          let s = decodeURIComponent(obj.redirect_url);
          console.log(s);
          // let formData = new FormData()
          // formData.append('prepay_id', obj.prepay_id);
          // formData.append('package', obj.package);
          // formData.append('redirect_url', s);
          // formData.submit()
          // 创建form元素
          // var demo_form = document.createElement("form");
          // // 设置form属性
          // demo_form.action = s1;
          // demo_form.method = "post";
          // demo_form.style.display = "none";
          // // document.body.appendChild(demo_form)
          // // 提交表单
          // demo_form.submit()
          // window.location.href = 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id='+obj.prepay_id
          // +'&package='+obj.package;
          // getOrderProdForWX('https://wx.tenpay.com',
          //   '/cgi-bin/mmpayweb-bin/checkmweb',
          //   formData)
          //   .then((ret) => {
          //     console.log(ret);
          //     // htmlStr.value = ret;
          //   });
          getOrderProdForWX('/cgi-bin/mmpayweb-bin/checkmweb').then((ret) => {
            console.log(ret);
            htmlStr = ret;
          });
        });
      }

      function getUrlParams(url) {
        // 通过 ? 分割获取后面的参数字符串
        let urlStr = url.split('?')[1];
        // 创建空对象存储参数
        let obj = {};
        // 再通过 & 将每一个参数单独分割出来
        let paramsArr = urlStr.split('&');
        for (let i = 0, len = paramsArr.length; i < len; i++) {
          // 再通过 = 将每一个参数分割为 key:value 的形式
          let arr = paramsArr[i].split('=');
          obj[arr[0]] = arr[1];
        }
        return obj;
      }

      async function handleRegister() {
        const data = await validForm();
        console.log(data);
        testCreateOrder(data.inputNum, data.channel).then((res) => {
          console.log(res);
          htmlStr = res.payUrl;
        });
      }

      function open(url) {
        window.open(url, '_blank');
      }

      return {
        handleDetail,
        handleSuccess,
        loading,
        handleRegister,
        getFormRules,
        getFormRules2,
        formRef,
        formRef2,
        loadingNum,
        formData,
        formData2,
        htmlStr,
        open,
      };
    },
  });
</script>
