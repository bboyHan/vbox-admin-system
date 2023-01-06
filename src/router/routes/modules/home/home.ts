import type { AppRouteModule } from '/@/router/types';

import { HOME_LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: HOME_LAYOUT,
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.home.header.home'),
  },
};

export default home;
