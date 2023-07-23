import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getChannelPreTypes, getChannelPreAccount } from '/@/api/channel/channel';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const preColumns: FormSchema[] = [
  {
    label: '充值账户',
    field: 'acid',
    component: 'Input',
    componentProps: {
      api: getChannelPreAccount,
      labelField: 'acRemark',
      valueField: 'acid',
      immediate: false,
    },
    slot: 'localSearch',
    // required: true,
    colProps: {
      span: 24,
    },
    // rules: [{ required: true, trigger: 'blur' }],
  },
  // {
  //   label: '查单账户',
  //   field: 'ckid',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     api: getChannelPreAccount,
  //     labelField: 'acRemark',
  //     valueField: 'acid',
  //     immediate: false,
  //   },
  //   // required: true,
  //   colProps: {
  //     span: 24,
  //   },
  //   // rules: [{ required: true, trigger: 'blur' }],
  // },
  {
    field: 'money',
    component: 'InputNumber',
    label: '设定金额',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
    defaultValue: 100,
  },
  {
    label: '平台订单ID',
    field: 'platOid',
    component: 'Input',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
  },
  {
    label: '平台参数',
    field: 'platParam',
    component: 'InputTextArea',
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
      api: getChannelPreTypes,
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

export const countPreColums: BasicColumn[] = [
  {
    title: '账号ID',
    dataIndex: 'acid',
    width: 80,
  },
  {
    title: '通道账号',
    dataIndex: 'acAccount',
    width: 40,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 40,
    customRender: ({ record }) => {
      const status = record.status;
      let color, text;
      if (status == 1) {
        color = '#20A130FF';
        text = '取码成功';
      }
      if (status == 0) {
        color = '#ff0000';
        text = '取码失败';
      }
      if (status == 2) {
        color = '#E99D10FF';
        text = '未取码';
      }
      if (status == 3) {
        color = '#108ee9';
        text = '取码超时';
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '数量',
    dataIndex: 'count',
    width: 40,
  },
];

export const columns: BasicColumn[] = [
  {
    title: '通道',
    dataIndex: 'channel',
    width: 40,
  },
  {
    title: '通道账号',
    dataIndex: 'acAccount',
    width: 40,
  },
  {
    title: '账号标识',
    dataIndex: 'acid',
    width: 40,
  },
  {
    title: '金额',
    dataIndex: 'money',
    width: 40,
  },
  {
    title: '平台ID',
    dataIndex: 'platOid',
    width: 120,
  },
  {
    title: '平台参数',
    dataIndex: 'platParam',
    width: 80,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      let color, text;
      if (status == 1) {
        color = '#20A130FF';
        text = '取码成功';
      }
      if (status == 0) {
        color = '#ff0000';
        text = '取码失败';
      }
      if (status == 2) {
        color = '#E99D10FF';
        text = '未取码';
      }
      if (status == 3) {
        color = '#108ee9';
        text = '取码超时';
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 80,
  },
];

export const preUpdColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    // show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acid',
    label: 'ACID',
    dynamicDisabled: true,
    // show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acAccount',
    label: '通道账号',
    dynamicDisabled: true,
    // show: false,
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
    field: 'platOid',
    component: 'Input',
    label: '平台ID',
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '输入orderID',
    },
  },
  {
    field: 'platParam',
    component: 'InputTextArea',
    label: '平台参数',
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入queryString等参数',
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
];
