import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type RegionPageParams = BasicPageParams & RegionParams;

export type RegionParams = {
  id?: string;
  region?: string;
};

export type CodeSalesParams = {
  id?: string;
  name?: string;
};

export type CodeSalesPageParams = {
  id?: string;
  name?: string;
};

export interface RegionListItem {
  id: string;
  region: string;
  status: number;
  createTime: string;
}

export interface CodeSalesItem {
  id: string;
  region: string;
  status: number;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type RegionListGetResultModel = BasicFetchResult<RegionListItem>;
