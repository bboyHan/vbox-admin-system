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

const isUpd = (id: string) => id === null || id === '';

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: ({ values }) => !isUpd(values.id),
    component: 'Input',
  },
  {
    field: 'name',
    label: '商户',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'balance',
    label: '商户余额',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'min',
    label: '最小进单额',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'max',
    label: '最大进单额',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
  {
    field: 'channel',
    component: 'CheckboxGroup',
    label: '开放通道',
    colProps: {
      span: 20,
    },
    componentProps: {
      options: [
        {
          label: 'Wg剑网3(微信端)',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
    },
  },
];
