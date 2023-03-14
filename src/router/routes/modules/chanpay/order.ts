import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const order: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/resource',
  meta: {
    orderNo: 1,
    icon: 'ion:settings-outline',
    title: t('routes.channel.order_management'),
  },
  children: [
    {
      path: 'resource',
      name: 'OrderManagement',
      meta: {
        title: t('routes.channel.order_list'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/order/resource/index.vue'),
    },
    {
      path: 'overview',
      name: 'OrderOverview',
      meta: {
        title: t('routes.channel.order_overview'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/order/overview/index.vue'),
    },
    {
      path: 'prod',
      name: 'OrderProd',
      meta: {
        title: t('routes.channel.order_prod'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/order/prod/index.vue'),
    },
  ],
};

export default order;
