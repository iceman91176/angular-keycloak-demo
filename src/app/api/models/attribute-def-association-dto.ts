/* tslint:disable */
import { AttributeDefDto } from './attribute-def-dto';
import { AttributeTypeDto } from './attribute-type-dto';

/**
 * AttributeDef with associations DTO
 */
export interface AttributeDefAssociationDto {
  _type: string;
  attributeDef?: AttributeDefDto;
  attributeType?: AttributeTypeDto;
  attributeTypeName?: string;
  id?: number;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
