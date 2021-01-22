/* tslint:disable */
import { PrimaryFunctionalSelectionDto } from './primary-functional-selection-dto';
import { ProductItemChildMultiplicityDto } from './product-item-child-multiplicity-dto';
import { ProductItemChildRelationDto } from './product-item-child-relation-dto';

/**
 * Key entity class that contains all mapping data in the Primary Attribute<br> Spreadsheet Model for one single product item
 */
export interface ProductItemPrimaryMappingDataDto {
  _type: string;
  dataSaved: boolean;
  mappingDataCorrect: boolean;
  parentProductItemId?: number;
  primaryFunctionalSelections?: Array<PrimaryFunctionalSelectionDto>;
  productItemChildMultiplicities?: Array<ProductItemChildMultiplicityDto>;
  productItemChildRelations?: Array<ProductItemChildRelationDto>;
}
