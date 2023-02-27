import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type GatewayPageParams = BasicPageParams & GatewayParams;

export type GatewayParams = {
  id?: string;
  c_channel_id?: string;
};

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
  id: string;
  region: string;
  status: number;
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
export type GatewayListGetResultModel = GatewayListItem[];
