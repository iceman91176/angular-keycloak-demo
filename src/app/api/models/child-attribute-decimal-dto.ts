/* tslint:disable */
import { PriceCostItemDto } from './price-cost-item-dto';
import { MoneyItemDto } from './money-item-dto';

/**
 * Part of instance data for updating prices in Primary Attribute Spreadsheet<br> Model
 */
export interface ChildAttributeDecimalDto {
  _type: string;
  childAssociationId?: number;
  childAttributeDefId?: number;
  childProductItemId?: number;
  errors?: Array<string>;
  parentAttributeDefId?: number;
  parentAttributeValue?: string;
  priceCostItems?: Array<PriceCostItemDto>;
  prices?: Array<MoneyItemDto>;
}
