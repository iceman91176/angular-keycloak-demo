/* tslint:disable */
import { QueryPageResultDto } from './query-page-result-dto';
import { ContactDto } from './contact-dto';
export interface ContactQueryPageResultDto extends QueryPageResultDto{
  _type: string;
  pageItems?: Array<ContactDto>;
}
