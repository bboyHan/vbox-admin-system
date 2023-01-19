import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setCodeSalesStatus } from '/@/api/channel/codesales';
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
    title: 'MID',
    dataIndex: 'mid',
    width: 20,
  },
  {
    title: '帐号备注',
    dataIndex: 'account',
    width: 80,
  },
  {
    title: '所属通道',
    dataIndex: 'channel',
    width: 80,
  },
  {
    title: '产码开关',
    dataIndex: 'status',
    width: 20,
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
          setCodeSalesStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改产码状态`);
            })
            .catch(() => {
              createMessage.error('修改产码状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '产码个数',
    dataIndex: 'prodCodeNum',
    width: 30,
  },
  {
    title: '产码任务',
    dataIndex: 'prodCodeTask',
    width: 30,
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
    field: 'mid',
    label: 'MID',
    dynamicDisabled: true,
    component: 'InputNumber',
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
