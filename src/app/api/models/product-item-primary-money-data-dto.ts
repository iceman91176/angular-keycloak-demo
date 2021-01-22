/* tslint:disable */
import { ChildAttributeDecimalDto } from './child-attribute-decimal-dto';
import { ChildAttributeEnumValueDto } from './child-attribute-enum-value-dto';
import { MoneyItemDto } from './money-item-dto';
import { ParentAttributeEnumValueDto } from './parent-attribute-enum-value-dto';

/**
 * Dto class that contains all overwritten price data for attributeEnumValues<br> used in the Primary Attribute Spreadsheet Model for one single product item
 */
export interface ProductItemPrimaryMoneyDataDto {
  _type: string;
  childAttributeDecimals?: Array<ChildAttributeDecimalDto>;
  childAttributeEnumValues?: Array<ChildAttributeEnumValueDto>;
  defaultPrices?: Array<MoneyItemDto>;
  moneyDataCorrect: boolean;
  parentAttributeEnumValues?: Array<ParentAttributeEnumValueDto>;
  parentProductItemId?: number;
}
