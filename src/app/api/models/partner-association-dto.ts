/* tslint:disable */
import { LocationDto } from './location-dto';
import { ContactDto } from './contact-dto';
import { PartnerDto } from './partner-dto';

/**
 * Partner with it's associations
 */
export interface PartnerAssociationDto {
  _type: string;
  alternateLocations?: Array<LocationDto>;
  contacts?: Array<ContactDto>;
  partner?: PartnerDto;
  partnerSegmentIds?: Array<number>;
  primaryLocation?: LocationDto;
}
