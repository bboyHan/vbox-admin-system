import { defHttp } from '/@/utils/http/axios';
import { PAOverviewListModel } from '/@/api/channel/model/payerModel';

enum Api {
  listPAccountOverview = '/channel/pac/overview',
}

export const listPAccountOverview = () =>
  defHttp.get<PAOverviewListModel>({ url: Api.listPAccountOverview });
