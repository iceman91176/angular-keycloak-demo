/* tslint:disable */
import { QueryPageParametersDto } from './query-page-parameters-dto';
export interface AttributeDefQueryPageParametersDto extends QueryPageParametersDto{
  _type: string;

  /**
   * Whether to add calculated (total) prices and costs. Local prices and<br>         costs are always added. Defaults to <tt>true</tt>.
   */
  addPricesAndCosts?: boolean;
}
