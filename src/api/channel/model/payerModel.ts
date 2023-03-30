import { BasicFetchResult } from '/@/api/model/baseModel';

export type PAOverviewItem = {
  paccount?: string;
  premark?: string;
  cChannelId?: string;
  countOrder?: number;
  countPayed?: number;
  countOrderYesterday: number;
  countPayedYesterday: number;
  countOrderToday?: number;
  countPayedToday: number;
  sumPayed?: number;
  sumPayedYesterday: number;
  sumPayedToday: number;
};

export type PAOverviewListModel = BasicFetchResult<PAOverviewItem>;
