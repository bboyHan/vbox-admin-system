import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const payer: AppRouteModule = {
  path: '/payer',
  name: 'Payer',
  component: LAYOUT,
  redirect: '/payer/resource',
  meta: {
    orderNo: 1,
    icon: 'ion:settings-outline',
    title: t('routes.channel.payer_management'),
  },
  children: [
    {
      path: 'resource',
      name: 'PayerManagement',
      meta: {
        title: t('routes.channel.payer_list'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/payer/account/index.vue'),
    },
  ],
};

export default payer;
