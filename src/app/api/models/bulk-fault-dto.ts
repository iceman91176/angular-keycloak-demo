/* tslint:disable */

/**
 * DTO for the error information of a bulk operation
 */
export interface BulkFaultDto {
  _type: string;
  errorMessage?: string;
  exceptionType?: string;
  localizedErrorMessage?: string;
  reasonCode?: string;
}
