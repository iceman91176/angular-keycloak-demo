/* tslint:disable */
import { MultiLingualStringDto } from './multi-lingual-string-dto';

/**
 * Part of Primary Attribute Spreadsheet Model
 */
export interface ParentEnumValueDto {
  _type: string;
  defaultValue: boolean;
  description?: MultiLingualStringDto;
  displayName?: MultiLingualStringDto;
  id?: number;
  position: number;
  value?: string;
}
