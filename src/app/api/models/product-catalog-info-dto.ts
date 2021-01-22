/* tslint:disable */
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';
import { SimpleNamedProductCatalogDto } from './simple-named-product-catalog-dto';

/**
 * Contains information about the catalog a product item is attached to.<br> <br> <p><br> <b>Only Propositions and Products are connected to a catalog.</b><br> </p><br> <br> <p><br> The catalog display name is only filled when a customer catalog is used. The<br> standard catalog has no name.<br> </p><br> <p><br> The <tt>catalogId</tt> is always used. In case of standardCatalog is<br> <tt>true</tt> its the id of the standard catalog othewise its the id of the<br> customer catalog.<br> </p>
 */
export interface ProductCatalogInfoDto {
  _type: string;
  catalogDisplayName?: MultiLingualStringDto;
  catalogExternalRef?: ExternalRefDto;
  catalogId?: number;
  namedCatalogs?: Array<SimpleNamedProductCatalogDto>;
  standardCatalog: boolean;
  updatedAt?: string;
}
