/* tslint:disable */
import { LocationDto } from './location-dto';
import { AttachmentFileDto } from './attachment-file-dto';
import { CountryDto } from './country-dto';
import { SimpleUserDto } from './simple-user-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { ExternalRefDto } from './external-ref-dto';
import { ForeignLinkUrlDto } from './foreign-link-url-dto';
import { ForeignRefDto } from './foreign-ref-dto';
import { PartnerSegmentDto } from './partner-segment-dto';
import { RemarkHistoryDto } from './remark-history-dto';

/**
 * Partner DTO<br><br> A partner can be a customer, a supplier or an internal provider.<br>
 */
export interface PartnerDto {
  _type: string;
  alternateLocations?: Array<LocationDto>;
  attachmentFile: AttachmentFileDto;
  companyLogoUri?: string;
  country?: CountryDto;
  createdAt: string;
  createdBy: SimpleUserDto;
  currency?: string;
  customProperties?: CustomPropertiesDto;
  customer: boolean;
  customerNumber?: string;
  externalRef: ExternalRefDto;
  foreignLinks?: Array<ForeignLinkUrlDto>;
  foreignRefs?: Array<ForeignRefDto>;
  id?: number;
  internalProvider: boolean;
  internalProviderNumber?: string;
  name: string;
  partnerSegments?: Array<PartnerSegmentDto>;
  primaryLocation: LocationDto;
  remarkHistory: RemarkHistoryDto;
  status: 'ACTIVE' | 'INACTIVE';
  supplier: boolean;
  supplierNumber?: string;

  /**
   * Date at which this partner was updated the last time.
   */
  updatedAt?: string;

  /**
   * User which updated this partner the last time.
   */
  updatedBy?: SimpleUserDto;

  /**
   * Technical User which updated this partner the last time.
   */
  updatedByTechUser?: SimpleUserDto;

  /**
   * Date at which this partner was technically updated the last time.
   */
  updatedByTechUserAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
