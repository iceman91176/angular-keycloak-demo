/* tslint:disable */
import { CustomPropertyMultiValueDto } from './custom-property-multi-value-dto';
import { TaxonomyCustomPropertyDto } from './taxonomy-custom-property-dto';

/**
 * Defines a CustomProperty DTO
 */
export interface CustomPropertyDto {
  _type: string;
  displayName?: string;
  multiValue?: CustomPropertyMultiValueDto;
  name?: string;
  taxonomy?: TaxonomyCustomPropertyDto;
  type?: 'BOOLEAN' | 'INTEGER' | 'DECIMAL' | 'STRING' | 'STRING_CONSTRAINED' | 'STRING_MARKDOWN' | 'ENUMERATION' | 'TAXONOMY';
  value?: string;
  valueFormatted?: string;
}
