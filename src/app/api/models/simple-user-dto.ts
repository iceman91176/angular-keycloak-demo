/* tslint:disable */

/**
 * Represents a simple user that does not expose private user data
 */
export interface SimpleUserDto {
  _type: string;
  department?: string;
  firstname?: string;
  id?: number;
  lastname?: string;
  location?: string;
  middlename?: string;
  organization?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'LOCKED';

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
