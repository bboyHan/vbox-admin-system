import { defHttp } from '/@/utils/http/axios';
import { RegionListGetResultModel, RegionParams } from '/@/api/channel/modal/channelModel';

enum Api {
  RegionList = '/channel/getRegionList',
}

export const getRegionList = (params: RegionParams) =>
  defHttp.get<RegionListGetResultModel>({ url: Api.RegionList, params });
