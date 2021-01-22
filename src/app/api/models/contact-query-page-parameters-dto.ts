/* tslint:disable */
import { QueryPageParametersDto } from './query-page-parameters-dto';
import { ContactDataSelectorDto } from './contact-data-selector-dto';
export interface ContactQueryPageParametersDto extends QueryPageParametersDto{
  _type: string;

  /**
   * (Optional) Defines which fields should be included in the response
   */
  dataSelector?: ContactDataSelectorDto;
}
