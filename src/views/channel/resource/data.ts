import { FormSchema } from '/@/components/Table';
import { getGatewayList } from '/@/api/channel/channel';
// import { Alert } from 'ant-design-vue';
// import { h } from 'vue';
import JX3 from '/@/assets/images/jx3.jpg';
// import QQ from '/@/assets/images/qq.jpg';

interface ChannelItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  link: string;
  channel_id: string;
}

export const channelItems: ChannelItem[] = [
  {
    title: '剑网3（微信端）',
    icon: JX3,
    color: '',
    desc: 'Build software better, together.',
    channel_id: 'jx3_weixin',
    date: '2022-12-21',
    link: 'https://github.com/bboyHan/',
  },
  // {
  //   title: '腾讯系',
  //   icon: QQ,
  //   color: '#3fb27f',
  //   desc: '渐进式 JavaScript 框架',
  //   channel_id: 'qq_wallet',
  //   date: '2022-12-21',
  //   link: 'https://cn.vuejs.org/',
  // },
];

export const columns: FormSchema[] = [
  {
    field: 'ac_remark',
    component: 'Input',
    label: '账户备注',
    helpMessage: ['账户备注, 便于商户自行区分账户'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的账户备注名，且不能重复',
    },
    required: true,
  },
  {
    field: 'ac_account',
    component: 'Input',
    label: '充值账户',
    helpMessage: ['充值账户, 用于账户充值的帐号确认'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入用于账户充值的真实帐号，务必核对正确',
    },
    required: true,
  },
  {
    field: 'ac_pwd',
    component: 'InputPassword',
    label: '充值密码',
    helpMessage: ['充值密码, 用于账户充值的密码确认'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入用于账户充值的真实密码，务必核对正确',
    },
    required: true,
  },
  {
    field: 'daily_limit',
    component: 'InputNumber',
    label: '日限额',
    helpMessage: ['默认为0, 0则为不限制'],
    colProps: {
      span: 12,
    },
    defaultValue: '0',
    required: true,
  },
  {
    field: 'total_limit',
    component: 'InputNumber',
    label: '总限额',
    helpMessage: ['默认为10000'],
    colProps: {
      span: 12,
    },
    defaultValue: '10000',
    required: true,
  },
  {
    field: 'min',
    component: 'InputNumber',
    label: '最小金额',
    colProps: {
      span: 12,
    },
    defaultValue: '0',
    required: true,
  },
  {
    field: 'max',
    component: 'InputNumber',
    label: '最大金额',
    colProps: {
      span: 12,
    },
    defaultValue: '99999',
    required: true,
  },
  // {
  //   field: 'ck',
  //   component: 'InputTextArea',
  //   label: 'CK',
  //   helpMessage: ['请填写用户CK'],
  //   colProps: { span: 24 },
  //   componentProps: {
  //     placeholder: '请输入用户CK',
  //   },
  //   required: true,
  // },
  {
    label: '选择大区',
    field: 'c_gateway',
    component: 'ApiSelect',
    componentProps: {
      api: getGatewayList,
      labelField: 'c_gateway_name',
      valueField: 'c_gateway',
    },
    required: true,
    colProps: {
      span: 12,
    },
    rules: [{ required: true, trigger: 'blur' }],
  },
  {
    field: 'payType',
    component: 'Select',
    label: '支付方式',
    helpMessage: ['选择支付方式（支付宝或微信）'],
    colProps: {
      span: 10,
    },
    componentProps: {
      options: [
        {
          label: '微信',
          value: '1',
          key: '1',
        },
      ],
    },
    required: true,
    // defaultValue: '1',
  },
];

export const columnsTx: FormSchema[] = [
  {
    field: 'ac_remark',
    component: 'Input',
    label: '账户备注',
    helpMessage: ['账户备注, 便于商户自行区分账户'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的账户备注名，且不能重复',
    },
    required: true,
  },
  {
    field: 'ac_account',
    component: 'Input',
    label: '充值账户',
    helpMessage: ['充值账户, 用于账户充值的帐号确认'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入用于账户充值的真实帐号，务必核对正确',
    },
    required: true,
  },
  // {
  //   field: 'openId',
  //   component: 'Input',
  //   label: 'openID',
  //   helpMessage: ['从ck工具中获取查看'],
  //   colProps: {
  //     span: 24,
  //   },
  //   componentProps: {
  //     placeholder: '请输入ck工具中的openID，务必核对正确',
  //   },
  //   required: true,
  // },
  // {
  //   field: 'openKey',
  //   component: 'Input',
  //   label: 'openKey',
  //   helpMessage: ['从ck工具中获取查看'],
  //   colProps: {
  //     span: 24,
  //   },
  //   componentProps: {
  //     placeholder: '请输入ck工具中的openKey，务必核对正确',
  //   },
  //   required: true,
  // },
  {
    field: 'ck',
    component: 'InputTextArea',
    label: 'CK',
    helpMessage: ['请填写用户CK'],
    colProps: { span: 24 },
    componentProps: {
      placeholder: '请输入用户CK',
    },
    required: true,
  },
  {
    field: 'daily_limit',
    component: 'InputNumber',
    label: '日限额',
    helpMessage: ['默认为0, 0则为不限制'],
    colProps: {
      span: 12,
    },
    defaultValue: '0',
    required: true,
  },
  {
    field: 'total_limit',
    component: 'InputNumber',
    label: '总限额',
    helpMessage: ['默认为10000'],
    colProps: {
      span: 12,
    },
    defaultValue: '10000',
    required: true,
  },
  {
    field: 'min',
    component: 'InputNumber',
    label: '最小金额',
    colProps: {
      span: 12,
    },
    defaultValue: '0',
    required: true,
  },
  {
    field: 'max',
    component: 'InputNumber',
    label: '最大金额',
    colProps: {
      span: 12,
    },
    defaultValue: '99999',
    required: true,
  },
  {
    label: '选择通道',
    field: 'c_gateway',
    component: 'ApiSelect',
    componentProps: {
      api: getGatewayList,
      labelField: 'c_gateway_name',
      valueField: 'c_gateway',
    },
    required: true,
    colProps: {
      span: 12,
    },
    rules: [{ required: true, trigger: 'blur' }],
  },
  {
    field: 'payType',
    component: 'Select',
    label: '支付方式',
    helpMessage: ['选择支付方式（支付宝或微信）'],
    colProps: {
      span: 10,
    },
    componentProps: {
      options: [
        {
          label: '微信',
          value: '1',
          key: '1',
        },
      ],
    },
    required: true,
    // defaultValue: '1',
  },
];

export const columnsSdo: FormSchema[] = [
  {
    field: 'ac_remark',
    component: 'Input',
    label: '账户备注',
    helpMessage: ['账户备注, 便于商户自行区分账户'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的账户备注名，且不能重复',
    },
    required: true,
  },
  {
    field: 'ac_account',
    component: 'Input',
    label: '充值账户',
    helpMessage: ['充值账户, 用于账户充值的帐号确认'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入用于账户充值的真实帐号，务必核对正确',
    },
    required: true,
  },
  {
    field: 'ck',
    component: 'InputTextArea',
    label: 'CK',
    helpMessage: ['请填写用户CK'],
    colProps: { span: 24 },
    componentProps: {
      placeholder: '请输入用户CK,包含nseesionid',
    },
    required: true,
  },
  {
    field: 'daily_limit',
    component: 'InputNumber',
    label: '日限额',
    helpMessage: ['默认为0, 0则为不限制'],
    colProps: {
      span: 12,
    },
    defaultValue: '0',
    required: true,
  },
  {
    field: 'total_limit',
    component: 'InputNumber',
    label: '总限额',
    helpMessage: ['默认为10000'],
    colProps: {
      span: 12,
    },
    defaultValue: '10000',
    required: true,
  },
  {
    field: 'min',
    component: 'InputNumber',
    label: '最小金额',
    colProps: {
      span: 12,
    },
    defaultValue: '0',
    required: true,
  },
  {
    field: 'max',
    component: 'InputNumber',
    label: '最大金额',
    colProps: {
      span: 12,
    },
    defaultValue: '99999',
    required: true,
  },
  {
    label: '选择通道',
    field: 'c_gateway',
    component: 'ApiSelect',
    componentProps: {
      api: getGatewayList,
      labelField: 'c_gateway_name',
      valueField: 'c_gateway',
    },
    required: true,
    colProps: {
      span: 12,
    },
    rules: [{ required: true, trigger: 'blur' }],
  },
  {
    field: 'payType',
    component: 'Select',
    label: '支付方式',
    helpMessage: ['选择支付方式（支付宝或微信）'],
    colProps: {
      span: 10,
    },
    componentProps: {
      options: [
        {
          label: '支付宝',
          value: '3',
          key: '3',
        },
      ],
    },
    required: true,
  },
];
