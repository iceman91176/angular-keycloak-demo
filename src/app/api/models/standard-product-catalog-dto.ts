/* tslint:disable */
import { AttachmentFileDto } from './attachment-file-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';

/**
 * StandardProductCatalog DTO
 */
export interface StandardProductCatalogDto {
  _type: string;
  attachmentFile: AttachmentFileDto;
  description?: MultiLingualStringDto;
  displayName: MultiLingualStringDto;
  externalRef: ExternalRefDto;
  id?: number;
  portfolioId?: number;
  updatedAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
