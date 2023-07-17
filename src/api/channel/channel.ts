import { defHttp } from '/@/utils/http/axios';
import {
  GatewayListGetResultModel,
  GatewayPageParams,
  CAccountParam,
  CAccountPageParams,
  CAccountListGetResultModel,
  CAccountParams,
  ChannelShopPageParams,
  ChannelShopListGetResultModel,
  ChannelShopParams,
} from '/@/api/channel/model/channelModel';

enum Api {
  OperationChannelShop = '/channel/shop',
  GetChannelShopTypes = '/channel/shop/types',
  OperationGateway = '/channel/gateway',
  OperateCAccount = '/channel/CAccount',
  OperateTxCAccount = '/channel/txCAccount',
  SetChannelShopStatus = '/channel/shop/enable',
  SetCAccountStatus = '/channel/CAccount/enable',
}

export const getChannelShopTypes = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>({ url: Api.GetChannelShopTypes, params });

export const getChannelShopList = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>({ url: Api.OperationChannelShop, params });

export const createChannelShop = (params?: ChannelShopParams) =>
  defHttp.post({ url: Api.OperationChannelShop, params });

export const updateChannelShop = (params: ChannelShopParams) =>
  defHttp.put({ url: Api.OperationChannelShop, params });

export const setChannelShopStatus = (id: number, status: number) =>
  defHttp.put({ url: Api.SetChannelShopStatus, params: { id, status } });

export const deleteChannelShop = (id: number) =>
  defHttp.delete({ url: Api.OperationChannelShop + '/' + id });

export const getGatewayList = (params?: GatewayPageParams) =>
  defHttp.get<GatewayListGetResultModel>({ url: Api.OperationGateway, params });

export const getCAccountListByPage = (params?: CAccountPageParams) =>
  defHttp.get<CAccountListGetResultModel>({ url: Api.OperateCAccount, params });

export const deleteCAccount = (id: number) =>
  defHttp.delete({ url: Api.OperateCAccount + '/' + id });
export const createCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateCAccount, params });

export const createTxCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateTxCAccount, params });

export const setCAccountStatus = (id: number, status: string) =>
  defHttp.put({ url: Api.SetCAccountStatus, params: { id, status } });

export const updateCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateCAccount, params });

export const updateTxCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateTxCAccount, params });
