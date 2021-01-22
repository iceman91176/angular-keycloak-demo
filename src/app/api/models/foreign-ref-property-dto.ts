/* tslint:disable */

/**
 * Defines one piece of information about an object in an external system to be<br> used in a ForeignRefDto.
 */
export interface ForeignRefPropertyDto {
  _type: string;

  /**
   * The name of this property.
   */
  name?: string;

  /**
   * The values of this property.
   */
  values?: Array<string>;
}
