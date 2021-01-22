/* tslint:disable */
import { ProductItemDto } from './product-item-dto';
export interface ExternalServiceDefDto extends ProductItemDto{
  _type: string;
  configuredExternalServiceDef: boolean;
  linkedExternalServiceDef: boolean;
  providerExternalServiceDef: boolean;
}
