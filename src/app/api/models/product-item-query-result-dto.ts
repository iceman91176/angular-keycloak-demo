/* tslint:disable */
import { ProductItemDto } from './product-item-dto';
export interface ProductItemQueryResultDto {
  _type: string;
  done: boolean;
  productItems?: Array<ProductItemDto>;
  queryLocator?: string;
}
