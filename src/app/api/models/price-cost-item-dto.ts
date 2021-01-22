/* tslint:disable */
import { AccountingTypeDto } from './accounting-type-dto';
import { MoneyDto } from './money-dto';
import { SimpleUserDto } from './simple-user-dto';
import { DiscountDto } from './discount-dto';

/**
 * Prices and cost items grouped by accounting type
 */
export interface PriceCostItemDto {
  _type: string;
  accountingType?: AccountingTypeDto;
  costLocal?: MoneyDto;
  costLocalCreatedBy?: SimpleUserDto;
  costLocalExternalId?: string;
  costLocalValidFrom?: string;
  costTotal?: MoneyDto;
  priceAggregated?: MoneyDto;
  priceLocal?: DiscountDto;
  priceLocalCreatedBy?: SimpleUserDto;
  priceLocalExternalId?: string;
  priceLocalValidFrom?: string;
  priceTotal?: MoneyDto;
}
