<template>
  <div>
    <PageWrapper dense contentFullHeight contentClass="flex">
      <SaleAccountTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
      <BasicTable @register="registerTable" class="w-4/4 xl:w-5/5" :searchInfo="searchInfo">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  icon: 'clarity:note-edit-line',
                  onClick: handleEdit.bind(null, record),
                },
                // {
                //   icon: 'ant-design:delete-outlined',
                //   color: 'error',
                //   popConfirm: {
                //     title: '是否测试产码',
                //     placement: 'left',
                //     confirm: handleTestProdCode.bind(null, record),
                //   },
                // },
                // {
                //   label: '查询订单',
                //   icon: 'clarity:note-edit-line',
                //   onClick: handleCheck.bind(null, record),
                // },
              ]"
            />
          </template>
        </template>
      </BasicTable>
      <SaleAccountCharge @register="registerModal" />
    </PageWrapper>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import SaleAccountTree from '/@/views/codesale/list/components/SaleAccountTree.vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    analysis,
    getCap,
    verifyCaptcha,
    prodCode,
    queryOrder,
    getSaleCAccountListByPage,
  } from '/@/api/channel/codesales';
  import { PageWrapper } from '/@/components/Page';
  import { columns, searchFormSchema } from './data';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { get_w } from '/@/assets/js/d2_168.js';
  import { get_payload } from '/@/assets/js/d3.js';
  import SaleAccountCharge from '/@/views/codesale/list/components/SaleAccountCharge.vue';

  export default defineComponent({
    components: { PageWrapper, SaleAccountTree, BasicTable, TableAction, SaleAccountCharge },
    setup() {
      const [registerModal, { openModal: openM }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '码商列表',
        api: getSaleCAccountListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      function handleEdit(record) {
        const titleDesc = '通道帐号：' + record.ac_remark + '（当前帐号）';
        openM(true, {
          title: titleDesc,
          id: record.id,
          acid: record.acid,
          ac_remark: record.ac_remark,
          ac_account: record.ac_account,
          daily_limit: record.daily_limit,
          total_limit: record.total_limit,
        });
      }

      function handleSuccess() {
        reload();
      }

      const searchInfo = reactive<Recordable>({});
      function handleSelect(saleName = '') {
        searchInfo.saleName = saleName;
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
              let w = get_w(1899, r.cptList, lot_number, pow_detail.datetime);

              // console.log(w);

              let verifyParam = {
                captcha_id: 'a7c9ab026dc4366066e4aaad573dce02',
                lot_number: lot_number,
                payload: payload,
                process_token: process_token,
                client_type: captcha_type,
                w: w,
              };

              // 2. 提交验证
              verifyCaptcha(verifyParam).then((r) => {
                console.log(r);

                let sec_code = r.data.seccode;
                // console.log(sec_code);

                var pp = get_payload(sec_code);

                console.log(pp);

                var prodParam = {
                  token:
                    'xoyokey_=YVYYY1y%3D%26%26K2E3%3DSf_SmffWoWf%26%26y1Ns2Zx%3DSHYmo5Yyn21ZxSfSmfoWf1s%3DmY.5Wf%26K%3DHf_fyKSSoZ%26N2mY%269x%26.E%3DW0K2S%26%2F.f5HNSooS%26sfSW_mC; expires=Fri, 10-Feb-2023 16:10:36 GMT; path=/; domain=.xoyo.com; secure; httponly; samesite=none\n',
                  payload: pp,
                };
                // 3. 生成
                prodCode(prodParam).then((data) => {
                  console.log(data);
                  // qrCodeUrl = data.resource_url;

                  createMessage.success(`测试产码成功`);
                });
              });
            });
          });
        } catch (e) {
          createMessage.error('测试产码失败');
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

              let w = get_w(1899, r.cptList, lot_number, pow_detail.datetime);

              // console.log(w);

              let verifyParam = {
                captcha_id: 'a7c9ab026dc4366066e4aaad573dce02',
                lot_number: lot_number,
                payload: payload,
                process_token: process_token,
                client_type: captcha_type,
                w: w,
              };

              // 2. 提交验证
              verifyCaptcha(verifyParam).then((r) => {
                console.log(r);

                let sec_code = r.data.seccode;
                console.log(sec_code);

                var queryParam = {
                  vouch_code: '90016755582398928117',
                  captcha_id: 'a7c9ab026dc4366066e4aaad573dce02',
                  lot_number: sec_code.lot_number,
                  pass_token: sec_code.pass_token,
                  gen_time: sec_code.gen_time,
                  captcha_output: sec_code.captcha_output,
                };

                // 3. 查订单
                queryOrder(queryParam).then((data) => {
                  console.log(data);

                  createMessage.success(`查询订单成功`);
                });
              });
            });
          });
        } catch (e) {
          createMessage.error('测试产码失败');
        } finally {
          reload();
        }
      }

      return {
        registerTable,
        registerModal,
        handleSelect,
        handleEdit,
        handleTestProdCode,
        handleCheck,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
