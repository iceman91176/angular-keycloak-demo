/* tslint:disable */
import { PriceCostItemDto } from './price-cost-item-dto';
import { DiscountItemDto } from './discount-item-dto';

/**
 * Part of instance data for updating prices in Primary Attribute Spreadsheet<br> Model
 */
export interface ParentAttributeEnumValueDto {
  _type: string;
  errors?: Array<string>;
  parentAttributeDefId?: number;
  parentAttributeValue?: string;
  priceCostItems?: Array<PriceCostItemDto>;
  prices?: Array<DiscountItemDto>;
}
