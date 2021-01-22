/* tslint:disable */
import { CountryDto } from './country-dto';
import { SimpleUserDto } from './simple-user-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { ExternalRefDto } from './external-ref-dto';
import { SimplePartnerDto } from './simple-partner-dto';
import { RemarkHistoryDto } from './remark-history-dto';

/**
 * Represents a location used for creation
 */
export interface LocationDto {
  _type: string;
  address1: string;
  address2?: string;
  city: string;
  country?: CountryDto;
  createdAt: string;
  createdBy?: SimpleUserDto;
  customProperties?: CustomPropertiesDto;
  externalRef: ExternalRefDto;
  fax?: string;
  id?: number;
  name?: string;
  partner?: SimplePartnerDto;
  phone?: string;
  poBox?: string;
  remarkHistory: RemarkHistoryDto;
  state?: string;
  status: 'ACTIVE' | 'INACTIVE';

  /**
   * Date at which this location was updated the last time.
   */
  updatedAt?: string;

  /**
   * User which updated this location the last time.
   */
  updatedBy?: SimpleUserDto;

  /**
   * Technical User which updated this location the last time.
   */
  updatedByTechUser?: SimpleUserDto;

  /**
   * Date at which this location was technically updated the last time.
   */
  updatedByTechUserAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
  zipCode?: string;
}
