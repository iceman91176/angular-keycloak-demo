/* tslint:disable */
import { ProductItemDto } from './product-item-dto';
export interface RevisionNodeDto {
  _type: string;
  childRevisions?: Array<RevisionNodeDto>;
  productItem?: ProductItemDto;
}
