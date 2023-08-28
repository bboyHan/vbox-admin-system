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
  SysOrderWait = '/sys/order/wait',
  TestCallback = '/channel/order/callback/test/',
  CallbackOrder = '/chan/order/callback/confirm/',
  HandleOrder = '/channel/order/handle/',
  GetTxQuery = '/channel/txQuery/',
  GetAccQuery = '/channel/accQuery/',

  QueryAndCallback = '/channel/order/queryAndCallback/',
  TestCreateOrder = '/channel/order/create/test/',
}

export const getPAccountList = () =>
  defHttp.get<PAccountListGetResultModel>(
    { url: Api.OperationPAccount },
    { errorMessageMode: 'message' },
  );

export const createPAccount = (params: PAccountParam) =>
  defHttp.post({ url: Api.OperationPAccount, params }, { errorMessageMode: 'message' });

export const updatePAccount = (id: string, params: PAccountParam) =>
  defHttp.put({ url: Api.OperationPAccount + '/' + id, params }, { errorMessageMode: 'message' });

export const deletePAccount = (params: string) =>
  defHttp.delete({ url: Api.OperationPAccount, params }, { errorMessageMode: 'message' });

export const setPAccountStatus = (id: number, status: string) =>
  defHttp.put(
    { url: Api.SetPAccountStatus, params: { id, status } },
    { errorMessageMode: 'message' },
  );

export const createOrder = (params: OrderParam) =>
  defHttp.post({ url: Api.OperationOrder, params }, { errorMessageMode: 'message' });

export const getOrderList = (params: OrderPageParams) =>
  defHttp.get<OrderListGetResultModel>(
    { url: Api.SysOrder, params },
    { errorMessageMode: 'message' },
  );
export const getOrderListWait = (params: OrderPageParams) =>
  defHttp.get<OrderListGetResultModel>(
    { url: Api.SysOrderWait, params },
    { errorMessageMode: 'message' },
  );

export const testCallback = (id: string) =>
  defHttp.get({ url: Api.TestCallback + id }, { errorMessageMode: 'message' });

export const callbackOrder = (id: string, captcha: string) =>
  defHttp.get(
    {
      url: Api.CallbackOrder + id,
      params: {
        captcha: captcha,
      },
    },
    { errorMessageMode: 'message' },
  );

export const handleOrder = (id: string) =>
  defHttp.get({ url: Api.HandleOrder + id }, { errorMessageMode: 'message' });

export const getTxQuery = (id: string) =>
  defHttp.get({ url: Api.GetTxQuery + id }, { errorMessageMode: 'message' });

export const getAccQuery = (id: string) =>
  defHttp.get({ url: Api.GetAccQuery + id }, { errorMessageMode: 'message' });

export const queryAndCallback = (id: string) =>
  defHttp.get({ url: Api.QueryAndCallback + id }, { errorMessageMode: 'message' });
export const testCreateOrder = (
  num: number,
  channel: string,
  acid?: string,
  pr?: string,
  payIp?: string,
  area?: string,
) =>
  defHttp.get(
    {
      url: Api.TestCreateOrder + num,
      params: {
        channel: channel,
        acid: acid,
        pr: pr,
        payIp: payIp,
        area: area,
      },
    },
    { errorMessageMode: 'message' },
  );

export const getOrderCode = (orderId: string) =>
  defHttp.get(
    { url: Api.OperationOrder + '/code/' + orderId, timeout: 10000 },
    { errorMessageMode: 'message' },
  );

export const testOrderPay = (orderId: string) =>
  defHttp.get(
    {
      url: Api.TestOrderPay,
      params: {
        orderId: orderId,
      },
    },
    { errorMessageMode: 'message' },
  );

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
