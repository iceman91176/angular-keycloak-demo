/* tslint:disable */
import { AttributeScopeDto } from './attribute-scope-dto';
import { CustomPropertiesDto } from './custom-properties-dto';
import { MultiLingualStringDto } from './multi-lingual-string-dto';

/**
 * AttributeDef DTO
 */
export interface AttributeDefDto {
  _type: string;
  attributeScope: AttributeScopeDto;
  changeable: boolean;
  customProperties?: CustomPropertiesDto;
  description?: MultiLingualStringDto;
  displayName: MultiLingualStringDto;
  enduserVisible: boolean;
  functionalType: 'FUNCTIONAL' | 'FUNCTIONALLOCAL' | 'NONFUNCTIONAL';
  id?: number;
  inheritable: boolean;
  instantiate: boolean;
  name: string;
  originAsTemplateAttributeDef: boolean;
  position: number;
  priceable: boolean;
  primaryAttribute: boolean;
  readonly: boolean;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
