import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

const codeSalesList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 6; index++) {
    result.push({
      id: `${index}`,
      'min|1000-2000': '@cname()',
      region: '@cname()',
      'min|1': ['0', '20', '10'],
      'max|1': ['1000', '5000', '999999'],
      'balance|1': ['1000', '5000', '999999'],
      'charge|1': ['23.51', '5000.11', '999.01'],
      lastTime: '@time()',
      'status|1': ['normal', 'enable', 'disable'],
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/code/getCodeSalesList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, codeSalesList);
    },
  },
  {
    url: '/basic-api/code/codeSales',
    timeout: 100,
    method: 'post',
    response: () => {
      return resultSuccess(codeSalesList);
    },
  },
  {
    url: '/basic-api/code/codeSales',
    timeout: 100,
    method: 'delete',
    response: () => {
      return resultSuccess(codeSalesList);
    },
  },
  {
    url: '/basic-api/code/codeSales/status',
    timeout: 100,
    method: 'put',
    response: () => {
      return resultSuccess(codeSalesList);
    },
  },
] as MockMethod[];
