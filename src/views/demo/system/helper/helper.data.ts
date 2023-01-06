import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { MarkDown } from '/@/components/Markdown';

export const editList = [
  {
    key: '1',
    name: '帮助信息',
    component: 'HelpEdit',
  },
  {
    key: '2',
    name: '公告发布',
    component: 'NoticeEdit',
  },
  {
    key: '3',
    name: '活动发布',
    component: 'PromotionEdit',
  },
  {
    key: '4',
    name: '发布信息',
    component: 'HelpList',
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
  {
    field: 'content',
    component: 'Input',
    label: '内容',
    defaultValue: '',
    rules: [{ required: true, trigger: 'blur' }],
    render: ({ model, field }) => {
      return h(MarkDown, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
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
