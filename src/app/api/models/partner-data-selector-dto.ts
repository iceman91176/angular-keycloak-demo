/* tslint:disable */
import { DataSelectorDto } from './data-selector-dto';
export interface PartnerDataSelectorDto extends DataSelectorDto{
  _type: string;

  /**
   * If returned objects will contain their alternate locations.
   */
  includeAlternateLocations: boolean;

  /**
   * If returned objects will contain their custom properties.
   */
  includeCustomProperties: boolean;

  /**
   * If returned objects will contain their foreign links.
   */
  includeForeignLinks: boolean;

  /**
   * If returned objects will contain their foreign references.
   */
  includeForeignRefs: boolean;
}
