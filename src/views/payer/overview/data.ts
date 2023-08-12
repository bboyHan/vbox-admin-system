import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 40,
    fixed: 'left',
    ifShow: false,
  },
  {
    title: '通道ID',
    dataIndex: 'channel',
    width: 70,
  },
  {
    title: '昨日产单',
    dataIndex: 'countOrderYesterday',
    width: 70,
  },
  {
    title: '昨日成单',
    dataIndex: 'countPayedYesterday',
    width: 70,
  },
  {
    title: '昨日金额',
    dataIndex: 'sumPayedYesterday',
    width: 70,
  },
  {
    title: '今日产单',
    dataIndex: 'countOrderToday',
    width: 70,
  },
  {
    title: '今日成单',
    dataIndex: 'countPayedToday',
    width: 70,
  },
  {
    title: '今日金额',
    dataIndex: 'sumPayedToday',
    width: 70,
  },
];

const isUpd = (id: string) => id === null || id === '';

export const formModalSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: ({ values }) => !isUpd(values.id),
    component: 'Input',
    span: 24,
  },
  {
    field: 'acid',
    label: 'ACID',
    dynamicDisabled: true,
    component: 'Input',
  },
  {
    field: 'period',
    label: '产码间隔',
    component: 'InputNumber',
  },
  {
    field: 'num',
    label: '产码数量',
    component: 'InputNumber',
  },
  {
    field: 'payNum',
    label: '产码金额',
    required: true,
    helpMessage: [
      '多个产码金额，请使用英文状态下的逗号（,）隔开',
      '产码金额示范：10,20,30',
      '金额为空则在10,20,30,50,100,200,300,500随机取值',
    ],
    component: 'InputNumber',
  },
  {
    field: 'expireTime',
    component: 'InputNumber',
    label: '过期时间',
    colProps: {
      span: 20,
    },
    defaultValue: '30',
  },
];

export const preOrderColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  // {
  //   field: 'money',
  //   label: '金额',
  //   component: 'Slider',
  //   span: 24,
  //   componentProps: {
  //     min: 10,
  //     max: 2000,
  //     step: 10,
  //     marks: {
  //       100: '￥100',
  //       1000: '￥1000',
  //     },
  //   },
  //   colProps: {
  //     span: 18,
  //   },
  //   defaultValue: 100,
  // },
  {
    field: 'money',
    label: '金额',
    component: 'InputNumber',
    defaultValue: 200,
  },
  {
    field: 'count',
    label: '数量',
    component: 'InputNumber',
    defaultValue: 3,
  },
  // {
  //   field: 'count',
  //   label: '数量',
  //   component: 'Slider',
  //   span: 24,
  //   componentProps: {
  //     min: 1,
  //     max: 20,
  //     step: 1,
  //     marks: {
  //       3: '3个',
  //       10: '10个',
  //     },
  //   },
  //   colProps: {
  //     span: 18,
  //   },
  //   defaultValue: 3,
  // },
  {
    field: 'acid',
    label: '账户id',
    dynamicDisabled: true,
    show: true,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acRemark',
    label: '账户备注',
    dynamicDisabled: true,
    show: true,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acAccount',
    label: '充值账户',
    dynamicDisabled: true,
    show: true,
    component: 'Input',
    span: 24,
  },
  {
    field: 'channel',
    label: '通道id',
    dynamicDisabled: true,
    show: true,
    component: 'Input',
    span: 24,
    colProps: {
      span: 18,
    },
  },
];

export const mockOrderColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acid',
    label: '账户id',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'c_channel_id',
    label: '通道id',
    dynamicDisabled: true,
    show: true,
    component: 'Input',
    span: 24,
    colProps: {
      span: 18,
    },
  },
  {
    field: 'money',
    label: '金额',
    component: 'Slider',
    span: 24,
    componentProps: {
      min: 10,
      max: 300,
      step: 10,
      marks: {
        10: '￥10',
        100: '￥100',
      },
    },
    colProps: {
      span: 18,
    },
    defaultValue: 10,
  },
  {
    field: 'payIp',
    label: '付款IP',
    component: 'Input',
    span: 24,
    colProps: {
      span: 18,
    },
  },
  {
    field: 'area',
    label: '地区编码',
    component: 'Input',
    span: 24,
    colProps: {
      span: 18,
    },
  },
  {
    field: 'pr',
    label: '代理',
    component: 'Select',
    colProps: {
      span: 18,
    },
    span: 24,
    componentProps: {
      options: [
        {
          label: '神龙',
          value: 'shenlong',
          key: '1',
        },
        {
          label: '花生',
          value: 'huasheng',
          key: '2',
        },
        {
          label: '芝麻',
          value: 'zhima',
          key: '3',
        },
        {
          label: '蜗牛',
          value: 'woniu',
          key: '4',
        },
        {
          label: '豌豆',
          value: 'wandou',
          key: '5',
        },
      ],
    },
  },
];

export const caUpdColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acid',
    label: 'ACID',
    dynamicDisabled: true,
    component: 'Input',
    show: false,
  },
  {
    field: 'ac_remark',
    component: 'Input',
    label: '账户备注',
    helpMessage: ['账户备注, 便于商户自行区分账户'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的账户备注名',
    },
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
    dynamicDisabled: true,
    // required: true,
  },
  {
    field: 'ac_pwd',
    component: 'InputPassword',
    label: '充值密码',
    helpMessage: ['充值账户密码, 用于账户充值的密码确认'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入用于账户充值的真实密码，务必核对正确',
    },
  },
  {
    field: 'daily_limit',
    component: 'InputNumber',
    label: '日限额',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'total_limit',
    component: 'InputNumber',
    label: '总限额',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'ck',
    component: 'InputTextArea',
    label: 'CK',
    helpMessage: ['填写用户CK'],
    colProps: { span: 24 },
    componentProps: {
      placeholder: '输入用户CK（选填）',
    },
    required: false,
  },
];

export const caUpdTxColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acid',
    label: 'ACID',
    dynamicDisabled: true,
    component: 'Input',
    show: false,
  },
  {
    field: 'ac_remark',
    component: 'Input',
    label: '账户备注',
    helpMessage: ['账户备注, 便于商户自行区分账户'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的账户备注名',
    },
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
    dynamicDisabled: true,
    // required: true,
  },
  // {
  //   field: 'openId',
  //   component: 'Input',
  //   label: 'openId',
  //   helpMessage: ['从ck工具中获取查看'],
  //   colProps: {
  //     span: 24,
  //   },
  //   componentProps: {
  //     placeholder: '请输入ck工具中的openID，务必核对正确',
  //   },
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
  // },
  {
    field: 'ck',
    component: 'InputTextArea',
    label: 'CK',
    helpMessage: ['填写用户CK'],
    colProps: { span: 24 },
    componentProps: {
      placeholder: '输入用户CK（选填）',
    },
    required: false,
  },
  {
    field: 'daily_limit',
    component: 'InputNumber',
    label: '日限额',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'total_limit',
    component: 'InputNumber',
    label: '总限额',
    colProps: {
      span: 12,
    },
  },
];

export const caUpdSdoColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'acid',
    label: 'ACID',
    dynamicDisabled: true,
    component: 'Input',
    show: false,
  },
  {
    field: 'ac_remark',
    component: 'Input',
    label: '账户备注',
    helpMessage: ['账户备注, 便于商户自行区分账户'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的账户备注名',
    },
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
    dynamicDisabled: true,
    // required: true,
  },
  {
    field: 'ac_pwd',
    component: 'InputPassword',
    label: '充值密码',
    helpMessage: ['充值账户密码, 用于账户充值的密码确认'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入用于账户充值的真实密码，务必核对正确',
    },
  },
  {
    field: 'ck',
    component: 'InputTextArea',
    label: 'CK',
    helpMessage: ['填写用户CK'],
    colProps: { span: 24 },
    componentProps: {
      placeholder: '输入用户CK（选填）',
    },
    required: false,
  },
  {
    field: 'daily_limit',
    component: 'InputNumber',
    label: '日限额',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'total_limit',
    component: 'InputNumber',
    label: '总限额',
    colProps: {
      span: 12,
    },
  },
];

