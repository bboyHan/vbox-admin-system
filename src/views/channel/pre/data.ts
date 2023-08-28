import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {
  getChannelPreTypes,
  getChannelPreAccount,
  uploadChannelPre,
  uploadChannelAccount,
} from '/@/api/channel/channel';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const searchFormPre: FormSchema[] = [
  {
    field: 'money',
    label: '金额',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '取码状态',
    component: 'Select',
    colProps: { span: 4 },
    componentProps: {
      options: [
        {
          label: '已取码',
          value: '1',
          key: '1',
        },
        {
          label: '未取码',
          value: '2',
          key: '2',
        },
        {
          label: '置灰',
          value: '3',
          key: '3',
        },
        {
          label: '取码超时',
          value: '4',
          key: '4',
        },
      ],
    },
  },
  {
    field: 'channel',
    label: '通道',
    component: 'Select',
    colProps: { span: 4 },
    componentProps: {
      options: [
        {
          label: '剑三',
          value: 'jx3_alipay_pre',
          key: '1',
        },
        {
          label: '盛趣',
          value: 'sdo_alipay',
          key: '2',
        },
      ],
    },
  },
];
export const preBatchColumns: FormSchema[] = [
  {
    field: 'file1',
    component: 'Upload',
    label: '点它上传',
    colProps: {
      span: 24,
    },
    rules: [{ required: true, message: '请选择上传文件，仅支持excel格式' }],
    componentProps: {
      api: uploadChannelPre,
    },
  },
  {
    field: 'fac',
    component: 'Input',
    label: '格式说明',
    required: true,
    defaultValue: '联系管理员要上传模板',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
];

export const accountBatchColumns: FormSchema[] = [
  {
    field: 'file1',
    component: 'Upload',
    label: '点它上传',
    colProps: {
      span: 24,
    },
    rules: [{ required: true, message: '请选择上传文件，仅支持excel格式' }],
    componentProps: {
      api: uploadChannelAccount,
    },
  },
  {
    field: 'fac',
    component: 'Input',
    label: '格式说明',
    required: true,
    defaultValue: '联系管理员要上传模板',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
];


export const preBatchPreAcListColumns: FormSchema[] = [
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
    field: 'count',
    component: 'InputNumber',
    label: '产码数量',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
    defaultValue: 3,
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
  {
    label: '充值账户',
    field: 'acidList',
    component: 'CheckboxGroup',
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    },
    // required: true,
    colProps: {
      span: 24,
    },
    // rules: [{ required: true, trigger: 'blur' }],
  },
];

export const delBatchAcListColumns: FormSchema[] = [
  {
    label: '充值账户',
    field: 'acidList',
    component: 'CheckboxGroup',
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    },
    // required: true,
    colProps: {
      span: 24,
    },
    // rules: [{ required: true, trigger: 'blur' }],
  },
];

export const enableBatchAcListColumns: FormSchema[] = [
  {
    label: '充值账户',
    field: 'acidList',
    component: 'CheckboxGroup',
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '1',
        },
      ],
    },
    colProps: {
      span: 24,
    },
  },
  {
    label: '状态开启',
    field: 'status',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [{ label: '启用', value: '1' }],
    },
    colProps: { span: 8 },
  },
];

export const disableBatchAcListColumns: FormSchema[] = [
  {
    label: '充值账户',
    field: 'acidList',
    component: 'CheckboxGroup',
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '1',
        },
      ],
    },
    colProps: {
      span: 24,
    },
  },
  {
    label: '状态开启',
    field: 'status',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [{ label: '关闭', value: '0' }],
    },
    colProps: { span: 8 },
  },
];

export const preColumns: FormSchema[] = [
  {
    label: '通道账户',
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
        color = '#a5abb4';
        text = '取码置灰';
      }
      if (status == 4) {
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
        text = '等待取码';
      }
      if (status == 3) {
        color = '#a5abb4';
        text = '取码置灰';
      }
      if (status == 4) {
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
