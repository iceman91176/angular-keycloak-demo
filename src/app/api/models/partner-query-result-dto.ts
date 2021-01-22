/* tslint:disable */
import { PartnerDto } from './partner-dto';
export interface PartnerQueryResultDto {
  _type: string;
  done: boolean;
  partners?: Array<PartnerDto>;
  queryLocator?: string;
}
