/* tslint:disable */

/**
 * Represents a tenant
 */
export interface TenantDto {
  _type: string;
  currency: string;
  id?: number;
  lastStatusChangeDate: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
