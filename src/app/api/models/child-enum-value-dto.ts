/* tslint:disable */
import { MultiLingualStringDto } from './multi-lingual-string-dto';

/**
 * Part of Primary Attribute Spreadsheet Model
 */
export interface ChildEnumValueDto {
  _type: string;
  defaultValue: boolean;
  description?: MultiLingualStringDto;
  displayValue?: MultiLingualStringDto;
  id?: number;
  position: number;
  value?: string;
}
