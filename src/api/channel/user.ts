import { defHttp } from '/@/utils/http/axios';
import { GetVboxUserInfoModel } from '/@/api/channel/model/userModel';

enum Api {
  GetVboxUserInfo = '/channel/vboxUser',
  GetVboxUserOrderNum = '/channel/vboxUser/view/orderNum',
  GetVboxUserOrderSum = '/channel/vboxUser/view/orderSum',
}

export function getVboxUserInfo() {
  return defHttp.get<GetVboxUserInfoModel>(
    { url: Api.GetVboxUserInfo },
    { errorMessageMode: 'none' },
  );
}
export function getVboxUserOrderNum() {
  return defHttp.get({ url: Api.GetVboxUserOrderNum }, { errorMessageMode: 'none' });
}
export function getVboxUserOrderSum() {
  return defHttp.get({ url: Api.GetVboxUserOrderSum }, { errorMessageMode: 'none' });
}
