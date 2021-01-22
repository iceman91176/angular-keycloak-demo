/* tslint:disable */
import { QueryPageResultDto } from './query-page-result-dto';
import { LocationDto } from './location-dto';
export interface LocationQueryPageResultDto extends QueryPageResultDto{
  _type: string;
  pageItems?: Array<LocationDto>;
}
