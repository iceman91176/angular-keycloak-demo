/* tslint:disable */
import { TenantDto } from './tenant-dto';

/**
 * ProductInventory DTO
 */
export interface ProductInventoryDto {
  _type: string;
  id?: number;
  tenant?: TenantDto;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
