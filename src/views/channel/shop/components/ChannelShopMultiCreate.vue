<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="formTitle"
    @visible-change="handleVisibleChange"
    @ok="customSubmitFunc"
    :height="500"
  >
    <div class="pt-3px pr-3px">
      <!-- <el-button type="primary" style="margin-left: 30px" @click="addItem">添加一组店铺</el-button> -->
      <BasicForm @register="registerForm" :model="model" />
      <div>
        <div v-for="(item, index) in addParamList" :key="index">
          <a-input v-model="item.rechargeMoney" placeholder="充值金额" />
          <a-input v-model="item.giveMoney" placeholder="赠送金额" />
          <a-icon type="delete" @click="deleteIndex(index)" />
        </div>
        <a-button type="primary" icon="plus" @click="clickAddRecharge">添加表单</a-button>
      </div>
      <!-- <div class="rechargeSetCont">
        <div v-for="(item, index) in addParamList" :key="index" style="margin-bottom: 0.3rem">
          <div>
            <div class="rechargeSetContTitle">
              <div> 充值优惠 {{ index + 1 }} </div>
              <div v-if="index != 0">
                <img
                  @click="deleteIndex(index)"
                  src="https://file.zhilianiot.com/static/offline_merchant/20210914/20210915154435.png"
                  alt=""
                />
              </div>
            </div>
            <div class="rechargeSetCont_1">
              <div> 充值金额 </div>
              <div>
                <van-field
                  v-model="item.rechargeMoney"
                  type="digit"
                  placeholder="请输入充值金额"
                  maxlength="6"
                  input-align="center"
                />
              </div>
            </div>
            <div class="rechargeSetCont_1">
              <div> 赠送金额 </div>
              <div>
                <van-field
                  v-model="item.giveMoney"
                  type="digit"
                  placeholder="请输入赠送金额"
                  maxlength="6"
                  input-align="center"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="rechargeSetCont_3" @click="clickAddRecharge">
          <span>添加充值优惠</span>
        </div>
      </div> -->
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { shopBasicColumns } from '/@/views/channel/shop/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { createChannelShop } from '/@/api/channel/channel';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      // let columns = ;
      const { createMessage } = useMessage();
      const addParamList: { rechargeMoney: string; giveMoney: string }[] = [
        {
          rechargeMoney: '',
          giveMoney: '',
        },
      ];
      const modelRef = ref({});
      const formTitle = ref('');
      const balance = ref('');
      const [registerForm, { resetFields, validate }] = useForm({
        labelWidth: 100,
        layout: 'horizontal',
        schemas: shopBasicColumns,
        showActionButtonGroup: false,
        // submitFunc: customSubmitFunc,
      });

      const [register, { setModalProps, closeModal }] = useModalInner((data) => {
        data && onDataReceive(data);
        setModalProps({ confirmLoading: false });
        console.log(balance.value);
        resetFields();
      });
      // const [register, { setModalProps, closeModal }] = useModalInner((data) => {
      //   data && onDataReceive(data);
      // });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          console.log(values);
          setModalProps({ confirmLoading: true });
          handleChannelShop(values);
          closeModal();
        } catch (error) {
          console.log(error);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleChannelShop(record: Recordable) {
        console.log(record);
        createChannelShop(record)
          .then((ret) => {
            console.log(ret);
            createMessage.success(`创建商铺成功`);
          })
          .catch(() => {
            createMessage.error('创建商铺失败');
          });
      }

      function onDataReceive(data) {
        console.log('Data Received', data);
        formTitle.value = data.title;
        balance.value = data.balance;
        // resetFields();
      }

      function handleVisibleChange(v) {
        console.log(v);
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }
      function clickAddRecharge() {
        let ifTrue = true;
        console.log(JSON.stringify(addParamList));

        debugger;
        addParamList.forEach((item: { rechargeMoney: string; giveMoney: string }) => {
          if (item.rechargeMoney == '' || item.giveMoney == '') {
            console.log('请完善金额');
            ifTrue = false;
          }
        });
        if (ifTrue) {
          addParamList.push({
            rechargeMoney: '',
            giveMoney: '',
          });
        }
      }
      function deleteIndex(
        // item: { rechargeMoney: string; giveMoney: string },
        index: number,
      ): void {
        addParamList.splice(index, 1);
      }

      return {
        register,
        // columns,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        formTitle,
        customSubmitFunc,
        addParamList,
        clickAddRecharge,
        deleteIndex,
      };
    },
  });
</script>
