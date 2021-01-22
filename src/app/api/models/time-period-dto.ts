/* tslint:disable */

/**
 * Time period dto
 */
export interface TimePeriodDto {
  _type: string;
  length: number;
  unit: 'DAY' | 'MONTH' | 'YEAR';
}
