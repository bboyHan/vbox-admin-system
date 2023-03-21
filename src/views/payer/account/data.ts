import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setPAccountStatus } from '/@/api/channel/pay';
import { useMessage } from '/@/hooks/web/useMessage';

const { createMessage } = useMessage();

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
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
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 20,
  },
  {
    title: '付方备注',
    dataIndex: 'p_remark',
    width: 70,
  },
  {
    title: '付方ID',
    dataIndex: 'p_account',
    width: 70,
  },
  {
    title: '付方Key',
    dataIndex: 'p_key',
    width: 70,
  },
  {
    title: '公钥',
    dataIndex: 'pub',
    width: 70,
    ellipsis: true,
    // slots: { customRender: 'txt' },
  },
  // {
  //   title: '私钥',
  //   dataIndex: 'secret',
  //   width: 60,
  //   ellipsis: true,
  // },
  {
    title: '开关',
    dataIndex: 'status',
    width: 60,
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
          setPAccountStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改状态`);
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
];

export const formSchema: FormSchema[] = [
  {
    field: 'p_remark',
    label: '付方备注',
    component: 'Input',
    span: 24,
    required: true,
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
    required: true,
  },
];

export const paUpdColumn: FormSchema[] = [
  {
    field: 'p_remark',
    component: 'Input',
    label: '付方备注',
    helpMessage: ['付方备注, 便于自行区分'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的付方备注名',
    },
    required: true,
  },
];
