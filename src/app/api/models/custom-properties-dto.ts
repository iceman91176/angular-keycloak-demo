/* tslint:disable */
import { CustomPropertyDto } from './custom-property-dto';

/**
 * Defines a CustomProperties DTO<br> <br> <p><br> The <tt>CustomPropertiesDto</tt> contains many <tt>transient</tt> methods.<br> These are used by the PDF datasheets to render custom properties.
 */
export interface CustomPropertiesDto {
  _type: string;
  id?: number;
  properties?: Array<CustomPropertyDto>;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
