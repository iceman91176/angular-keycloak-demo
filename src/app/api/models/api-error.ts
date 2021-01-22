/* tslint:disable */
export interface ApiError {
  _type: string;
  auditEventURI?: string;
  details?: string;
  errType?: string;
  localizedMessage?: string;
  message?: string;
  minorErrorCode?: string;
  uri?: string;
}
