import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {
  getChannelShopTypes,
  setMultiChannelShopStatus,
  getMultiTreeChannelShopList,
} from '/@/api/channel/channel';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { stringify } from 'crypto-js/enc-utf8';

export const shopBasicColumns: FormSchema[] = [
  {
    label: '商铺名称',
    field: 'shopRemark',
    component: 'Input',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
  },
  {
    label: '引导方式',
    field: 'channel',
    component: 'ApiSelect',
    componentProps: {
      api: getChannelShopTypes,
      labelField: 'cchannelName',
      valueField: 'cchannelId',
      immediate: false,
    },
    // required: true,
    colProps: {
      span: 24,
    },
    // rules: [{ required: true, trigger: 'blur' }],
  },
  {
    field: 'money',
    component: 'InputNumber',
    label: '设定金额',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
    show: false,
  },
  {
    label: '商铺地址',
    field: 'address',
    component: 'Input',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
    show: false,
  },
];

export const shopColumns: FormSchema[] = [
  {
    field: 'money',
    component: 'InputNumber',
    label: '设定金额',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
  },
  {
    label: '商铺地址',
    field: 'address',
    component: 'Input',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
  },
  {
    label: '商铺名称',
    field: 'shopRemark',
    component: 'Input',
    // helpMessage: ['积分充值, 最小为100的倍数'],
    colProps: {
      span: 24,
    },
    required: false,
  },
  {
    label: '引导方式',
    field: 'channel',
    component: 'ApiSelect',
    componentProps: {
      api: getChannelShopTypes,
      labelField: 'cchannelName',
      valueField: 'cchannelId',
      immediate: false,
    },
    // required: true,
    colProps: {
      span: 24,
    },
    // rules: [{ required: true, trigger: 'blur' }],
  },
];

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 50,
  },
  {
    title: '通道',
    dataIndex: 'channel',
    customRender: ({ text }) => channelMapping[text] || text,
    width: 50,
  },
  {
    title: '金额',
    dataIndex: 'money',
    width: 100,
  },
  // {
  //   title: '商铺地址',
  //   dataIndex: 'address',
  //   width: 120,
  // },
  {
    title: '商铺备注',
    dataIndex: 'shopRemark',
    width: 80,
  },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   width: 80,
  // },
  {
    title: '开关',
    dataIndex: 'status',
    width: 80,
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
          // debugger;
          record.pendingStatus = true;
          const newStatus = checked ? 1 : 0;
          const { createMessage } = useMessage();
          console.log('-->' + record.id + ':' + record.shopRemark + ':' + newStatus);
          setMultiChannelShopStatus(record.shopRemark, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改商铺状态`);
              // location.reload();
            })
            .catch(() => {
              createMessage.error('修改商铺状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '开启个数',
    dataIndex: 'openAndClose',
    width: 80,
    // customRender: ({ record }) => {
    //   const count = ref('');
    //   const { createMessage } = useMessage();
    //   watch(
    //     () => record.shopRemark,
    //     () => {
    //       fetchDataCount(record.shopRemark);
    //     },
    //   );

    //   const fetchDataCount = (shopRemark) => {
    //     // 调用接口获取数据条数
    //     // 这里假设调用的接口为getDataCount
    //     getOpenMarkDataCount(shopRemark)
    //       .then((response) => {
    //         count.value = response.data.count;
    //       })
    //       .catch(() => {
    //         createMessage.error('获取数据条数失败');
    //       });
    //   };

    //   return count;
    // },
  },
];
// enum Channel {
//   TX = 'tx',
//   CH1 = '1',
//   CH2 = '2',
//   CH3 = '3',
// }

// 创建一个映射对象
const channelMapping: Record<string, string> = {
  tx_tb: '淘宝',
  tx_dy: '抖音',
  tx_jd: '京东',
  tx_zfb: '支付宝小程序',
};
export const channelShopUpdColumn: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    dynamicDisabled: true,
    show: false,
    component: 'Input',
    span: 24,
  },
  {
    field: 'channel',
    label: '通道ID',
    dynamicDisabled: true,
    component: 'Input',
    show: false,
  },
  {
    field: 'shopRemark',
    component: 'Input',
    label: '商铺备注',
    dynamicDisabled: true,
    // helpMessage: ['商铺备注, 便于商户自行区分商铺'],
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入便于自行区别的商铺备注名',
    },
  },
  {
    field: 'money',
    component: 'InputNumber',
    label: '金额核定',
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '引导商铺地址的对应金额，务必核对正确',
    },
    dynamicDisabled: true,
  },
  {
    field: 'address',
    component: 'InputTextArea',
    label: '商铺地址',
    colProps: {
      span: 24,
    },
    componentProps: {
      placeholder: '请输入引导对应金额的商铺地址，务必核对金额与链接正确',
    },
  },
];

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 200,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    // {
    //   title: '编号',
    //   dataIndex: 'no',
    //   width: 150,
    //   sorter: true,
    //   defaultHidden: true,
    // },
    {
      title: '开始时间',
      width: 150,
      sorter: true,
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      width: 150,
      sorter: true,
      dataIndex: 'endTime',
    },
  ];
}

export function getTreeTableData() {
  return (() => {
    // const arr = [
    //   {
    //     id: 1,
    //     uid: 28,
    //     status: 1,
    //     channel: 'tx_zfb',
    //     shopRemark: '鼎信',
    //     money: '5-10-20-30-50-100',
    //     openAndClose: '已启用【6】个 , 共【6】个',
    //     children: [
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_zfb',
    //         shopRemark: '西藏福禄',
    //         money: '5-10-20-30-50-100',
    //         openAndClose: '已启用【0】个 , 共【6】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_zfb',
    //         shopRemark: '鼎信黄钻',
    //         money: '10-20-30-50-100',
    //         openAndClose: '已启用【0】个 , 共【5】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_zfb',
    //         shopRemark: '西藏福禄无溢价',
    //         money: '5-10-20-30-50-100',
    //         openAndClose: '已启用【0】个 , 共【6】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_zfb',
    //         shopRemark: '武汉福禄',
    //         money: '5-10-20-30-50-100',
    //         openAndClose: '已启用【0】个 , 共【6】个',
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     uid: 28,
    //     status: 1,
    //     channel: 'tx_tb',
    //     shopRemark: '蜀沃淘宝',
    //     money: '30-50-100-200-500',
    //     openAndClose: '已启用【5】个 , 共【5】个',
    //     children: null,
    //   },
    //   {
    //     id: 3,
    //     uid: 28,
    //     status: 1,
    //     channel: 'tx_dy',
    //     shopRemark: '快节奏',
    //     money: '30-100-200',
    //     openAndClose: '已启用【3】个 , 共【3】个',
    //     children: [
    //       {
    //         uid: 28,
    //         status: 1,
    //         channel: 'tx_dy',
    //         shopRemark: '好速度',
    //         money: '30-50-200',
    //         openAndClose: '已启用【3】个 , 共【3】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_dy',
    //         shopRemark: '续听',
    //         money: '30-50-100-200',
    //         openAndClose: '已启用【0】个 , 共【4】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 1,
    //         channel: 'tx_dy',
    //         shopRemark: '杭州龙诗',
    //         money: '50-100-200',
    //         openAndClose: '已启用【3】个 , 共【3】个',
    //       },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     uid: 28,
    //     status: 0,
    //     channel: 'tx_jd',
    //     shopRemark: '京东蜀沃',
    //     money: '30-50-100-200-300-500',
    //     openAndClose: '已启用【0】个 , 共【6】个',
    //     children: [
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_jd',
    //         shopRemark: '蜀沃京东',
    //         money: '30-50-100-200-300-500',
    //         openAndClose: '已启用【0】个 , 共【6】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_jd',
    //         shopRemark: '氪金京东',
    //         money: '30-50-100-200-500',
    //         openAndClose: '已启用【0】个 , 共【5】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_jd',
    //         shopRemark: '氪金网游',
    //         money: '50-100-200',
    //         openAndClose: '已启用【0】个 , 共【4】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_jd',
    //         shopRemark: '行走',
    //         money: '50-100-200-300',
    //         openAndClose: '已启用【0】个 , 共【4】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_jd',
    //         shopRemark: 'QQ旗舰店',
    //         money: '50-100-200-300-500',
    //         openAndClose: '已启用【0】个 , 共【7】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 0,
    //         channel: 'tx_jd',
    //         shopRemark: '黄钻贵族',
    //         money: '50-100-200-300-500',
    //         openAndClose: '已启用【0】个 , 共【14】个',
    //       },
    //       {
    //         uid: 28,
    //         status: 1,
    //         channel: 'tx_jd',
    //         shopRemark: '蓝箭京东',
    //         money: '30-50-100-200-300-500',
    //         openAndClose: '已启用【6】个 , 共【6】个',
    //       },
    //     ],
    //   },
    // ];
    // const arr: any[] = []; // 定义并赋初始值一个空数组
    // 调用 getMultiTreeChannelShopList 接口
    // return getMultiTreeChannelShopList()
    //   .then((response) => {
    //     // 处理接口返回的数据，并将其添加到 arr 数组中
    //     // console.log('==>' + JSON.stringify(response.items));
    //     const data: any = response.items;
    //     console.log('data ==>' + data);
    //     const arr: any[] = [];
    //     arr.push(...data);
    //     return arr;
    //   })
    //   .catch((error) => {
    //     console.error('Failed to fetch data:', error);
    //   });
    // console.log('=>' + arr);
    // console.log('===>' + JSON.stringify(arr));
    // return arr;
  })();
}
