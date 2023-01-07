import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

const productDescList = [
  {
    url: 'http://img-qn-2.51miz.com/preview/element/00/01/15/59/E-1155939-E2705300.jpg',
    title: '标题1',
    p: '这是一段介绍',
    index: '1',
  },
  {
    url: 'https://p6.itc.cn/images01/20210505/1d309f0b7e7f4a8399e927386cf0d935.jpeg',
    title: '标题2',
    p: '这是一段介绍',
    index: '2',
  },
  {
    url: 'https://img.1ppt.com/uploads/allimg/1910/1_191017221143_1.jpg',
    title: '标题3',
    p: '这是一段介绍',
    index: '3',
  },
  {
    url: 'https://hbimg.b0.upaiyun.com/f1517c8c321d342570202cfb5903e9e4d88529d517cb8-m9VJOn_fw658',
    title: '标题4',
    p: '这是一段介绍',
    index: '4',
  },
];

export default [
  {
    url: '/basic-api/getProductDescList',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      // const checkUser = createFakeUserList().find((item) => item.token === token);
      // if (!checkUser) {
      //   return resultError('Invalid token!');
      // }
      // const codeList = fakeCodeList[checkUser.userId];

      return resultSuccess(productDescList);
    },
  },
] as MockMethod[];
