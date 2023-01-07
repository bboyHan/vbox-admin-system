/**
 * @description: Carousel Info interface return value
 */
export interface ProductDescModel {
  index: string;
  url: string;
  title: string;
  p: string;
}

export interface ProductDescListModel {
  result: ProductDescModel[];
}
