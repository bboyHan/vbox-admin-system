import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const channel: AppRouteModule = {
  path: '/channel',
  name: 'Channel',
  component: LAYOUT,
  redirect: '/channel/resource',
  meta: {
    orderNo: 1,
    icon: 'ion:settings-outline',
    title: t('routes.channel.channel.management'),
  },
  children: [
    {
      path: 'resource',
      name: 'ChannelManagement',
      meta: {
        title: t('routes.channel.channel.list'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/channel/resource/index.vue'),
    },
    {
      path: 'codeAccount',
      name: 'CodeAccountManagement',
      meta: {
        title: t('routes.channel.channel.account'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/channel/account/index.vue'),
    },
  ],
};

export default channel;
