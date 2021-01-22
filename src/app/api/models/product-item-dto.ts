/* tslint:disable */
import { AttachmentFileDto } from './attachment-file-dto';
import { AttributeDefAssociationDto } from './attribute-def-association-dto';
import { AttributeDefDto } from './attribute-def-dto';
import { BusinessCapabilityDto } from './business-capability-dto';
import { ProductCatalogInfoDto } from './product-catalog-info-dto';
import { SimpleUserDto } from './simple-user-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';
import { ForeignLinkUrlDto } from './foreign-link-url-dto';
import { ForeignRefDto } from './foreign-ref-dto';
import { ProductItemStatisticDto } from './product-item-statistic-dto';
import { RemarkHistoryDto } from './remark-history-dto';
import { ProductRevisionDto } from './product-revision-dto';

/**
 * A product item dto
 */
export interface ProductItemDto {
  _type: string;
  attachmentFile?: AttachmentFileDto;

  /**
   * AttributeDefAssociationDtos for retrieval, ignored on updates
   */
  attributeDefAssociations?: Array<AttributeDefAssociationDto>;
  attributeDefs?: Array<AttributeDefDto>;
  businessCapabilities?: Array<BusinessCapabilityDto>;
  catalogInfo?: ProductCatalogInfoDto;
  createdAt?: string;
  createdBy?: SimpleUserDto;
  customId?: string;
  customProperties?: CustomPropertiesDto;
  derivedLicensedContent: boolean;
  description?: MultiLingualStringDto;
  displayName?: MultiLingualStringDto;
  externalRef?: ExternalRefDto;
  foreignLinks?: Array<ForeignLinkUrlDto>;
  foreignRefs?: Array<ForeignRefDto>;
  id?: number;
  licenseKey?: string;
  portfolioDisplayName?: MultiLingualStringDto;
  portfolioId?: number;
  productItemStatistic?: ProductItemStatisticDto;
  protectedLicensedContent: boolean;
  remarkHistory?: RemarkHistoryDto;
  revision?: ProductRevisionDto;
  sellableFrom?: string;
  sellableTo?: string;
  status?: 'PLANNED' | 'STAGED' | 'PRERELEASED' | 'RELEASED' | 'DEPRECATED' | 'DELETED';
  thumbnailImageUri?: string;

  /**
   * Date at which this product item was updated the last time.
   */
  updatedAt?: string;

  /**
   * User which updated this product item the last time.
   */
  updatedBy?: SimpleUserDto;

  /**
   * Technical User which updated this product item the last time.
   */
  updatedByTechUser?: SimpleUserDto;

  /**
   * Date at which this product item was technically updated the last<br>         time.
   */
  updatedByTechUserAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
