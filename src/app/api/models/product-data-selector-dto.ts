/* tslint:disable */
import { DataSelectorDto } from './data-selector-dto';
export interface ProductDataSelectorDto extends DataSelectorDto{
  _type: string;

  /**
   * If returned objects will contain business capabilities.
   */
  includeBusinessCapabilities: boolean;

  /**
   * If returned product items will contain information about the catalog<br>         the product item is contained in.
   */
  includeCatalogInfo: boolean;

  /**
   * If returned configuration item def will contain the URI for their<br>         thumbnail image. Only applies when loadConfigurationItemDefs is set.<br>         (ProductItemTreeDto.standardCiDefs.thumbnailImageUri and<br>         ProductItemTreeDto.steeredCiDefs.thumbnailImageUri)
   */
  includeCiDefThumbnail: boolean;

  /**
   * If returned product items will contain additional information about<br>         their configuration item defs (relevant for infrastructure components<br>         only).
   */
  includeConfigurationItemDefInfo: boolean;

  /**
   * If returned objects will contain their custom properties.
   */
  includeCustomProperties: boolean;

  /**
   * If returned product items will contain their foreign links.
   */
  includeForeignLinks: boolean;

  /**
   * If returned objects will contain foreign refs.<br>         (ProductItemDto.foreignRefs)
   */
  includeForeignRefs: boolean;

  /**
   * If returned objects will contain their functional attribute defs<br>         (including primary attribute defs). (ProductItemDto.attributeDefs<br>         with FunctionalType.FUNCTIONAL)
   */
  includeFunctionalAttributeDefs: boolean;

  /**
   * If returned objects will contain their non functional attribute defs.<br>         (ProductItemDto.attributeDefs with FunctionalType.NONFUNCTIONAL)
   */
  includeNonFunctionalAttributeDefs: boolean;

  /**
   * If returned objects will contain their primary attributes.<br>         (ProductItemDto.attributeDefs all where 'primary'=true)
   */
  includePrimaryAttributeDefs: boolean;

  /**
   * If returned product items will contain the URI for their thumbnail<br>         image.
   */
  includeProductThumbnail: boolean;

  /**
   * If returned product tree will contain configuration items defs.<br>         (ProductItemTreeDto.standardCiDefs and<br>         ProductItemTreeDto.steeredCiDefs)
   */
  loadConfigurationItemDefs: boolean;
}
