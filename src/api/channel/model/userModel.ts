export interface GetVboxUserInfoModel {
  // 用户id
  userId: string | number;
  // 用户名
  account: string;
  // 余额
  balance: number;
  todayOrderNum: number;
  yesterdayOrderNum: number;
  yesterdayProdOrderNum: number;
  yesterdayOrderSum: number;
  todayOrderSum: number;
  todayProdOrderNum: number;
  hourProdOrderNum: number;
  hourOrderSum: number;
  hourOrderNum: number;
  totalCostNum: number;
  totalCostSum: number;
  totalProdNum: number;
  // 用户等级
  userLevel: number;
  // 最近登录时间
  lastLoginTime?: string;
}
