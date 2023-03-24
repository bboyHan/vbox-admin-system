import { defHttp } from '/@/utils/http/axios';
import {
  OrderListGetResultModel,
  OrderPageParams,
  OrderParam,
  PAccountListGetResultModel,
  PAccountParam,
} from '/@/api/channel/model/payModel';

enum Api {
  OperationPAccount = '/channel/pac',
  SetPAccountStatus = '/channel/pac/enable',
  OperationOrder = '/channel/order',
  TestOrderPay = '/code/test',
  SysOrder = '/sys/order',
  TestCallback = '/channel/order/callback/test/',
  HandleOrder = '/channel/order/handle/',

  QueryAndCallback = '/channel/order/queryAndCallback/',
  TestCreateOrder = '/channel/order/create/test/',
}

export const getPAccountList = () =>
  defHttp.get<PAccountListGetResultModel>({ url: Api.OperationPAccount });

export const createPAccount = (params: PAccountParam) =>
  defHttp.post({ url: Api.OperationPAccount, params });

export const updatePAccount = (id: string, params: PAccountParam) =>
  defHttp.put({ url: Api.OperationPAccount + '/' + id, params });

export const deletePAccount = (params: string) =>
  defHttp.delete({ url: Api.OperationPAccount, params });

export const setPAccountStatus = (id: number, status: string) =>
  defHttp.put({ url: Api.SetPAccountStatus, params: { id, status } });

export const createOrder = (params: OrderParam) =>
  defHttp.post({ url: Api.OperationOrder, params });

export const getOrderList = (params: OrderPageParams) =>
  defHttp.get<OrderListGetResultModel>({ url: Api.SysOrder, params });

export const testCallback = (id: string) => defHttp.get({ url: Api.TestCallback + id });

export const handleOrder = (id: string) => defHttp.get({ url: Api.HandleOrder + id });

export const queryAndCallback = (id: string) => defHttp.get({ url: Api.QueryAndCallback + id });
export const testCreateOrder = (
  num: number,
  channel: string,
  acid?: string,
  pr?: string,
  payIp?: string,
  area?: string,
) =>
  defHttp.get({
    url: Api.TestCreateOrder + num,
    params: {
      channel: channel,
      acid: acid,
      pr: pr,
      payIp: payIp,
      area: area,
    },
  });

export const getOrderCode = (orderId: string) =>
  defHttp.get(
    { url: Api.OperationOrder + '/code/' + orderId, timeout: 10000 },
    { errorMessageMode: 'none' },
  );

export const testOrderPay = (orderId: string) =>
  defHttp.get({
    url: Api.TestOrderPay,
    params: {
      orderId: orderId,
    },
  });

export const getOrderProdForWX = (url: string, params?: any) =>
  defHttp.post({
    headers: {
      Origin: 'https://m.xoyo.com',
      Referer: 'https://m.xoyo.com',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'com.seasun.gamemgr',
    },
    url: url,
    params: params,
    // transformRequest: [params => {
    //   let formData = new FormData()
    //   for(let key in params){
    //     formData.append(key, params[key])
    //   }
    //   return formData
    // }]
  });
