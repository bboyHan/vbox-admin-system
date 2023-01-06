import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const msg: AppRouteModule = {
  path: '/message',
  name: 'Message',
  component: LAYOUT,
  redirect: '/message/publish',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.msg.msgCenter'),
  },
  children: [
    {
      path: 'publish',
      name: 'MsgManagement',
      component: () => import('/@/views/demo/system/message/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.msg.msgPublish'),
      },
    },
    {
      path: 'help',
      name: 'HelpManagement',
      component: () => import('/@/views/demo/system/helper/index.vue'),
      meta: {
        title: t('routes.msg.helperCenter'),
      },
    },
  ],
};

export default msg;
