/* tslint:disable */
import { BulkStatusItemDto } from './bulk-status-item-dto';

/**
 * Status DTO for bulk operations
 */
export interface BulkStatusDto {
  _type: string;
  bulkOperationOk: boolean;
  numFailed: number;
  numOk: number;
  results?: Array<BulkStatusItemDto>;
}
