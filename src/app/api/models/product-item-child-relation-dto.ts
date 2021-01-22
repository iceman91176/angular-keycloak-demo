/* tslint:disable */

/**
 * Entity class that contains all child relations in the Primary Attribute<br> Spreadsheet Model for one single parent product item
 */
export interface ProductItemChildRelationDto {
  _type: string;
  childAssociationId?: number;
  childProductItemId?: number;
  staticRelation: boolean;
}
