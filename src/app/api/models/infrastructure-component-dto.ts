/* tslint:disable */
import { ProductItemDto } from './product-item-dto';
import { ConfigurationItemDefInfoDto } from './configuration-item-def-info-dto';
export interface InfrastructureComponentDto extends ProductItemDto{
  _type: string;
  configurationItemDefInfo?: Array<ConfigurationItemDefInfoDto>;
}
