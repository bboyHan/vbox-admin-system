import { defHttp } from '/@/utils/http/axios';
import {
  GatewayListGetResultModel,
  GatewayPageParams,
  CAccountParam,
  CAccountPageParams,
  CAccountListGetResultModel,
  CAccountParams,
  ChannelPrePageParams,
  ChannelShopPageParams,
  ChannelPreListGetResultModel,
  ChannelShopListGetResultModel,
  ChannelPreParams,
  ChannelShopParams,
  ChannelAccountListGetResultModel, CountChannelPreListGetResultModel,
} from '/@/api/channel/model/channelModel';

enum Api {
  OperationChannelShop = '/channel/shop',
  OperationChannelPre = '/channel/pre',
  CountChannelPreList = '/channel/pre/unUsedCount',
  GetChannelPreAccount = '/channel/pre/account',
  GetChannelPreTypes = '/channel/pre/types',
  GetChannelShopTypes = '/channel/shop/types',
  OperationGateway = '/channel/gateway',
  OperateCAccount = '/channel/CAccount',
  OperateTxCAccount = '/channel/txCAccount',
  OperateSdoCAccount = '/channel/sdoCAccount',
  SetChannelShopStatus = '/channel/shop/enable',
  SetCAccountStatus = '/channel/CAccount/enable',
}

export const getChannelPreAccount = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelAccountListGetResultModel>({ url: Api.GetChannelPreAccount, params }, { errorMessageMode: 'message' });

export const getChannelPreTypes = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelPreListGetResultModel>({ url: Api.GetChannelPreTypes, params }, { errorMessageMode: 'message' });

export const getChannelShopTypes = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>({ url: Api.GetChannelShopTypes, params }, { errorMessageMode: 'message' });

export const getChannelShopList = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>({ url: Api.OperationChannelShop, params }, { errorMessageMode: 'message' });

export const getChannelPreList = (params?: ChannelPrePageParams) =>
  defHttp.get<ChannelPreListGetResultModel>({ url: Api.OperationChannelPre, params }, { errorMessageMode: 'message' });

export const countChannelPreList = (params?: ChannelPrePageParams) =>
  defHttp.get<CountChannelPreListGetResultModel>(
    { url: Api.CountChannelPreList, params },
    { errorMessageMode: 'message' },
  );

export const createChannelShop = (params?: ChannelShopParams) =>
  defHttp.post({ url: Api.OperationChannelShop, params }, { errorMessageMode: 'message' });

export const createChannelPre = (params?: ChannelPreParams) =>
  defHttp.post({ url: Api.OperationChannelPre, params }, { errorMessageMode: 'message' });

export const updateChannelShop = (params: ChannelShopParams) =>
  defHttp.put({ url: Api.OperationChannelShop, params }, { errorMessageMode: 'message' });

export const updateChannelPre = (params: ChannelPreParams) =>
  defHttp.put({ url: Api.OperationChannelPre, params }, { errorMessageMode: 'message' });

export const setChannelShopStatus = (id: number, status: number) =>
  defHttp.put({ url: Api.SetChannelShopStatus, params: { id, status } }, { errorMessageMode: 'message' });

export const deleteChannelShop = (id: number) =>
  defHttp.delete({ url: Api.OperationChannelShop + '/' + id }, { errorMessageMode: 'message' });

export const deleteChannelPre = (id: number) =>
  defHttp.delete({ url: Api.OperationChannelPre + '/' + id }, { errorMessageMode: 'message' });

export const getGatewayList = (params?: GatewayPageParams) =>
  defHttp.get<GatewayListGetResultModel>({ url: Api.OperationGateway, params }, { errorMessageMode: 'message' });

export const getCAccountListByPage = (params?: CAccountPageParams) =>
  defHttp.get<CAccountListGetResultModel>({ url: Api.OperateCAccount, params }, { errorMessageMode: 'message' });

export const deleteCAccount = (id: number) =>
  defHttp.delete({ url: Api.OperateCAccount + '/' + id });
export const createCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateCAccount, params }, { errorMessageMode: 'message' });

export const createTxCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateTxCAccount, params }, { errorMessageMode: 'message' });
export const createSdoCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateSdoCAccount, params }, { errorMessageMode: 'message' });

export const setCAccountStatus = (id: number, status: string) =>
  defHttp.put({ url: Api.SetCAccountStatus, params: { id, status } }, { errorMessageMode: 'message' });

export const updateCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateCAccount, params }, { errorMessageMode: 'message' });

export const updateTxCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateTxCAccount, params }, { errorMessageMode: 'message' });
export const updateSdoCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateSdoCAccount, params }, { errorMessageMode: 'message' });
