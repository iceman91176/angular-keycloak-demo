/* tslint:disable */
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ChildAttributeDefDto } from './child-attribute-def-dto';
import { ParentAttributeDefDto } from './parent-attribute-def-dto';

/**
 * Part of Primary Attribute Spreadsheet Model
 */
export interface ParentProductItemDto {
  _type: string;
  displayName?: MultiLingualStringDto;
  locallyFunctionalAttributeDefs?: Array<ChildAttributeDefDto>;
  parentAttributeDefs?: Array<ParentAttributeDefDto>;
  productItemId?: number;
}
