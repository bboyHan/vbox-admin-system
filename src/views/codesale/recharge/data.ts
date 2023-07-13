import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getSaleSimpleList } from '/@/api/channel/codesales';

export const rechargeColumns: FormSchema[] = [
  {
    field: 'balance',
    component: 'Input',
    label: '当前余额',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
    dynamicDisabled: true,
  },
  {
    label: '充值账号',
    field: 'uid',
    component: 'ApiSelect',
    componentProps: {
      api: getSaleSimpleList,
      labelField: 'account',
      valueField: 'id',
      immediate: false,
    },
    // required: true,
    colProps: {
      span: 24,
    },
    // rules: [{ required: true, trigger: 'blur' }],
  },
  {
    field: 'recharge',
    component: 'InputNumber',
    label: '充值积分',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入充值积分, 最小为100的倍数',
    },
    required: true,
  },
];

export const columns: BasicColumn[] = [
  {
    title: '核销账号',
    dataIndex: 'account',
    width: 100,
  },
  {
    title: '换算单位',
    dataIndex: 'tariff',
    width: 80,
  },
  {
    title: '充值积分',
    dataIndex: 'recharge',
    width: 80,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 80,
  },
  {
    title: '充值时间',
    dataIndex: 'createTime',
    width: 80,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '核销号',
    component: 'Input',
    colProps: { span: 8 },
  },
];
