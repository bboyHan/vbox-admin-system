/**
 * @description: Carousel Info interface return value
 */
export interface CarouselInfoModel {
  index: string;
  url: string;
  title: string;
  subTitle: string;
  p: string;
}

export interface CarouselListModel {
  result: CarouselInfoModel[];
}
