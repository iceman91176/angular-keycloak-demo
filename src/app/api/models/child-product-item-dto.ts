/* tslint:disable */
import { ChildAttributeDefDto } from './child-attribute-def-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';

/**
 * Part of Primary Attribute Spreadsheet Model
 */
export interface ChildProductItemDto {
  _type: string;
  childAssociationId?: number;
  childAttributeDefs?: Array<ChildAttributeDefDto>;
  childRoleDisplayName?: MultiLingualStringDto;
  description?: MultiLingualStringDto;
  displayName?: MultiLingualStringDto;
  entityTypeName?: string;
  position: number;
  productItemId?: number;
  staticRelation: boolean;
  thumbnailImageUri?: string;
}
