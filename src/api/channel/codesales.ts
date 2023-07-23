import { defHttp } from '/@/utils/http/axios';
import {
  CodeAnalysisParams,
  CodeCreateSubParams,
  CodeProdParams,
  CodeVerifyParams,
  QueryOrderParams,
  QuerySaleParams, SaleRechargeParams,
} from '/@/api/channel/model/codeSalesModel';

enum Api {
  getCap = '/code/cap',
  Analysis = '/code/analysis',
  VerifyCaptcha = '/code/verify',
  ProdCode = '/code/prod',
  QueryOrder = '/code/order/query',
  CreateCodeSaleSub = '/sale/createSub',
  GetCodeSaleListByPage = '/sale/info',
  GetCodeSaleSimpleList = '/sale/simple/list',
  GetCodeSaleRechargeListByPage = '/sale/recharge',
  AddSaleRecharge = '/sale/recharge',
  GetCodeSaleOverview = '/sale/overview',
  GetSaleCAccountListByPage = '/sale/cAccount',
}

export const getCap = () => defHttp.get<any>({ url: Api.getCap });

export const analysis = (params?: CodeAnalysisParams) =>
  defHttp.post({ url: Api.Analysis, params });

export const verifyCaptcha = (params?: CodeVerifyParams) =>
  defHttp.post({ url: Api.VerifyCaptcha, params });

export const prodCode = (params?: CodeProdParams) => defHttp.post({ url: Api.ProdCode, params });
export const queryOrder = (params?: QueryOrderParams) =>
  defHttp.post({ url: Api.QueryOrder, params });

// 我的码商
export const getSaleListByPage = (params?: QuerySaleParams) =>
  defHttp.get({ url: Api.GetCodeSaleListByPage, params });
// 我的码商简单列表
export const getSaleSimpleList = (params?: QuerySaleParams) =>
  defHttp.get({ url: Api.GetCodeSaleSimpleList, params });
// 充值积分
export const addSaleRecharge = (params: SaleRechargeParams) =>
  defHttp.post({ url: Api.AddSaleRecharge, params });

// 我的码商积分
export const getSaleRechargeListByPage = (params?: QuerySaleParams) =>
  defHttp.get({ url: Api.GetCodeSaleRechargeListByPage, params }, { errorMessageMode: 'message' });

// 码商看板
export const getCodeSaleOverview = (params?: QuerySaleParams) =>
  defHttp.get({ url: Api.GetCodeSaleOverview, params }, { errorMessageMode: 'message' });

// 码商所有帐号
export const getSaleCAccountListByPage = (params?: QuerySaleParams) =>
  defHttp.get({ url: Api.GetSaleCAccountListByPage, params }, { errorMessageMode: 'message' });

// 添加码商
export const createSaleSub = (params?: CodeCreateSubParams) =>
  defHttp.post({ url: Api.CreateCodeSaleSub, params }, { errorMessageMode: 'message' });
