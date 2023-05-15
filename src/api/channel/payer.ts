import { defHttp } from '/@/utils/http/axios';
import { PAOverviewListModel } from '/@/api/channel/model/payerModel';
import { PAccountPageParams } from '/@/api/channel/model/payModel';

enum Api {
  listPAccountOverview = '/channel/pac/overview',
}

export const listPAccountOverview = (params: PAccountPageParams) =>
  defHttp.get<PAOverviewListModel>({ url: Api.listPAccountOverview, params });
