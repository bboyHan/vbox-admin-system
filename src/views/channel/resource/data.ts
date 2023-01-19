import { FormSchema } from '/@/components/Table';
import { getRegionList } from '/@/api/channel/channel';
// import { Alert } from 'ant-design-vue';
// import { h } from 'vue';
import JX3 from '/@/assets/images/jx3.jpg';
import QQ from '/@/assets/images/qq.jpg';

interface ChannelItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
  link: string;
}

export const channelItems: ChannelItem[] = [
  {
    title: '剑网3（微信端）',
    icon: JX3,
    color: '',
    desc: 'Build software better, together.',
    group: '开源社区',
    date: '2022-12-21',
    link: 'https://github.com/bboyHan/',
  },
  {
    title: '腾讯系',
    icon: QQ,
    color: '#3fb27f',
    desc: '渐进式 JavaScript 框架',
    group: 'Vue.js',
    date: '2022-12-21',
    link: 'https://cn.vuejs.org/',
  },
];

export const columns: FormSchema[] = [
  {
    field: 'userRemark',
    component: 'Input',
    label: '账户备注',
    helpMessage: ['账户备注, 便于商户自行区分账户'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的账户备注名',
    },
  },
  {
    field: 'limitDaily',
    component: 'InputNumber',
    label: '日限额',
    helpMessage: ['默认为0, 0则为不限制'],
    colProps: {
      span: 12,
    },
    defaultValue: '0',
  },
  {
    field: 'limitTotal',
    component: 'InputNumber',
    label: '总限额',
    helpMessage: ['默认为0, 0则为不限制'],
    colProps: {
      span: 12,
    },
    defaultValue: '0',
  },
  {
    field: 'min',
    component: 'InputNumber',
    label: '最小金额',
    colProps: {
      span: 12,
    },
    defaultValue: '0',
  },
  {
    field: 'max',
    component: 'InputNumber',
    label: '最大金额',
    colProps: {
      span: 12,
    },
    defaultValue: '999999',
  },
  {
    field: 'ck',
    component: 'InputTextArea',
    label: 'CK',
    helpMessage: ['请填写（WeGame）CK'],
    colProps: { span: 24 },
    componentProps: {
      placeholder: '请输入（WeGame）CK',
    },
  },
  {
    label: '选择大区',
    field: 'region',
    component: 'ApiSelect',
    componentProps: {
      api: getRegionList,
      labelField: 'region',
      valueField: 'id',
    },
    required: true,
    defaultValue: '0',
  },
  {
    field: 'payType',
    component: 'Select',
    label: '支付方式',
    helpMessage: ['选择支付方式（支付宝或微信）'],
    colProps: {
      span: 8,
    },
    componentProps: {
      options: [
        {
          label: '微信',
          value: 'wechat',
          key: '1',
        },
        // {
        //   label: '支付宝',
        //   value: 'ali',
        //   key: '2',
        // },
      ],
    },
  },
];
