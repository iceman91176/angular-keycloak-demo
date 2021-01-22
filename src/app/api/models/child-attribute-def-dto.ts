/* tslint:disable */
import { CardinalityDto } from './cardinality-dto';
import { ChildDecimalValueDto } from './child-decimal-value-dto';
import { ChildEnumValueDto } from './child-enum-value-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';

/**
 * Part of Primary Attribute Spreadsheet Model
 */
export interface ChildAttributeDefDto {
  _type: string;
  attributeDefId?: number;
  attributeScopeId?: number;
  cardinality?: CardinalityDto;
  childDecimalValue?: ChildDecimalValueDto;
  childEnumValues?: Array<ChildEnumValueDto>;
  description?: MultiLingualStringDto;
  displayName?: MultiLingualStringDto;
  name?: string;
  originAsTemplateAttributeDef: boolean;
  position: number;
  primaryAttribute: boolean;
}
