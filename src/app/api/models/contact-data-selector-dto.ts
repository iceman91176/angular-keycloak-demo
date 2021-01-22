/* tslint:disable */
import { DataSelectorDto } from './data-selector-dto';
export interface ContactDataSelectorDto extends DataSelectorDto{
  _type: string;

  /**
   * If returned objects will contain their custom properties.
   */
  includeCustomProperties: boolean;

  /**
   * If returned objects will contain their thumbnails.
   */
  includeThumbnail: boolean;
}
