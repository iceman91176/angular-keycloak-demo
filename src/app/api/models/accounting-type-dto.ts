/* tslint:disable */
import { TimePeriodDto } from './time-period-dto';
import { BaseQuantityDto } from './base-quantity-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';

/**
 * AccountingType dto
 */
export interface AccountingTypeDto {
  _type: string;
  accrualFrequency: 'ONE_TIME' | 'RECURRING';
  accrualTimePeriod?: TimePeriodDto;
  baseQuantity?: BaseQuantityDto;
  description?: MultiLingualStringDto;
  displayName: MultiLingualStringDto;
  id?: number;
  name: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
