/* tslint:disable */

/**
 * Defines RemarkHistory DTO
 */
export interface RemarkHistoryDto {
  _type: string;
  id?: number;

  /**
   * The number of remarks in the history
   */
  remarkCount: number;

  /**
   * 'true' if this remarks can not be modified
   */
  sealed: boolean;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
