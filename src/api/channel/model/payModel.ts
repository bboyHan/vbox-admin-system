import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type PAccountPageParams = BasicPageParams & PAccountParams;

export type OrderParam = {
  p_account?: string;
  p_order_id?: string;
  money?: number;
  notify?: string;
  pay_type: number;
  metadata: string;
  p_key?: string;
  sign: string;
};

export type PAccountParam = {
  p_remark?: string;
  status?: number;
};

export type PAccountParams = {
  id?: string;
  name?: string;
};

export type PAccountListItem = {
  id?: string;
  p_account?: string;
  p_remark?: string;
  pub?: string;
  secret?: string;
  status?: string;
  create_time?: string;
};

export type OrderListItem = {
  id?: string;
  orderId?: string;
  pAccount?: string;
  cost?: number;
  acRemark?: string;
  acAccount?: string;
  channel?: string;
  platformOid?: string;
  resourceUrl?: string;
  orderStatus?: number;
  callbackStatus?: number;
  codeUseStatus?: number;
  createTime?: string;
};

export type PAccountListGetResultModel = BasicFetchResult<PAccountListItem>;

export type OrderListGetResultModel = BasicFetchResult<OrderListItem>;
