import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import dayjs from 'dayjs';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'orderId',
    label: '订单ID（付方）',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'acRemark',
    label: '账号（备注）',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'acAccount',
    label: '账号（充值）',
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
    colProps: { span: 8 },
    componentProps: {
      options: [
        {
          label: '1001-jx3微信',
          value: 'jx3_weixin',
          key: '1',
        },
        {
          label: '1002-jx3支付宝',
          value: 'jx3_alipay',
          key: '2',
        },
        {
          label: '1003-jx3京东',
          value: 'jx3_jd',
          key: '3',
        },
        {
          label: '1004-jx3支付宝(特惠活动)',
          value: 'jx3_ali_gift',
          key: '4',
        },
        {
          label: '1005-jx3微信(特惠活动)',
          value: 'jx3_wx_gift',
          key: '5',
        },
        {
          label: '1006-jx3微信扫码',
          value: 'jx3_weixin_qr',
          key: '6',
        },
        {
          label: '2001-tx腾讯（支付宝-JYM)',
          value: 'tx_jym',
          key: '7',
        },
        {
          label: '2002-tx腾讯（淘宝)',
          value: 'tx_tb',
          key: '8',
        },
        {
          label: '2003-tx腾讯（抖音)',
          value: 'tx_dy',
          key: '9',
        },
        {
          label: '2004-tx腾讯（京东)',
          value: 'tx_jd',
          key: '10',
        },
        {
          label: '2005-tx腾讯（支付宝小程序)',
          value: 'tx_zfb',
          key: '11',
        },
        {
          label: '3006-测试（支付宝)',
          value: 'sdo_alipay',
          key: '12',
        },
        {
          label: '3007-测试2（支付宝)',
          value: 'cy_alipay',
          key: '13',
        },
        {
          label: '3008-剑三预产（支付宝)',
          value: 'jx3_alipay_pre',
          key: '14',
        },
        {
          label: '3009-测试3（支付宝)',
          value: 'wme_alipay',
          key: '15',
        },
      ],
    },
  },
];

export const columnsWait: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 40,
    ifShow: false,
  },
  {
    title: '订单ID（付方）',
    dataIndex: 'orderId',
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
      if (status == 4) {
        color = '#10e9e2';
        text = '待进单';
      }
      if (status == 0) {
        color = '#ff0000';
        text = '支付失败';
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 120,
    customRender: ({ record }) => {
      let ct = ' - ';
      ct = dayjs(record.createTime).format('MM-DD HH:mm:ss');
      if (ct == 'Invalid Date') return ' - ';
      return ct;
    },
  },
  {
    title: '地区',
    dataIndex: 'payRegion',
    width: 120,
    // customRender: ({ record }) => {
    //   let region = record.payRegion;
    // },
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
    title: '平台订单ID',
    dataIndex: 'platformOid',
    width: 220,
  },
  {
    title: '订单ID（付方）',
    dataIndex: 'orderId',
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
      if (status == 5) {
        color = '#108ee9';
        text = '订单异常';
      }
      if (status == 4) {
        color = '#10e9e2';
        text = '待进单';
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
        text = '待取码';
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
    customRender: ({ record }) => {
      let ct = ' - ';
      ct = dayjs(record.createTime).format('MM-DD HH:mm:ss');
      if (ct == 'Invalid Date') return ' - ';
      return ct;
    },
  },
  {
    title: '取码时间',
    dataIndex: 'asyncTime',
    width: 120,
    customRender: ({ record }) => {
      let ct = ' - ';
      ct = dayjs(record.asyncTime).format('MM-DD HH:mm:ss');
      if (ct == 'Invalid Date') return ' - ';
      return ct;
    },
  },
  {
    title: '回调时间',
    dataIndex: 'callTime',
    width: 120,
    customRender: ({ record }) => {
      let ct = ' - ';
      ct = dayjs(record.callTime).format('MM-DD HH:mm:ss');
      if (ct == 'Invalid Date') return ' - ';
      return ct;
    },
  },
  {
    title: '地区',
    dataIndex: 'payRegion',
    width: 120,
    // customRender: ({ record }) => {
    //   let region = record.payRegion;
    // },
  },
  {
    title: 'IP',
    dataIndex: 'payIp',
    width: 120,
    // customRender: ({ record }) => {
    //   let region = record.payRegion;
    // },
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
