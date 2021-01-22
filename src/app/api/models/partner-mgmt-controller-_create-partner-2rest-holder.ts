/* tslint:disable */
import { LocationDto } from './location-dto';
import { PartnerDataSelectorDto } from './partner-data-selector-dto';
import { PartnerDto } from './partner-dto';
export interface PartnerMgmtController_CreatePartner2RestHolder {
  alternateLocations?: Array<LocationDto>;
  dataSelector?: PartnerDataSelectorDto;
  partner: PartnerDto;
  partnerSegmentIds?: Array<number>;
  primaryLocation: LocationDto;
}
