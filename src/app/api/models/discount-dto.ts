/* tslint:disable */

/**
 * Defines a discount DTO
 */
export interface DiscountDto {
  _type: string;
  id?: number;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
