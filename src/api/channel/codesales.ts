import { defHttp } from '/@/utils/http/axios';
import {
  CodeSalesListGetResultModel,
  CodeSalesPageParams,
  CodeSalesParams,
} from '/@/api/channel/modal/codeSalesModel';

enum Api {
  CodeSalesList = '/code/getCodeSalesList',
  OperateRole = '/code/codeSales',
  SetSalesStatus = '/code/codeSales/status',
}

export const getCodeSalesListByPage = (params?: CodeSalesPageParams) =>
  defHttp.get<CodeSalesListGetResultModel>({ url: Api.CodeSalesList, params });

export const deleteCodeSales = (id: number) => defHttp.delete({ url: Api.OperateRole, params: id });

export const createCodeSales = (params?: CodeSalesParams) =>
  defHttp.post({ url: Api.OperateRole, params });

export const setCodeSalesStatus = (id: number, status: string) =>
  defHttp.put({ url: Api.SetSalesStatus, params: { id, status } });
