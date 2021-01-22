/* tslint:disable */
import { OptionalInfoDto } from './optional-info-dto';
import { ConfigurationItemClassDto } from './configuration-item-class-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';
export interface ConfigurationItemDefInfoDto extends OptionalInfoDto{
  _type: string;
  configurationItemClass?: ConfigurationItemClassDto;
  description?: MultiLingualStringDto;
  displayName?: MultiLingualStringDto;
  external: boolean;
  id?: number;
  name?: string;
  preferred: boolean;
}
