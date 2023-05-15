<template>
  <PageWrapper title="对接信息">
    <div class="mt-2">
      <a-card title="如有疑问请联系客服！">
        <MarkdownViewer :value="value" />
      </a-card>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { MarkDownActionType, MarkdownViewer } from '/@/components/Markdown';
  import { PageWrapper } from '/@/components/Page';
  import { Card } from 'ant-design-vue';
  export default defineComponent({
    components: { PageWrapper, MarkdownViewer, ACard: Card },
    setup() {
      const markDownRef = ref<Nullable<MarkDownActionType>>(null);
      const valueRef = ref(`
### 0. 对接信息

请求地址： 联系对接人获取
回调IP白名单： 联系对接人获取

通道channel_id:  \`jx3_alipay\`  -  支付宝、\`jx3_weixin\` - 微信、\` jx3_jd\` - 京东  、\`jx3_ali_gift\`  -  支付宝(固额特惠)

### **1.1** **公共签名规则**

1. 联系运营获取商户ID、商户Ke

2. 签名sign计算：请求参数按照ASCII 码的升序进行排序，按照key=value&key=value进行组合，最后加上商户秘钥（&key=商户秘钥）,进行md5运算,结果转为小写

### **1.2** **状态码说明**

Normal - HTTP 响应状态

| 成功状态 | **说明** |
| -------- | -------- |
| 200      | 成功     |
| 40x      | 资源异常 |
| 50x      | 系统异常 |

Error 响应状态

| 异常状态 | **说明**                                                     |
| -------- | ------------------------------------------------------------ |
| 500999   | 操作异常，请联系管理员                                       |
| 500401   | 身份验证未通过，请尝试重新授权（如token过期，sign值计算有误等） |
| 500403   | 访问过于频繁，超出访问频率限制，请稍后再试                   |
| 500404   | 相关资源未找到（如订单不存在、账户不存在等）                 |
| 500409   | 请求参数重复或冲突，切勿重复请求                             |

Normal - 一般情况的响应体如下：

\`\`\`json
{
    "result": "",
    "message": "success",
    "code": 1
}
\`\`\`

### **2.1** **创建订单**

请求参数（request）

| 字段名     | **字段描述** | **类型**      | **必需** | 说明事项                                                     |
| ---------- | ------------ | ------------- | -------- | ------------------------------------------------------------ |
| p_account  | 商户ID       | string        | 是       | 向运营或管理员申请获得                                       |
| sign       | 签名         | string        | 是       | 参见1.1 公共签名规则                                         |
| money      | 金额         | int           | 是       | 单位：元，必须为10的倍数，范围是10-30,000。其中：jx3_ali_gift特惠，只允许4种固额传参（分别为76，156，162，276）                    |
| p_order_id | 订单ID       | string[16,32] | 是       | 商户自定义订单ID（支持16-32位不定长uuid）                    |
| channel_id | 通道ID       | string        | 是       | 目前支持 jx3_weixin（微信）、jx3_alipay（支付宝）、jx3_jd（京东）、jx3_ali_gift（支付宝-固额特惠） |
| notify_url | 回调地址     | string        | 是       | 格式：URL。通知URL必须为直接可访问的URL，不允许携带查询串（用于通知商户成功支付的订单信息） |
| pay_type   | 支付类型     | int           | 是       | 支付类型（1- 京东，2-微信，3-支付宝）                        |
| pay_ip     | 下单IP       | string        | 是       | 客户端下单IP地址（IPv4）                                     |
| attach     | 附加数据     | string[1,128] | 否       | 附加数据，支付通知中原样返回，可作为自定义参数使用（字符长度小于128） |

请求方式

\`\`\`
POST /basic-api/channel/order/create
\`\`\`

请求参数

\`\`\`shell
{
    "p_account": "...",
    "sign": "....",
    "money": 10, # 金额， 10的倍数，范围10-30,000
    "p_order_id": "011bf123a8b3446aa68f5b1193cc2521", # 商户自定义订单id
    "pay_ip": "192.168.0.1",
    "pay_type": 2,
    "channel_id": "jx3_jd",
    "notify_url": "http://{host}:{port}/xxx" # 商户回调地址，接收POST json结果返回
}
\`\`\`

响应结果

\`\`\`
{
    "result": {
        "status": 2,
        "orderId": "na1bfa23a3ba44acaf5b119ddyyvm1",
        "cost": 10,
        "payUrl": "http://{host}/code/pay?orderId=xxx",
        "attach": "..."
\t},
    "message": "success",
    "code": 1
}
\`\`\`

回调说明

\`\`\`
# 订单完成支付后,下单接口里面的异步通知地址（notify_url）会收到服务器点对点通知，消息体如下：
{
    "cost": 10,
    "order_id": "na1bfa23a3ba44acaf5b119ddyyvm1",
    "p_account": "e191aa33c9a74416b6ae6aa66d7195f1",
    "sign": "a573b1f83eda97ca0927d3d1a382c0bc",
    "status": 1 # 0-失败,1-成功,2-未支付
}
# 注意：收到我方回调通知后,请返回HTTP Status状态码200，否则我方将按一定频率重复通知若干次
\`\`\`

### **2.2** **查询订单**

请求参数（request）

| 字段名     | **字段描述** | **类型**      | **必需** | 说明事项               |
| ---------- | ------------ | ------------- | -------- | ---------------------- |
| p_account  | 商户ID       | string        | 是       | 向运营或管理员申请获得 |
| p_order_id | 订单ID       | string[16,32] | 是       |                        |
| sign       | 签名         | string        | 是       | 参见1.1 公共签名规则   |

响应说明（response）

| 字段名  | **字段描述** | **类型** | 说明事项                     |
| ------- | ------------ | -------- | ---------------------------- |
| orderId | 订单ID       | string   |                              |
| status  | 订单状态     | int      | 状态：0-失败,1-成功,2-未支付 |
| payUrl  | 支付链接     | string   |                              |

请求方式

\`\`\`
POST /basic-api/channel/order/query
\`\`\`

请求参数

\`\`\`shell
{
    "p_order_id": "na1bfa23a3ba44acaf5b119ddyyvm1",
    "p_account": "e191aa33c9a74416b6ae6aa66d7195f1",
    "sign": "7e1ad18da1a48064b073319f483b7ff7"
}
\`\`\`

响应结果

\`\`\`shell
{
    "result": {
        "orderId": "na1bfa23a3ba44acaf5b119ddyyvm1",
        "status": 2,
        "cost": 10,
        "payUrl": "http://{host}/#/code/pay?orderId=xxx",
        "notifyUrl": "http://127.0.0.1:8080/test/callback"
    },
    "message": "success",
    "code": 1
}
\`\`\`
`);

      function toggleTheme() {
        const markDown = unref(markDownRef);
        if (!markDown) return;
        const vditor = markDown.getVditor();
        vditor.setTheme('dark', 'dark', 'dracula');
      }

      function handleChange(v: string) {
        valueRef.value = v;
      }

      function clearValue() {
        valueRef.value = '';
      }

      return {
        value: valueRef,
        toggleTheme,
        markDownRef,
        handleChange,
        clearValue,
      };
    },
  });
</script>
