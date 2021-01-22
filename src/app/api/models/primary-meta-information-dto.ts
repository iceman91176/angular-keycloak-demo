/* tslint:disable */
import { ChildProductItemDto } from './child-product-item-dto';
import { ParentProductItemDto } from './parent-product-item-dto';

/**
 * Base class for storing meta information of primary attribute spreadsheet<br> model
 */
export interface PrimaryMetaInformationDto {
  _type: string;
  childProductItems?: Array<ChildProductItemDto>;
  parentProductItem?: ParentProductItemDto;
}
