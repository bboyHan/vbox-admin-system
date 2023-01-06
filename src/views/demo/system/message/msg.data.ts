import { BasicColumn, FormSchema } from '/@/components/Table';

export const editList = [
  {
    key: '1',
    name: '邮件发送',
    component: 'EmailEdit',
  },
  {
    key: '2',
    name: '短信发送',
    component: 'MessageEdit',
  },
  {
    key: '3',
    name: '信息查询',
    component: 'MsgList',
  },
];

export const columns: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '标题',
    defaultValue: '',
    rules: [{ required: true }],
  },
  {
    field: 'type',
    component: 'Input',
    label: '分类',
    defaultValue: '',
    rules: [{ required: true }],
  },
];

export const tableColumns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '图片',
    dataIndex: 'img',
    // customRender: ({ record }) => {
    //   return h(Icon, { icon: record.img });
    // },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];
