/* tslint:disable */
import { SimpleUserDto } from './simple-user-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';
import { ForeignRefPropertyDto } from './foreign-ref-property-dto';

/**
 * Defines a information about an object in an external system.<br><br> Foreign references are not bound to a status and may be changed at any<br> time.<br><br> <br><br> They may be linked to one or more of the following objects:<br> <ul><br> <li>BusinessCapability</li><br> <li>BusinessServices</li><br> <li>Contracts</li><br> <li>ConfigurationItemDef</li><br> <li>Partners</li><br> <li>ProductItems</li><br> <li>ServiceItems</li><br> <li>Offers</li><br> <li>UnderpinningContracts</li><br> <li>WorkPlans</li><br> </ul>
 */
export interface ForeignRefDto {
  _type: string;

  /**
   * Date at which this foreign reference was created.
   */
  createdAt: string;

  /**
   * User which created this foreign reference.
   */
  createdBy?: SimpleUserDto;
  displayName: MultiLingualStringDto;

  /**
   * The external reference of this foreign reference
   */
  externalRef: ExternalRefDto;
  id?: number;

  /**
   * Set to true if this foreign reference shall be editable by non<br>         technical users with the permission to edit foreign references. False<br>         if this foreign reference may be only edited by an external system<br>         using a technical user. (May only be set on creation and not be<br>         modified afterwards)
   */
  manuallyEditable: boolean;

  /**
   * The properties of this foreign references consisting of arbitrarily<br>         name value pairs.
   */
  properties?: Array<ForeignRefPropertyDto>;

  /**
   * Tenant to which this foreign reference belongs.
   */
  tenantId: number;

  /**
   * Arbitrarily type of this foreign reference e.g. to mark this<br>         combination of contained properties.
   */
  type: string;

  /**
   * Date at which this foreign reference was updated the last time.
   */
  updatedAt?: string;

  /**
   * User which updated this foreign reference the last time.
   */
  updatedBy?: SimpleUserDto;

  /**
   * Technical User which updated this foreign reference the last time.
   */
  updatedByTechUser?: SimpleUserDto;

  /**
   * Date at which this foreign reference was updated the last time by<br>         technical user.
   */
  updatedByTechUserAt?: string;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
