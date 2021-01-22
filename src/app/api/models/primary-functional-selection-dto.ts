/* tslint:disable */
import { SelectedDecimalValueDto } from './selected-decimal-value-dto';
import { SelectedEnumValueDto } from './selected-enum-value-dto';

/**
 * Key entity class for specifying a single entry in the Primary Attribute<br> Spreadsheet Model
 */
export interface PrimaryFunctionalSelectionDto {
  _type: string;
  childAssociationId?: number;
  childAttributeDefId?: number;
  childProductItemId?: number;
  errors?: Array<string>;
  parentAttributeDefId?: number;
  parentAttributeValue?: string;
  selectedDecimalValue?: SelectedDecimalValueDto;
  selectedEnumValues?: Array<SelectedEnumValueDto>;
}
