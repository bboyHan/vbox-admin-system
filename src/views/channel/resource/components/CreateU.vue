<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="formTitle"
    @visible-change="handleVisibleChange"
    @ok="customSubmitFunc"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { columns } from '/@/views/channel/resource/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { createCAccount } from '/@/api/channel/channel';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      // let columns = ;
      const { createMessage } = useMessage();

      const modelRef = ref({});
      const formTitle = ref('');
      const channelId = ref('');
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps,
          validate,
          updateSchema,
          resetFields,
        },
      ] = useForm({
        labelWidth: 100,
        layout: 'horizontal',
        schemas: columns,
        showActionButtonGroup: false,
      });

      const [register, { setModalProps, closeModal }] = useModalInner(async (data) => {
        data && onDataReceive(data);
        setModalProps({ confirmLoading: false });
        updateSchema({
          field: 'c_gateway',
          componentProps: {
            params: {
              c_channel_id: channelId.value,
            },
          },
        });
        if (channelId.value == 'jx3_ali_gift') {
          updateSchema({
            field: 'payType',
            componentProps: {
              options: [
                {
                  label: '支付宝',
                  value: '3',
                  key: '3',
                },
              ],
            },
            defaultValue: '3',
          });
        }
        if (
          channelId.value == 'xoy_tb' ||
          channelId.value == 'xoy_jd' ||
          channelId.value == 'wme_alipay' ||
          channelId.value == 'jx3_alipay' ||
          channelId.value == 'jx3_ali_gift' ||
          channelId.value == 'jx3_alipay_pre'
        ) {
          updateSchema({
            field: 'payType',
            componentProps: {
              options: [
                {
                  label: '支付宝',
                  value: '3',
                  key: '3',
                },
              ],
            },
            defaultValue: '3',
          });
        }
        if (
          channelId.value == 'jx3_weixin' ||
          channelId.value == 'jx3_weixin_qr' ||
          channelId.value == 'jx3_wx_gift'
        ) {
          updateSchema({
            field: 'payType',
            componentProps: {
              options: [
                {
                  label: '微信',
                  value: '2',
                  key: '2',
                },
              ],
            },
            defaultValue: '2',
          });
        }
        if (channelId.value == 'jx3_jd') {
          updateSchema({
            field: 'payType',
            componentProps: {
              options: [
                {
                  label: '京东',
                  value: '1',
                  key: '1',
                },
              ],
            },
            defaultValue: '1',
          });
        }
      });
      async function customSubmitFunc() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          let ret = await handleCreate(values);
          console.log(ret);
          closeModal();
        } catch (error) {
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handleCreate(record: Recordable) {
        record.c_channel_id = channelId.value;
        console.log(record);
        createCAccount(record)
          .then((ret) => {
            console.log(ret);
            createMessage.success(`添加通道账户成功`);
          })
          .catch(() => {
            createMessage.error('添加通道账户失败');
          });
      }

      // const [register] = useModalInner((data) => {
      //   data && onDataReceive(data);
      // });

      function onDataReceive(data) {
        console.log('Data Received', data);
        formTitle.value = data.title;
        channelId.value = data.channel_id;
        resetFields();
      }

      function handleVisibleChange(v) {
        console.log(v);
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        register,
        // columns,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        formTitle,
        customSubmitFunc,
      };
    },
  });
</script>
