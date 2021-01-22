/* tslint:disable */
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ParentEnumValueDto } from './parent-enum-value-dto';

/**
 * Part of Primary Attribute Spreadsheet Model
 */
export interface ParentAttributeDefDto {
  _type: string;
  attributeDefId?: number;
  displayName?: MultiLingualStringDto;
  name?: string;
  parentEnumValues?: Array<ParentEnumValueDto>;
  position: number;
}
