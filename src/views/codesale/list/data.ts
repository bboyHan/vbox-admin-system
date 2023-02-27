import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 20,
  },
  {
    title: '核销名',
    dataIndex: 'name',
    width: 100,
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
    title: '商户余额',
    dataIndex: 'balance',
    width: 100,
  },
  {
    title: '今充值',
    dataIndex: 'today',
    width: 100,
  },
  {
    title: '昨充值',
    dataIndex: 'today',
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

