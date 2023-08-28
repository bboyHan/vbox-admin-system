<template>
  <div>
    <div class="mt-2">
      <template v-for="item in saleList" :key="item.id">
        <Description
          :data="item"
          title="核销信息"
          :column="4"
          :schema="infoSchema"
          class="md:w-1/1 w-full"
        />
      </template>
<!--      <BasicTable @register="registerTable" />-->
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, h, onMounted, ref } from 'vue';
  import { Description, DescItem } from '/@/components/Description';
  import { PageWrapper } from '/@/components/Page';
  import { getSaleListByPage } from '/@/api/channel/codesales';
  // import { useMessage } from '/@/hooks/web/useMessage';
  // import { analysis, getCap, verifyCaptcha, prodCode, queryOrder } from '/@/api/channel/codesales';
  // import { get_w } from '/@/assets/js/d2_168.js';
  // import { get_payload } from '/@/assets/js/d3.js';
  import { Tag } from 'ant-design-vue';
  import { CountTo } from '/@/components/CountTo';

  export default defineComponent({
    components: { PageWrapper, Description },
    setup() {
      onMounted(() => {
        getSaleInfoList();
      });
      let saleList = ref([{} as any]);
      function getSaleInfoList() {
        getSaleListByPage().then((res) => {
          saleList.value = res;
          saleList.value.forEach((num, index, a) => {
            // 三个参数分别为：子元素，索引，原数组
            console.log(num);
            console.log(index);
            console.log(a);
            num['yesterdayPercent'] = getPercent(num.yesterdayOrderNum, num.yesterdayProdOrderNum);
            num['todayPercent'] = getPercent(num.todayOrderNum, num.todayProdOrderNum);
            // num['hourPercent'] = getPercent(num.hourOrderNum, num.hourProdOrderNum);

          });
        });
      }
      const commonTagRender = (color: string, unit?: string) => (curVal) =>
        h(Tag, { color }, () => {
          if (!unit) unit = '';
          return curVal + ' ' + unit;
        });
      // const commonLinkRender = (text: string) => (href) => h('a', { href, target: '_blank' }, text);
      const commonCountRender = (suffix: string, color: string, endVal: number) => (culVal) =>
        h(CountTo, { suffix: suffix, color, endVal: culVal }, () => {
          endVal;
        });
      function getPercent(num, total) {
        num = parseFloat(num);
        total = parseFloat(total);
        if (isNaN(num) || isNaN(total)) {
          return 0;
        }
        let rs = total <= 0 ? 0 : Math.round((num / total) * 10000) / 100.0;
        console.log(num, total, rs);
        return rs;
      }
      const infoSchema: DescItem[] = [
        {
          label: '账户名',
          field: 'account',
          render: commonTagRender('blue'),
          span: 2,
        },
        {
          label: '余额',
          field: 'balance',
          render: commonTagRender('blue', '元'),
          span: 2,
        },
        {
          label: '通道账号',
          field: 'countCA',
          render: commonTagRender('blue'),
          span: 2,
        },
        {
          label: '开启账号',
          field: 'countEnableCA',
          render: commonTagRender('blue'),
          span: 2,
        },
        {
          label: '昨日订单量',
          field: 'yesterdayProdOrderNum',
          render: commonTagRender('blue', '个'),
        },
        {
          label: '昨日成单量',
          field: 'yesterdayOrderNum',
          render: commonTagRender('blue', '个'),
        },
        {
          label: '昨日成功率',
          field: 'yesterdayPercent',
          render: commonCountRender('%', 'red', 0),
        },
        {
          label: '昨日收入',
          field: 'yesterdayOrderSum',
          render: commonTagRender('red', '元'),
        },
        {
          label: '今日订单量',
          field: 'todayProdOrderNum',
          render: commonTagRender('blue', '个'),
        },
        {
          label: '今日成单量',
          field: 'todayOrderNum',
          render: commonTagRender('blue', '个'),
        },
        {
          label: '今日成功率',
          field: 'todayPercent',
          render: commonCountRender('%', 'red', 0),
          // render: (curVal, data) => {
          //   return `${data.balance}`;
          // },
        },
        {
          label: '今日收入',
          field: 'todayOrderSum',
          render: commonTagRender('red', '元'),
        },
        // {
        //   label: '1小时成功率',
        //   field: 'hourPercent',
        //   render: commonCountRender('%', 'red', 0),
        // },
        // {
        //   label: '1小时收入',
        //   field: 'hourOrderSum',
        //   render: commonTagRender('red'),
        // },
      ];

      /*function handleTestProdCode() {
        const { createMessage } = useMessage();
        try {
          getCap().then((ret) => {
            console.log(ret);
            var pow_detail = ret.pow_detail;
            var lot_number = ret.lot_number;
            var payload = ret.payload;
            var process_token = ret.process_token;
            var captcha_type = ret.captcha_type;

            // 1. 分析
            analysis(ret).then((r) => {
              console.log(r);
              console.log(typeof r.cptList);
              console.log(r.cptList);
              let w = get_w(
                1899,
                r.cptList,
                lot_number,
                pow_detail.datetime
              );

              // console.log(w);

              let verifyParam = {
                captcha_id: "a7c9ab026dc4366066e4aaad573dce02",
                lot_number: lot_number,
                payload: payload,
                process_token: process_token,
                client_type: captcha_type,
                w: w,
              }

              // 2. 提交验证
              verifyCaptcha(verifyParam).then((r) => {
                console.log(r);

                let sec_code = r.data.seccode;
                // console.log(sec_code);

                var pp = get_payload(sec_code);

                console.log(pp);

                var prodParam = {
                  token: "xoyokey_=YVYYY1y%3D%26%26K2E3%3DSf_SmffWoWf%26%26y1Ns2Zx%3DSHYmo5Yyn21ZxSfSmfoWf1s%3DmY.5Wf%26K%3DHf_fyKSSoZ%26N2mY%269x%26.E%3DW0K2S%26%2F.f5HNSooS%26sfSW_mC; expires=Fri, 10-Feb-2023 16:10:36 GMT; path=/; domain=.xoyo.com; secure; httponly; samesite=none\n",
                  payload: pp
                }
                // 3. 生成
                prodCode(prodParam).then((data) => {
                  console.log(data)
                  // qrCodeUrl = data.resource_url;

                  createMessage.success(`测试产码成功`);

                });

              });

            });

          });
        } catch (e) {
          createMessage.error("测试产码失败");
        } finally {
          reload();
        }
      }*/

      /*function handleCheck() {
        const { createMessage } = useMessage();
        try {
          getCap().then((ret) => {
            // console.log(ret);
            var pow_detail = ret.pow_detail;
            var lot_number = ret.lot_number;
            var payload = ret.payload;
            var process_token = ret.process_token;
            var captcha_type = ret.captcha_type;

            // 1. 分析
            analysis(ret).then((r) => {
              console.log(r);

              let w = get_w(
                1899,
                r.cptList,
                lot_number,
                pow_detail.datetime
              );

              // console.log(w);

              let verifyParam = {
                captcha_id: "a7c9ab026dc4366066e4aaad573dce02",
                lot_number: lot_number,
                payload: payload,
                process_token: process_token,
                client_type: captcha_type,
                w: w,
              }

              // 2. 提交验证
              verifyCaptcha(verifyParam).then((r) => {
                console.log(r);

                let sec_code = r.data.seccode;
                console.log(sec_code);

                var queryParam = {
                  vouch_code: "90016755582398928117",
                  captcha_id: "a7c9ab026dc4366066e4aaad573dce02",
                  lot_number: sec_code.lot_number,
                  pass_token: sec_code.pass_token,
                  gen_time: sec_code.gen_time,
                  captcha_output: sec_code.captcha_output,
                }

                // 3. 查订单
                queryOrder(queryParam).then((data) => {
                  console.log(data)

                  createMessage.success(`查询订单成功`);

                });

              });

            });

          });
        } catch (e) {
          createMessage.error("测试产码失败");
        } finally {
          reload();
        }
      }*/
      return {
        infoSchema,
        saleList,
      };
    },
  });
</script>
