<template>
  <div>
    <Row :gutter="[16, 16]">
      <Col :span="8">
        <div class="m-5 result-success">
          <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
            <FormItem name="inputNum" class="enter-x">
              <Input
                size="large"
                v-model:value="formData.inputNum"
                placeholder="金额10的倍数"
                class="fix-auto-fill"
              />
            </FormItem>
            <FormItem name="channel" class="enter-x">
              <Select :options="options" v-model:value="formData.channel" placeholder="选择通道" />
              <!--<Input
                size="large"
                v-model:value="formData.channel"
                placeholder="通道"
                class="fix-auto-fill"
              />-->
            </FormItem>
            <FormItem class="enter-x">
              <Button type="primary" class="enter-x" block @click="handleRegister"> 提交 </Button>
            </FormItem>
          </Form>
        </div>
        <ProdCodeModal @register="registerModal" />
      </Col>
    </Row>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useFormRules, useFormValid } from '/@/views/sys/login/useLogin';
  const { createMessage } = useMessage();
  import { Form, Input, Row, Col, Button, Select } from 'ant-design-vue';
  import { testCreateOrder } from '/@/api/channel/pay';
  import { useModal } from '/@/components/Modal';
  import ProdCodeModal from '/@/views/order/prod/components/ProdCodeModal.vue';
  const formData = reactive({
    channel: '',
    inputNum: '',
  });
  const formRef = ref();
  const loadingNum = ref(false);
  const { getFormRules } = useFormRules(formData);
  const { validForm } = useFormValid(formRef);
  const [registerModal, { openModal: openModal }] = useModal();
  let htmlStr = '';
  export default defineComponent({
    components: {
      ProdCodeModal,
      Form,
      Input,
      Select,
      Button,
      FormItem: Form.Item,
      Row,
      Col,
    },
    setup() {
      const loading = ref(true);

      onMounted(() => {
        orderProd();
      });
      setTimeout(() => {
        loading.value = false;
      }, 1500);
      function orderProd() {}

      function handleDetail(record: Recordable) {
        console.log(record);
        createMessage.success(1);
      }

      async function handleRegister() {
        const data = await validForm();
        console.log(data);
        testCreateOrder(data.inputNum, data.channel).then((res) => {
          console.log(res);
          htmlStr = res.payUrl;
          openModal(true, {
            content: htmlStr,
          });
        });
      }

      function open(url) {
        window.open(url, '_blank');
      }

      const options = [
        {
          label: '微信',
          value: 'jx3_weixin',
          key: '1',
        },
        {
          label: '支付宝',
          value: 'jx3_alipay',
          key: '2',
        },
        {
          label: '京东',
          value: 'jx3_jd',
          key: '3',
        },
        {
          label: '支付宝(特惠活动)',
          value: 'jx3_ali_gift',
          key: '4',
        },
      ];
      return {
        registerModal,
        handleDetail,
        loading,
        handleRegister,
        getFormRules,
        formRef,
        loadingNum,
        formData,
        htmlStr,
        open,
        options,
      };
    },
  });
</script>
