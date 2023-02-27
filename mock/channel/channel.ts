import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const gatewayList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 6; index++) {
    result.push({
      id: `${index}`,
      gateway: '@cname()',
      gateway_name: '@cname()',
      'status|1': ['normal', 'enable', 'disable'],
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/channel/getRegionList',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(gatewayList);
    },
  },
] as MockMethod[];
