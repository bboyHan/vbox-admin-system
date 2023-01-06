import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type MsgPageParams = BasicPageParams & MsgParams;

export type MsgParams = {
  id?: string;
  title?: string;
};

export interface MsgListItem {
  id: string;
  title: string;
  content: string;
  status: number;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type MsgListGetResultModel = BasicFetchResult<MsgListItem>;
