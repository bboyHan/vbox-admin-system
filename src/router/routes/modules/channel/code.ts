import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const code: AppRouteModule = {
  path: '/code',
  name: 'Code',
  component: LAYOUT,
  redirect: '/code/self',
  meta: {
    orderNo: 2,
    icon: 'ion:settings-outline',
    title: t('routes.channel.code.management'),
  },
  children: [
    {
      path: 'self',
      name: 'CodeManagement',
      meta: {
        title: t('routes.channel.code.list'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/channel/code/index.vue'),
    },
  ],
};

export default code;
