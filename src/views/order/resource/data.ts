import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'orderId',
    label: '订单ID（付方）',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'callbackStatus',
    label: '回调状态',
    component: 'Select',
    colProps: { span: 4 },
    componentProps: {
      options: [
        {
          label: '已回调',
          value: '1',
          key: '1',
        },
        {
          label: '未回调',
          value: '2',
          key: '2',
        },
      ],
    },
  },
  {
    field: 'orderStatus',
    label: '支付状态',
    component: 'Select',
    colProps: { span: 4 },
    componentProps: {
      options: [
        {
          label: '已支付',
          value: '1',
          key: '1',
        },
        {
          label: '未支付',
          value: '2',
          key: '2',
        },
        {
          label: '支付超时',
          value: '3',
          key: '3',
        },
        {
          label: '支付失败',
          value: '0',
          key: '0',
        },
      ],
    },
  },
  {
    field: 'cChannelId',
    label: '所属通道',
    component: 'Select',
    colProps: { span: 4 },
    componentProps: {
      options: [
        {
          label: '微信',
          value: 'jx3_weixin',
          key: '3',
        },
        {
          label: '支付宝',
          value: 'jx3_alipay',
          key: '2',
        },
        {
          label: '京东',
          value: 'jx3_jd',
          key: '1',
        },
      ],
    },
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 40,
    ifShow: false,
  },
  {
    title: '帐号备注',
    dataIndex: 'acRemark',
    width: 80,
    // fixed: 'left',
  },
  {
    title: '充值帐号',
    dataIndex: 'acAccount',
    width: 80,
    // fixed: 'left',
  },
  {
    title: '订单ID（付方）',
    dataIndex: 'orderId',
    width: 220,
  },
  {
    title: '平台订单ID',
    dataIndex: 'platformOid',
    width: 220,
  },
  {
    title: '付方ID',
    dataIndex: 'pa',
    width: 70,
    ifShow: false,
  },
  {
    title: '订单金额',
    dataIndex: 'cost',
    width: 80,
    // fixed: 'right',
  },
  {
    title: '所属通道',
    dataIndex: 'channel',
    width: 120,
    customRender: ({ record }) => {
      const text = record.channel;
      const color = '#9da120';
      return h(Tag, { color: color }, () => text);
    },
  },
  // {
  //   title: '支付码',
  //   dataIndex: 'resourceUrl',
  //   width: 80,
  //   // fixed: 'right',
  // },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
    width: 80,
    customRender: ({ record }) => {
      const status = record.orderStatus;
      let color, text;
      if (status == 1) {
        color = '#20A130FF';
        text = '已支付';
      }
      if (status == 2) {
        color = '#E99D10FF';
        text = '未支付';
      }
      if (status == 3) {
        color = '#108ee9';
        text = '支付超时';
      }
      if (status == 0) {
        color = '#ff0000';
        text = '支付失败';
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '回调状态',
    dataIndex: 'callbackStatus',
    width: 80,
    customRender: ({ record }) => {
      const status = record.callbackStatus;
      let color, text;
      if (status == 1) {
        color = '#20A130FF';
        text = '已回调';
      }
      if (status == 2) {
        color = '#E99D10FF';
        text = '未回调';
      }
      if (status == 0) {
        color = '#ff0000';
        text = '回调失败';
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '取码状态',
    dataIndex: 'codeUseStatus',
    width: 80,
    customRender: ({ record }) => {
      const status = record.codeUseStatus;
      let color, text;
      if (status == 1) {
        color = '#20A130FF';
        text = '取码成功';
      }
      if (status == 0) {
        color = '#ff0000';
        text = '取码失败';
      }
      if (status == 2) {
        color = '#E99D10FF';
        text = '未取码';
      }
      if (status == 3) {
        color = '#108ee9';
        text = '取码超时';
      }
      if (status == 4) {
        color = '#ff0000';
        text = '查单未支付';
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 120,
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'orderId',
    label: '订单ID（付方）',
    component: 'Input',
    span: 24,
    required: true,
  },
  {
    field: '订单id（平台）',
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
