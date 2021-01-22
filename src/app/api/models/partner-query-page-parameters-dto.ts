/* tslint:disable */
import { QueryPageParametersDto } from './query-page-parameters-dto';
import { PartnerDataSelectorDto } from './partner-data-selector-dto';
export interface PartnerQueryPageParametersDto extends QueryPageParametersDto{
  _type: string;

  /**
   * (Optional) Defines which fields should be included in the response
   */
  dataSelector?: PartnerDataSelectorDto;
}
