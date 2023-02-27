<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否测试产码',
                  placement: 'left',
                  confirm: handleTestProdCode.bind(null, record),
                },
              },
              {
                label: '查询订单',
                icon: 'clarity:note-edit-line',
                onClick: handleCheck.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="js">
  import { defineComponent } from "vue";

  import { BasicTable, useTable, TableAction } from "/@/components/Table";
  import { analysis, getCap, verifyCaptcha, prodCode, queryOrder } from "/@/api/channel/codesales";

  import { useDrawer } from "/@/components/Drawer";

  import { columns, searchFormSchema } from "./data";
  import { useMessage } from "/@/hooks/web/useMessage";
  import { getSaleListByPage } from "/@/api/channel/codesales";
  import { get_w } from "/@/assets/js/d2_168.js";
  import { get_payload } from "/@/assets/js/d3.js";

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: "我的码商",
        api: getSaleListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: "操作",
          dataIndex: "action",
          fixed: undefined
        }
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false
        });
      }

      function handleEdit(record) {
        openDrawer(true, {
          record,
          isUpdate: true
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleTestProdCode() {
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
      }

      function handleCheck() {
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
      }
      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleTestProdCode,
        handleCheck,
        handleSuccess,
      };
    }
  });
</script>
