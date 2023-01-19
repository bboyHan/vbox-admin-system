import { BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */

export type CodeSalesParams = {
  id?: string;
  name?: string;
};

export type CodeSalesPageParams = {
  id?: string;
  name?: string;
};

export interface CodeSalesItem {
  id: string;
  region: string;
  status: number;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type CodeSalesListGetResultModel = BasicFetchResult<CodeSalesItem>;
