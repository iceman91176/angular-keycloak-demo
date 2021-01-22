/* tslint:disable */
import { SortSpecificationDto } from './sort-specification-dto';
export interface QueryPageParametersDto {

  /**
   * Zero-based index of the page. Page 0 always exists, but may be empty.
   */
  pageIndex?: number;

  /**
   * (Optional) Size of the page between 1 and the configured maximum.
   */
  pageSize?: number;

  /**
   * (Optional) A query. If null, then the result set is not restricted.
   */
  query?: string;

  /**
   * (Optional) Sort criteria, from highest priority to lowest priority.<br>         Defaults to ascending ordering by the ID field of the entity type.
   */
  sortBy?: Array<SortSpecificationDto>;

  /**
   * (Optional) Sort language (e.g. en_US to be used for internationalized<br>         fields like {@link MultiLingualStringDto}.
   */
  sortLanguage?: string;
}
