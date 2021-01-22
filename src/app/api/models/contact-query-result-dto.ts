/* tslint:disable */
import { ContactDto } from './contact-dto';

/**
 * Class containing query result when getting contacts of a partner
 */
export interface ContactQueryResultDto {
  _type: string;
  contacts?: Array<ContactDto>;

  /**
   * If true there are no more contacts for that partner
   */
  done: boolean;
  queryLocator?: string;
}
