import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

const carouselList = [
  {
    url: 'http://pic.qiantucdn.com/images/banner/63ad61a14317f.jpg',
    title: '标题1',
    subTitle: '子标题1-1',
    p: '这是一段介绍',
    index: '1',
  },
  {
    url: 'http://pic.qiantucdn.com/images/banner/63aa99402a874.jpg',
    title: '标题2',
    subTitle: '子标题2-1',
    p: '这是一段介绍',
    index: '2',
  },
  {
    url: 'http://pic.qiantucdn.com/images/banner/63aac425c0e15.jpg',
    title: '标题3',
    subTitle: '子标题3-1',
    p: '这是一段介绍',
    index: '3',
  },
];

export default [
  {
    url: '/basic-api/getCarouselInfo',
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

      return resultSuccess(carouselList);
    },
  },
] as MockMethod[];
