/* tslint:disable */
import { QueryPageParametersDto } from './query-page-parameters-dto';
import { ProductDataSelectorDto } from './product-data-selector-dto';
export interface ProductItemQueryPageParametersDto extends QueryPageParametersDto{
  _type: string;

  /**
   * (Optional) Defines which fields should be included in the response
   */
  dataSelector?: ProductDataSelectorDto;

  /**
   * Specifies the non-abstract product item type to run the search on.
   */
  productItemType?: 'ProductItem' | 'Proposition' | 'Product' | 'InfrastructureProduct' | 'ExternalServiceDef' | 'ProviderExternalServiceDef' | 'ConfiguredExternalServiceDef' | 'LinkedExternalServiceDef' | 'InfrastructureComponent';
}
