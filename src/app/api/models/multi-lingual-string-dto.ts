/* tslint:disable */

/**
 * Multilingual string DTO - A multi-lingual text
 */
export interface MultiLingualStringDto {
  _type: string;

  /**
   * The default text that best matches the caller's locale. This is an<br> output-only field. It cannot be set by the caller (it will be ignored).<br> Instead it is only derived from the map entries (based upon the locale chain)<br> when a multi-lingual string is returned to the caller.
   */
  defaultText?: string;

  /**
   * The localized texts
   */
  map?: {[key: string]: string};
}
