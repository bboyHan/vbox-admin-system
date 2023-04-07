import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setCAccountStatus } from '/@/api/channel/channel';
import { useMessage } from '/@/hooks/web/useMessage';

const { createMessage } = useMessage();

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
  // {
  //   title: '充值密码',
  //   dataIndex: 'ac_pwd',
  //   width: 80,
  // },
  {
    title: '所属通道',
    dataIndex: 'c_channel_name',
    width: 80,
  },
  // {
  //   title: '日限额',
  //   dataIndex: 'daily_limit',
  //   width: 80,
  // },
  // {
  //   title: '最小进单额',
  //   dataIndex: 'min',
  //   width: 80,
  // },
  // {
  //   title: '最大进单额',
  //   dataIndex: 'max',
  //   width: 80,
  // },
  {
    title: '前日充值',
    dataIndex: 'before_day_cost',
    width: 100,
  },
  {
    title: '昨日充值',
    dataIndex: 'yesterday_cost',
    width: 100,
  },
  {
    title: '今日充值',
    dataIndex: 'today_cost',
    width: 100,
  },
  {
    title: '总充值',
    dataIndex: 'total_cost',
    width: 100,
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
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'acRemark',
    label: '账号备注',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'saleName',
    label: '核销号',
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
