/* tslint:disable */
import { ExternalServiceDefDto } from './external-service-def-dto';
import { PartnerDto } from './partner-dto';
import { UnderpinningContractDto } from './underpinning-contract-dto';
export interface ProviderExternalServiceDefDto extends ExternalServiceDefDto{
  _type: string;
  externalId?: string;
  provider: PartnerDto;
  serviceName?: string;
  systemName?: string;
  underpinningContract?: UnderpinningContractDto;
}
