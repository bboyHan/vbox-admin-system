import { defHttp } from '/@/utils/http/axios';
import {
  OrderListGetResultModel,
  OrderParam,
  PAccountListGetResultModel,
  PAccountParam,
} from '/@/api/channel/model/payModel';

enum Api {
  OperationPAccount = '/channel/pac',
  SetPAccountStatus = '/channel/pac/enable',
  OperationOrder = '/channel/order',
  SysOrder = '/sys/order',
  TestCallback = '/channel/order/callback/test/',
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

export const getOrderList = () => defHttp.get<OrderListGetResultModel>({ url: Api.SysOrder });

export const testCallback = (id: string) => defHttp.get({ url: Api.TestCallback + id });

export const testCreateOrder = (num: string) => defHttp.get({ url: Api.TestCreateOrder + num });

export const getOrderCode = (orderId: string) =>
  defHttp.get({ url: Api.OperationOrder + '/code/' + orderId });
