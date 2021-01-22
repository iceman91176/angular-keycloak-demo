/* tslint:disable */
import { AccountingTypeDto } from './accounting-type-dto';
import { SimpleUserDto } from './simple-user-dto';
import { DiscountDto } from './discount-dto';
export interface DiscountItemDto {
  _type: string;
  accountingType: AccountingTypeDto;
  createdBy?: SimpleUserDto;
  discount: DiscountDto;
  externalId?: string;
  id?: number;
  validFrom?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
