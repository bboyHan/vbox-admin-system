import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const regionList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 6; index++) {
    result.push({
      id: `${index}`,
      region: '@cname()',
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
      return resultSuccess(regionList);
    },
  },
] as MockMethod[];
