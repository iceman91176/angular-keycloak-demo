/* tslint:disable */
import { AccountingTypeDto } from './accounting-type-dto';
import { SimpleUserDto } from './simple-user-dto';
import { MoneyDto } from './money-dto';

/**
 * MoneyItem (price or costs) DTO
 */
export interface MoneyItemDto {
  _type: string;
  accountingType: AccountingTypeDto;
  accountingTypeName?: string;
  createdBy?: SimpleUserDto;
  externalId?: string;
  id?: number;
  money: MoneyDto;
  validFrom?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
