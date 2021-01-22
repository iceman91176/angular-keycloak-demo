/* tslint:disable */
import { AttachmentFileDto } from './attachment-file-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';

/**
 * ProductPortfolio DTO
 */
export interface ProductPortfolioDto {
  _type: string;
  annotation?: string;
  attachmentFile: AttachmentFileDto;
  customProperties?: CustomPropertiesDto;
  description?: MultiLingualStringDto;
  displayName: MultiLingualStringDto;
  externalRef: ExternalRefDto;
  id?: number;
  licenseIssuer?: string;
  licenseKey?: string;
  status: 'ACTIVE' | 'INACTIVE';
  thumbnailImageUri?: string;
  updatedAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
