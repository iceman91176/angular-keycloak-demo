/* tslint:disable */

/**
 * Contains statistic data for a product item
 */
export interface ProductItemStatisticDto {
  _type: string;

  /**
   * Returns the number of business services that are INSERVICE and refer to the<br> product item. Multiple occurrences of service items are only counted once per<br> business service.
   */
  instantiatedServiceItemCount: number;

  /**
   * Returns the number of revisions of product item with same name that are not<br> DELETED.
   */
  revisionCount: number;

  /**
   * Returns the number of product items / external service defs that refer to the<br> product item. Parent product items in status DELETED are not counted.
   */
  usedInProductTreeCount: number;
}
