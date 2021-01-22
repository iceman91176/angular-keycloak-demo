/* tslint:disable */

/**
 * Specifies a field that a search result is to be sorted by.
 */
export interface SortSpecificationDto {
  _type: string;
  descending: boolean;
  fieldName?: string;
}
