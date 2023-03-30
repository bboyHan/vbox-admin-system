import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '核销名',
    dataIndex: 'sale_name',
    width: 100,
  },
  {
    title: '账号备注',
    dataIndex: 'ac_remark',
    width: 80,
  },
  {
    title: '充值账号',
    dataIndex: 'ac_account',
    width: 80,
  },
  {
    title: '充值密码',
    dataIndex: 'ac_pwd',
    width: 80,
  },
  {
    title: '所属通道',
    dataIndex: 'c_channel_name',
    width: 80,
  },
  {
    title: '日限额',
    dataIndex: 'daily_limit',
    width: 80,
  },
  {
    title: '最小进单额',
    dataIndex: 'min',
    width: 80,
  },
  {
    title: '最大进单额',
    dataIndex: 'max',
    width: 80,
  },
  {
    title: '今充值',
    dataIndex: 'today_cost',
    width: 100,
  },
  {
    title: '昨充值',
    dataIndex: 'yesterday_cost',
    width: 100,
  },
  {
    title: '总充值',
    dataIndex: 'total_cost',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '商户用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
];
