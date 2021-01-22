/* tslint:disable */
import { PersonDto } from './person-dto';
import { ContactTypeDto } from './contact-type-dto';
import { SimplePartnerDto } from './simple-partner-dto';
export interface ContactDto extends PersonDto{
  _type: string;
  contactType: ContactTypeDto;
  representingPartner: SimplePartnerDto;
  supportedContactTypes?: Array<ContactTypeDto>;
}
