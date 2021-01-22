/* tslint:disable */
import { PriceCostItemDto } from './price-cost-item-dto';
import { DiscountItemDto } from './discount-item-dto';

/**
 * Part of instance data for updating prices in Primary Attribute Spreadsheet<br> Model
 */
export interface ChildAttributeEnumValueDto {
  _type: string;
  childAssociationId?: number;
  childAttributeDefId?: number;
  childAttributeValue?: string;
  childProductItemId?: number;
  errors?: Array<string>;
  parentAttributeDefId?: number;
  parentAttributeValue?: string;
  priceCostItems?: Array<PriceCostItemDto>;
  prices?: Array<DiscountItemDto>;
}
