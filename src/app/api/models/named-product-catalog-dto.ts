/* tslint:disable */
import { AttachmentFileDto } from './attachment-file-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';
import { ProductPortfolioDto } from './product-portfolio-dto';
import { RemarkHistoryDto } from './remark-history-dto';

/**
 * NamedProductCatalog DTO
 */
export interface NamedProductCatalogDto {
  _type: string;
  active: boolean;
  attachmentFile: AttachmentFileDto;

  /**
   * When adding a product item to this catalog, any product variants<br>         associated with the product item are automatically added to the<br>         catalog as well.
   */
  autoAddProductVariants: boolean;
  description?: MultiLingualStringDto;
  displayName: MultiLingualStringDto;
  externalRef: ExternalRefDto;
  id?: number;
  productPortfolio: ProductPortfolioDto;
  remarkHistory: RemarkHistoryDto;
  sealed: boolean;
  thumbnailImageUri?: string;
  updatedAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
