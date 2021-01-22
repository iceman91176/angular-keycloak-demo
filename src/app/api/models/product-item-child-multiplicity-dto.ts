/* tslint:disable */
import { CardinalityDto } from './cardinality-dto';

/**
 * Entity class that contains all child multiplicities in the Primary Attribute<br> Spreadsheet Model for one single parent product item
 */
export interface ProductItemChildMultiplicityDto {
  _type: string;
  cardinality?: CardinalityDto;
  childAssociationId?: number;
  childProductItemId?: number;
  errors?: Array<string>;
  multiplicity: number;
  parentAttributeDefId?: number;
  parentAttributeValue?: string;
}
