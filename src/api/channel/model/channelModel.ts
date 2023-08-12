import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type ChannelShopPageParams = BasicPageParams & ChannelShopParams;

export type ChannelShopParams = {
  id?: string;
  channel?: string;
  shopRemark?: string;
  money?: number;
  status?: number;
};

export type ChannelPrePageParams = BasicPageParams & ChannelPreParams;

export type ChannelPreParams = {
  id?: string;
  channel?: string;
  platOid?: string;
  platParam?: string;
  address?: string;
  money?: number;
  status?: number;
};

export type GatewayPageParams = BasicPageParams & GatewayParams;

export type GatewayParams = {
  id?: string;
  c_channel_id?: string;
};

export interface ChannelShopListItem {
  id: string;
  uid: string;
  channel: string;
  address: string;
  shopRemark: string;
  money: number;
  status: number;
  createTime: string;
}

export interface CountChannelPreListItem {
  id: string;
  status: string;
  count: number;
  acAccount: string;
  acid: string;
}

export interface ChannelPreListItem {
  id: string;
  uid: string;
  channel: string;
  address: string;
  platOid: string;
  platParam: string;
  money: number;
  status: number;
  createTime: string;
}

export interface GatewayListItem {
  id: string;
  cid: string;
  c_game: string;
  c_game_name: string;
  c_channel: string;
  c_gateway: string;
  c_gateway_name: string;
  s_recharge_type: string;
}

export type CAccountPageParams = {
  id?: string;
  name?: string;
};

export interface CAccountItem {
  acRemark: any;
  id: string;
  acid: string;
  acAccount: string;
  status: number;
  count: number;
  createTime: string;
}

export type CAccountParam = {
  acid?: string;
  cid?: string;
  acAccount?: string;
  acRemark?: string;
  min?: number;
  max?: number;
  ck?: string;
  dailyLimit?: number;
  totalLimit?: number;
  payType?: number;
  payDesc?: string;
};

export type CAccountParams = {
  id?: string;
  name?: string;
};

export type CAccountListGetResultModel = BasicFetchResult<CAccountItem>;

/**
 * @description: Request list return value
 */
export type ChannelAccountListGetResultModel = CAccountItem[];
export type ChannelShopListGetResultModel = ChannelShopListItem[];
export type ChannelPreListGetResultModel = ChannelPreListItem[];
export type CountChannelPreListGetResultModel = CountChannelPreListItem[];
export type GatewayListGetResultModel = GatewayListItem[];
