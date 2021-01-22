/* tslint:disable */
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ForeignRefDto } from './foreign-ref-dto';
import { BusinessCapabilityValueDto } from './business-capability-value-dto';
export interface BusinessCapabilityDto {
  _type: string;
  description?: MultiLingualStringDto;
  displayName: MultiLingualStringDto;
  foreignRefs?: Array<ForeignRefDto>;
  id?: number;
  name: string;
  values?: Array<BusinessCapabilityValueDto>;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
