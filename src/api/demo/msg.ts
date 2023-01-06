import { defHttp } from '/@/utils/http/axios';
import { MsgListGetResultModel, MsgPageParams } from './model/msgModel';

enum Api {
  MSG_LIST = '/message/getMsgList',
}

/**
 * @description: Get msg list value
 */
export const getMsgList = (params: MsgPageParams) =>
  defHttp.get<MsgListGetResultModel>({
    url: Api.MSG_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
