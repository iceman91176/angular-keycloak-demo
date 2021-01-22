/* tslint:disable */
import { DynamicEnumDefaultDto } from './dynamic-enum-default-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';

/**
 * Represents a DynamicEnum
 */
export interface DynamicEnumDto {
  _type: string;

  /**
   * A default value is only filled when the by findAll and findByName functions<br> on dynamicEnum application service and if it's a default value.<br><br> It's valid only for tenant aware dynamicEnums
   */
  defaultValue?: DynamicEnumDefaultDto;
  displayName?: MultiLingualStringDto;
  id?: number;
  name?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
