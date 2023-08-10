import { BasicColumn } from '/@/components/Table';
import { setChannelShopStatus } from '/@/api/channel/channel';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
const channelMapping: Record<string, string> = {
  tx_tb: '淘宝',
  tx_dy: '抖音',
  tx_jd: '京东',
  tx_zfb: '支付宝小程序',
};
export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    // ifShow: false,
    width: 40,
  },
  {
    title: '通道',
    dataIndex: 'channel',
    customRender: ({ text }) => channelMapping[text] || text,
    width: 40,
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
    width: 120,
  },

  {
    title: '商铺备注',
    dataIndex: 'shopRemark',
    width: 80,
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
