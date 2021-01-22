/* tslint:disable */
import { AttachmentFileDto } from './attachment-file-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { SimplePartnerDto } from './simple-partner-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';
import { ProductPortfolioDto } from './product-portfolio-dto';
import { RemarkHistoryDto } from './remark-history-dto';

/**
 * CustomerProductCatalog DTO
 */
export interface CustomerProductCatalogDto {
  _type: string;
  active: boolean;
  attachmentFile: AttachmentFileDto;
  customProperties?: CustomPropertiesDto;
  customer: SimplePartnerDto;
  description?: MultiLingualStringDto;
  displayName: MultiLingualStringDto;
  externalRef: ExternalRefDto;
  id?: number;
  productPortfolio: ProductPortfolioDto;
  remarkHistory: RemarkHistoryDto;
  thumbnailImageUri?: string;
  updatedAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
