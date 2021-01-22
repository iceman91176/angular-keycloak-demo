/* tslint:disable */
import { ExternalRefDto } from './external-ref-dto';

/**
 * Represents only the basic data of a partner.<br><br> A partner can be a customer, a supplier or an internal provider.<br>
 */
export interface SimplePartnerDto {
  _type: string;

  /**
   * 'true' if the partner has the customer role
   */
  customer: boolean;

  /**
   * The customer number if the partner is a customer.
   */
  customerNumber?: string;

  /**
   * The partner's external reference
   */
  externalRef?: ExternalRefDto;
  id?: number;

  /**
   * 'true' if the partner has the internal provider role
   */
  internalProvider: boolean;

  /**
   * The internal provider number if the partner is an internal provider.
   */
  internalProviderNumber?: string;

  /**
   * The partner's name
   */
  name?: string;

  /**
   * 'true' if the partner has the supplier role
   */
  supplier: boolean;

  /**
   * The supplier number if the partner is a supplier.
   */
  supplierNumber?: string;
}
