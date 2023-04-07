import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setCAccountStatus } from '/@/api/channel/channel';
import { useMessage } from '/@/hooks/web/useMessage';

const { createMessage } = useMessage();

export const searchFormSchema: FormSchema[] = [
  {
    field: 'ac_remark',
    label: '帐号备注',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 40,
    fixed: 'left',
    ifShow: false,
  },
  {
    title: 'ACID',
    dataIndex: 'acid',
    width: 70,
    ifShow: false,
  },
  {
    title: '帐号备注',
    dataIndex: 'ac_remark',
    width: 70,
    fixed: 'left',
  },
  {
    title: '充值帐号',
    dataIndex: 'ac_account',
    width: 70,
  },
  {
    title: '充值密码',
    dataIndex: 'ac_pwd',
    width: 70,
  },
  {
    title: '所属通道',
    dataIndex: 'c_channel_name',
    width: 80,
  },
  {
    title: '所属区域',
    dataIndex: 'c_gateway_name',
    width: 120,
  },
  {
    title: '账户开关',
    dataIndex: 'status',
    width: 60,
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
          record.pendingStatus = true;
          const newStatus = checked ? '1' : '0';
          setCAccountStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改状态`);
              location.reload();
            })
            .catch(() => {
              createMessage.error('修改状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '异常开关',
    dataIndex: 'sys_status',
    width: 60,
    customRender: ({ record }) => {
      return h(Switch, {
        checked: record.sys_status === 1,
        checkedChildren: '正常',
        unCheckedChildren: '异常',
        disabled: true,
      });
    },
  },
  {
    title: '今充值',
    dataIndex: 'today_cost',
    width: 60,
  },
  {
    title: '日限额',
    dataIndex: 'daily_limit',
    width: 60,
  },
  {
    title: '总充值',
    dataIndex: 'total_cost',
    width: 60,
  },
  {
    title: '总限额',
    dataIndex: 'total_limit',
    width: 60,
  },
  {
    title: '最新结果',
    dataIndex: 'sys_log',
    width: 180,
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
