/* tslint:disable */
import { DynamicEnumDto } from './dynamic-enum-dto';
export interface CountryDto extends DynamicEnumDto{
  _type: string;

  /**
   * A three-letter ISO-3166 country code
   */
  isoCode: string;
}
