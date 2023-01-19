import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setCodeSalesStatus } from '/@/api/channel/codesales';
import { useMessage } from '/@/hooks/web/useMessage';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 20,
  },
  {
    title: '商户用户名',
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
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      // console.log(record);
      return h(Switch, {
        checked: record.status === '1',
        checkedChildren: '已启用',
        unCheckedChildren: '已禁用',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? '1' : '0';
          const { createMessage } = useMessage();
          setCodeSalesStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改角色状态`);
            })
            .catch(() => {
              createMessage.error('修改角色状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '最近登陆时间',
    dataIndex: 'lastTime',
    width: 180,
  },
  {
    title: '商户余额',
    dataIndex: 'balance',
    width: 100,
  },
  {
    title: '手续费',
    dataIndex: 'charge',
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
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

const isUpd = (id: string) => id === null || id === '';

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: '角色id',
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
