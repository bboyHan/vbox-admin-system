import { defHttp } from '/@/utils/http/axios';
import {
  GatewayListGetResultModel,
  GatewayPageParams,
  CAccountParam,
  CAccountPageParams,
  CAccountListGetResultModel,
  CAccountParams,
} from '/@/api/channel/model/channelModel';

enum Api {
  OperationGateway = '/channel/gateway',
  OperateCAccount = '/channel/CAccount',
  SetCAccountStatus = '/channel/CAccount/enable',
}

export const getGatewayList = (params?: GatewayPageParams) =>
  defHttp.get<GatewayListGetResultModel>({ url: Api.OperationGateway, params });

export const getCAccountListByPage = (params?: CAccountPageParams) =>
  defHttp.get<CAccountListGetResultModel>({ url: Api.OperateCAccount, params });

export const deleteCAccount = (id: number) =>
  defHttp.delete({ url: Api.OperateCAccount + '/' + id });
export const createCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateCAccount, params });

export const setCAccountStatus = (id: number, status: string) =>
  defHttp.put({ url: Api.SetCAccountStatus, params: { id, status } });

export const updateCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateCAccount, params });
