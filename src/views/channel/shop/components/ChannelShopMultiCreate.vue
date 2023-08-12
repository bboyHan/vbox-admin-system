<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="formTitle"
    @visible-change="handleVisibleChange"
    @ok="customSubmitFunc"
    :width="500"
    :height="500"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerBatch" @submit="handleSubmit">
        <template #add="{ field }">
          <a-button v-if="Number(field) === 0" @click="add">+</a-button>
          <a-button v-if="field > 0" @click="del(field)">-</a-button>
        </template>
      </BasicForm>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BatchCreateChannelShop, getChannelShopTypes } from '/@/api/channel/channel';
  import { Input } from 'ant-design-vue';
  // import { Button } from '/@/components/Button';

  export default defineComponent({
    components: { BasicModal, BasicForm, [Input.name]: Input },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const balance = ref('');

      const [register, { setModalProps, closeModal }] = useModalInner((data) => {
        data && onDataReceive(data);
        setModalProps({ confirmLoading: false });
        console.log(balance.value);
        resetFields();
      });

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
        console.log('save=>' + JSON.stringify(record));
        BatchCreateChannelShop(record)
          .then((ret) => {
            console.log(ret);
            createMessage.success(`创建商铺成功`);
          })
          .catch(() => {
            createMessage.error('创建商铺失败');
          });
      }

      function onDataReceive(data) {
        // console.log('Data Received', JSON.stringify(data));
        formTitle.value = data.title;
        balance.value = data.balance;
        // resetFields();
      }

      function handleVisibleChange(v) {
        console.log(v);
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }
      const [registerBatch, { appendSchemaByField, removeSchemaByFiled, resetFields, validate }] =
        useForm({
          layout: 'horizontal',
          schemas: [
            {
              label: '商铺名称',
              field: 'shopRemark',
              component: 'Input',
              // helpMessage: ['积分充值, 最小为100的倍数'],
              colProps: {
                span: 24,
              },
              required: false,
            },
            {
              label: '引导方式',
              field: 'channel',
              component: 'ApiSelect',
              componentProps: {
                api: getChannelShopTypes,
                labelField: 'cchannelName',
                valueField: 'cchannelId',
                immediate: false,
              },
              colProps: {
                span: 24,
              },
            },
            {
              field: 'money-0',
              component: 'Input',
              label: '设定金额 0',
              colProps: {
                span: 24,
              },
              required: true,
            },
            {
              field: 'address-0',
              component: 'Input',
              label: '商铺地址 0',
              colProps: {
                span: 24,
              },
              required: true,
            },
            {
              field: '0',
              component: 'Input',
              label: ' ',
              colProps: {
                span: 24,
              },
              slot: 'add',
            },
          ],
          labelWidth: 100,
          actionColOptions: { span: 24 },
          showResetButton: false,
          showSubmitButton: false,
        });

      async function handleSubmit() {
        try {
          const data = await validate();
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      }

      const n = ref(1);

      function add() {
        appendSchemaByField(
          {
            field: `money-${n.value}`,
            component: 'Input',
            label: '设定金额' + n.value,
            colProps: {
              span: 24,
            },
            required: true,
          },
          '',
        );
        appendSchemaByField(
          {
            field: `address-${n.value}`,
            component: 'Input',
            label: '商铺地址' + n.value,
            colProps: {
              span: 24,
            },
            required: true,
          },
          '',
        );

        appendSchemaByField(
          {
            field: `${n.value}`,
            component: 'Input',
            label: ' ',
            colProps: {
              span: 24,
            },
            slot: 'add',
          },
          '',
        );
        n.value++;
      }

      function del(field) {
        removeSchemaByFiled([`money-${field}`, `address-${field}`, `${field}`]);
        n.value--;
      }

      return {
        register,
        model: modelRef,
        handleVisibleChange,
        formTitle,
        customSubmitFunc,
        registerBatch,
        handleSubmit,
        add,
        del,
      };
    },
  });
</script>
