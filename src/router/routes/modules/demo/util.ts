import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const util: AppRouteModule = {
  path: '/util',
  name: 'Util',
  component: LAYOUT,
  redirect: '/util/picture',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.util.utilCenter'),
  },
  children: [
    {
      path: 'picture',
      name: 'Picture',
      component: () => import('/@/views/demo/system/picture/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.util.picture'),
      },
    },
    {
      path: 'video',
      name: 'Video',
      component: () => import('/@/views/demo/system/video/index.vue'),
      meta: {
        title: t('routes.util.video'),
      },
    },
    {
      path: 'document',
      name: 'Document',
      component: () => import('/@/views/demo/system/document/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.util.document'),
      },
    },
  ],
};

export default util;
