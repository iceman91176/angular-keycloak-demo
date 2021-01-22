/* tslint:disable */
import { CustomerProductCatalogDto } from './customer-product-catalog-dto';
import { NamedProductCatalogDto } from './named-product-catalog-dto';
import { ProductPortfolioDto } from './product-portfolio-dto';
import { StandardProductCatalogDto } from './standard-product-catalog-dto';

/**
 * A product portfolio with associations DTO
 */
export interface ProductPortfolioAssociationDto {
  _type: string;
  customerProductCatalogs?: Array<CustomerProductCatalogDto>;
  namedProductCatalogs?: Array<NamedProductCatalogDto>;
  portfolio?: ProductPortfolioDto;
  standardProductCatalog?: StandardProductCatalogDto;
}
