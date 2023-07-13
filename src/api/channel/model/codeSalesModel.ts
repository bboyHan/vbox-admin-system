/**
 * @description: Request list interface parameters
 */
export type CodeCreateSubParams = {
  account?: string;
  pass?: string;
  status?: number;
  charge?: number;
  min?: number;
  max?: number;
};

export type CodeAnalysisParams = {
  lot_num?: string;
  imgs?: string;
  ques?: string[];
  pow_detail?: string;
  gct_path?: string;
  payload?: string;
  process_token?: string;
  captcha_type?: string;
};

export type CodeVerifyParams = {
  lot_number?: string;
  pow_detail?: string;
  payload?: string;
  process_token?: string;
  captcha_type?: string;
  w?: string;
};

export type CodeProdParams = {
  payload?: string;
  token?: string;
};

export type SaleRechargeParams = {
  recharge?: number;
  account?: string;
  balance?: number;
  uid?: string;
};

export type QueryOrderParams = {
  captcha_id?: string;
  captcha_output?: string;
  gen_time?: string;
  lot_number?: string;
  pass_token?: string;
};

export type QuerySaleParams = {
  saleAccount?: string;
  id?: string;
};
