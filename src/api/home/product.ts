import { defHttp } from '/@/utils/http/axios';
import { ProductDescModel } from '/@/api/home/model/productModel';

enum Api {
  ListProductDesc = '/getProductDescList',
}

/**
 * @description: getCarouselInfo
 */
export function getProductDescList() {
  return defHttp.get<ProductDescModel[]>(
    { url: Api.ListProductDesc },
    { errorMessageMode: 'none' },
  );
}
