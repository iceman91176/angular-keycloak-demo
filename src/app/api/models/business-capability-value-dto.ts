/* tslint:disable */
export interface BusinessCapabilityValueDto {
  _type: string;
  id?: number;
  name: string;
  value?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
