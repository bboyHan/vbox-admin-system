import { BasicColumn } from '/@/components/Table';
import { setChannelShopStatus } from '/@/api/channel/channel';
import { h } from 'vue';
import { Switch, Tooltip } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';

const channelMapping: Record<string, string> = {
  tx_tb: '腾讯(淘宝)',
  tx_dy: '腾讯(抖音)',
  tx_jd: '腾讯(京东)',
  tx_zfb: '腾讯(支付宝小程序)',
  tx_zfb_2: '腾讯(支付宝无溢价)',
};
export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    // ifShow: false,
    width: 30,
  },
  {
    title: '通道',
    dataIndex: 'channel',
    customRender: ({ text }) => channelMapping[text] || text,
    width: 60,
  },
  {
    title: '金额',
    dataIndex: 'money',
    width: 40,
  },
  {
    title: '商铺地址',
    dataIndex: 'address',
    edit: true,
    // editDynamicDisabled: true,
    width: 150,
    customRender: ({ text }) => {
      const fullAddress = text; // 获取完整的地址
      return h(Tooltip, { title: fullAddress }, () => text); // 使用Tooltip组件包裹地址文本，并设置title属性为完整的地址
      // return h(Tooltip, { title: fullAddress }, () =>
      //   h(Input.TextArea, {
      //     value: text,
      //     autoSize: { minRows: 3, maxRows: 6 }, // 设置自动换行和高度增加的条件
      //   }),
      // );
    },
  },
  {
    title: '商铺备注',
    dataIndex: 'shopRemark',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 80,
  },
  {
    title: '开关',
    dataIndex: 'status',
    width: 50,
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
          const newStatus = checked ? 1 : 0;
          const { createMessage } = useMessage();
          setChannelShopStatus(record.id, newStatus)
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
];
