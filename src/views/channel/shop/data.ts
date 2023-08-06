import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getChannelShopTypes, setMultiChannelShopStatus } from '/@/api/channel/channel';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';

export const shopColumns: FormSchema[] = [
  {
    field: 'money',
    component: 'InputNumber',
    label: '设定金额',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
  },
  {
    label: '商铺地址',
    field: 'address',
    component: 'Input',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
  },
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
    // required: true,
    colProps: {
      span: 24,
    },
    // rules: [{ required: true, trigger: 'blur' }],
  },
];

export const columns: BasicColumn[] = [
  {
    title: '通道',
    dataIndex: 'channel',
    width: 40,
  },
  {
    title: '金额',
    dataIndex: 'money',
    width: 80,
  },
  // {
  //   title: '商铺地址',
  //   dataIndex: 'address',
  //   width: 120,
  // },
  {
    title: '商铺备注',
    dataIndex: 'shopRemark',
    width: 50,
  },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   width: 80,
  // },
  {
    title: '开关',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      // console.log(record);
      return h(Switch, {
        checked: record.status === 1,
        checkedChildren: '已启用',
        unCheckedChildren: '已禁用',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          // debugger;
          record.pendingStatus = true;
          const newStatus = checked ? 1 : 0;
          const { createMessage } = useMessage();
          console.log('-->' + record.id + ':' + record.shopRemark + ':' + newStatus);
          setMultiChannelShopStatus(record.shopRemark, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改商铺状态`);
              // location.reload();
            })
            .catch(() => {
              createMessage.error('修改商铺状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
];

export const channelShopUpdColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'channel',
    label: '通道ID',
    dynamicDisabled: true,
    component: 'Input',
    show: false,
  },
  {
    field: 'shopRemark',
    component: 'Input',
    label: '商铺备注',
    dynamicDisabled: true,
    // helpMessage: ['商铺备注, 便于商户自行区分商铺'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的商铺备注名',
    },
  },
  {
    field: 'money',
    component: 'InputNumber',
    label: '金额核定',
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '引导商铺地址的对应金额，务必核对正确',
    },
    dynamicDisabled: true,
  },
  {
    field: 'address',
    component: 'InputTextArea',
    label: '商铺地址',
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入引导对应金额的商铺地址，务必核对金额与链接正确',
    },
  },
];
