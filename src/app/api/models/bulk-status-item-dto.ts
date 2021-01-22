/* tslint:disable */
import { BulkFaultDto } from './bulk-fault-dto';

/**
 * DTO for the status of a bulk operation on a single object
 */
export interface BulkStatusItemDto {
  _type: string;
  additionalData?: {[key: string]: string};
  fault?: BulkFaultDto;
  objectId?: number;
}
