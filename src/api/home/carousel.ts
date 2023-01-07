import { defHttp } from '/@/utils/http/axios';
import { CarouselInfoModel } from '/@/api/home/model/carouselModel';

enum Api {
  GetCarouselInfo = '/getCarouselInfo',
}

/**
 * @description: getCarouselInfo
 */
export function getCarouselInfo() {
  return defHttp.get<CarouselInfoModel[]>(
    { url: Api.GetCarouselInfo },
    { errorMessageMode: 'none' },
  );
}
