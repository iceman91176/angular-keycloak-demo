/* tslint:disable */
import { QueryPageResultDto } from './query-page-result-dto';
import { PartnerDto } from './partner-dto';
export interface PartnerQueryPageResultDto extends QueryPageResultDto{
  _type: string;
  pageItems?: Array<PartnerDto>;
}
