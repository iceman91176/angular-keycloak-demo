/* tslint:disable */
import { QueryPageResultDto } from './query-page-result-dto';
import { AttributeDefAssociationDto } from './attribute-def-association-dto';
export interface AttributeDefQueryPageResultDto extends QueryPageResultDto{
  _type: string;
  pageItems?: Array<AttributeDefAssociationDto>;
}
