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
  ChannelAccountListGetResultModel,
  CountChannelPreListGetResultModel,
} from '/@/api/channel/model/channelModel';
import { UploadFileParams } from '/#/axios';

enum Api {
  UploadChannelPre = '/channel/pre/upload',
  OperationChannelShop = '/channel/shop',
  BatchCreateChannelShop = '/channel/shop/batch',
  OperationManageChannelShop = '/channel/shop/remark',
  OperationMultiChannelShop = '/channel/shop/multi/remark',
  OperationMultiTreeChannelShop = '/channel/shop/multi/tree/remark',
  OperationChannelPre = '/channel/pre',
  BatchCreateChannelPre = '/channel/pre/batch',
  BatchCreateChannelPreAcList = '/channel/pre/batch/acList',
  OperationChannelAddress = '/channel/shop/address',
  CountChannelPreList = '/channel/pre/unUsedCount',
  ClearChannelPre = '/channel/pre/clear',
  GetChannelPreAccount = '/channel/pre/account',
  GetChannelPreTypes = '/channel/pre/types',
  GetChannelShopTypes = '/channel/shop/types',
  OperationGateway = '/channel/gateway',
  OperateCAccount = '/channel/CAccount',
  OperateTxCAccount = '/channel/txCAccount',
  OperateSdoCAccount = '/channel/sdoCAccount',
  SetChannelShopStatus = '/channel/shop/enable',
  SetMultiChannelShopStatus = '/channel/shop/multi/enable',
  SetCAccountStatus = '/channel/CAccount/enable',
}

export function uploadChannelPre(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) {
  return defHttp.uploadFile(
    {
      url: Api.UploadChannelPre,
      onUploadProgress,
    },
    params,
  );
}

export const getChannelPreAccount = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelAccountListGetResultModel>(
    { url: Api.GetChannelPreAccount, params },
    { errorMessageMode: 'message' },
  );

export const getChannelPreAccountByChannel = (params?: string) =>
  defHttp.get<ChannelAccountListGetResultModel>(
    { url: Api.GetChannelPreAccount + '/' + params },
    { errorMessageMode: 'message' },
  );

export const getChannelPreTypes = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelPreListGetResultModel>(
    { url: Api.GetChannelPreTypes, params },
    { errorMessageMode: 'message' },
  );

export const getChannelShopTypes = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>(
    { url: Api.GetChannelShopTypes, params },
    { errorMessageMode: 'message' },
  );

export const getChannelShopList = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>(
    { url: Api.OperationChannelShop, params },
    { errorMessageMode: 'message' },
  );

export const getManageChannelShopList = (shopRemark?: string) =>
  defHttp.get<ChannelShopListGetResultModel>(
    { url: Api.OperationManageChannelShop, params: { shopRemark } },
    { errorMessageMode: 'message' },
  );

export const getMultiChannelShopList = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>(
    { url: Api.OperationMultiChannelShop, params },
    { errorMessageMode: 'message' },
  );

export const getMultiTreeChannelShopList = (params?: ChannelShopPageParams) =>
  defHttp.get<ChannelShopListGetResultModel>(
    { url: Api.OperationMultiTreeChannelShop, params },
    { errorMessageMode: 'message' },
  );

export const getChannelPreList = (params?: ChannelPrePageParams) =>
  defHttp.get<ChannelPreListGetResultModel>(
    { url: Api.OperationChannelPre, params },
    { errorMessageMode: 'message' },
  );

export const countChannelPreList = (params?: ChannelPrePageParams) =>
  defHttp.get<CountChannelPreListGetResultModel>(
    { url: Api.CountChannelPreList, params },
    { errorMessageMode: 'message' },
  );

export const createChannelShop = (params?: ChannelShopParams) =>
  defHttp.post({ url: Api.OperationChannelShop, params }, { errorMessageMode: 'message' });

export const BatchCreateChannelShop = (params?: any) =>
  defHttp.post({ url: Api.BatchCreateChannelShop, params }, { errorMessageMode: 'message' });

export const createChannelPre = (params?: ChannelPreParams) =>
  defHttp.post({ url: Api.OperationChannelPre, params }, { errorMessageMode: 'message' });

export const batchCreateChannelPre = (params?: ChannelPreParams) =>
  defHttp.post({ url: Api.BatchCreateChannelPre, params }, { errorMessageMode: 'message' });

export const batchCreateChannelPreAcList = (params?: ChannelPreParams) =>
  defHttp.post({ url: Api.BatchCreateChannelPreAcList, params }, { errorMessageMode: 'message' });

export const updateChannelShop = (params: ChannelShopParams) =>
  defHttp.put({ url: Api.OperationChannelShop, params }, { errorMessageMode: 'message' });

export const updateChannelPre = (params: ChannelPreParams) =>
  defHttp.put({ url: Api.OperationChannelPre, params }, { errorMessageMode: 'message' });

export const updateShopAddress = (id: number, address: string) =>
  defHttp.put(
    { url: Api.OperationChannelAddress, params: { id, address } },
    { errorMessageMode: 'message' },
  );

export const setMultiChannelShopStatus = (shopRemark: string, status: number) =>
  defHttp.put(
    { url: Api.SetMultiChannelShopStatus, params: { shopRemark, status } },
    { errorMessageMode: 'message' },
  );

export const setChannelShopStatus = (id: number, status: number) =>
  defHttp.put(
    { url: Api.SetChannelShopStatus, params: { id, status } },
    { errorMessageMode: 'message' },
  );

export const deleteChannelShop = (id: number) =>
  defHttp.delete({ url: Api.OperationChannelShop + '/' + id }, { errorMessageMode: 'message' });

export const deleteChannelShopByShopRemark = (shopRemark: string) =>
  defHttp.delete(
    { url: Api.OperationChannelShop + '/mark/' + shopRemark },
    { errorMessageMode: 'message' },
  );

export const deleteChannelPre = (id: number) =>
  defHttp.delete({ url: Api.OperationChannelPre + '/' + id }, { errorMessageMode: 'message' });

export const getGatewayList = (params?: GatewayPageParams) =>
  defHttp.get<GatewayListGetResultModel>(
    { url: Api.OperationGateway, params },
    { errorMessageMode: 'message' },
  );

export const getCAccountListByPage = (params?: CAccountPageParams) =>
  defHttp.get<CAccountListGetResultModel>(
    { url: Api.OperateCAccount, params },
    { errorMessageMode: 'message' },
  );

export const deleteCAccount = (id: number) =>
  defHttp.delete({ url: Api.OperateCAccount + '/' + id });

export const deleteChannelPreByACID = (acid: string) =>
  defHttp.delete({ url: Api.ClearChannelPre + '/' + acid });

export const createCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateCAccount, params }, { errorMessageMode: 'message' });

export const createTxCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateTxCAccount, params }, { errorMessageMode: 'message' });
export const createSdoCAccount = (params?: CAccountParams) =>
  defHttp.post({ url: Api.OperateSdoCAccount, params }, { errorMessageMode: 'message' });

export const setCAccountStatus = (id: number, status: string) =>
  defHttp.put(
    { url: Api.SetCAccountStatus, params: { id, status } },
    { errorMessageMode: 'message' },
  );

export const updateCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateCAccount, params }, { errorMessageMode: 'message' });

export const updateTxCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateTxCAccount, params }, { errorMessageMode: 'message' });
export const updateSdoCAccount = (params: CAccountParam) =>
  defHttp.put({ url: Api.OperateSdoCAccount, params }, { errorMessageMode: 'message' });
