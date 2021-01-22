/* tslint:disable */
import { AttachmentFileDto } from './attachment-file-dto';
import { SimpleUserDto } from './simple-user-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { ForeignRefDto } from './foreign-ref-dto';

/**
 * UnderpinningContract DTO
 */
export interface UnderpinningContractDto {
  _type: string;
  attachmentFile: AttachmentFileDto;
  contractNr: string;
  createdAt?: string;
  createdBy?: SimpleUserDto;
  customProperties?: CustomPropertiesDto;
  foreignRefs?: Array<ForeignRefDto>;
  id?: number;
  remarks?: string;
  status: 'ACTIVE' | 'DEPRECATED';
  underpinningContractType: 'SUPPLIER' | 'CUSTOMER';

  /**
   * Date at which this underpinning contract was updated the last time.
   */
  updatedAt?: string;

  /**
   * User which updated this underpinning contract the last time.
   */
  updatedBy?: SimpleUserDto;

  /**
   * Technical User which updated this underpinning contract the last<br>         time.
   */
  updatedByTechUser?: SimpleUserDto;

  /**
   * Date at which this underpinning contract was technically updated the<br>         last time.
   */
  updatedByTechUserAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
