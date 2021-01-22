/* tslint:disable */
import { QueryPageResultDto } from './query-page-result-dto';
import { ProductItemDto } from './product-item-dto';
export interface ProductItemQueryPageResultDto extends QueryPageResultDto{
  _type: string;
  pageItems?: Array<ProductItemDto>;
}
