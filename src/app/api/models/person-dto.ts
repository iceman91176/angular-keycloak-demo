/* tslint:disable */
import { AttachmentFileDto } from './attachment-file-dto';
import { LocationDto } from './location-dto';
import { SimpleUserDto } from './simple-user-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { ExternalRefDto } from './external-ref-dto';

/**
 * Person DTO
 */
export interface PersonDto {
  _type: string;
  attachmentFile?: AttachmentFileDto;
  businessLocation?: LocationDto;
  businessPhone?: string;
  businessUnit?: string;
  createdAt?: string;
  createdBy?: SimpleUserDto;
  customProperties?: CustomPropertiesDto;
  department?: string;
  email?: string;
  externalRef?: ExternalRefDto;
  fax?: string;
  firstname?: string;
  gender?: 'MALE' | 'FEMALE' | 'UNKNOWN';
  id?: number;
  lastname?: string;
  middlename?: string;
  mobilePhone?: string;
  privateLocation?: LocationDto;
  privatePhone?: string;
  thumbnailImageUri?: string;

  /**
   * Date at which this person was updated the last time.
   */
  updatedAt?: string;

  /**
   * User which updated this person the last time.
   */
  updatedBy?: SimpleUserDto;

  /**
   * Technical User which updated this person the last time.
   */
  updatedByTechUser?: SimpleUserDto;

  /**
   * Date at which this person was technically updated the last time.
   */
  updatedByTechUserAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
