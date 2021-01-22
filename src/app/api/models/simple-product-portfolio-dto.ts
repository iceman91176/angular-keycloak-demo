/* tslint:disable */
import { MultiLingualStringDto } from './multi-lingual-string-dto';
import { ExternalRefDto } from './external-ref-dto';

/**
 * Simple representation of ProductPortfolio
 */
export interface SimpleProductPortfolioDto {
  _type: string;
  displayName?: MultiLingualStringDto;
  externalRef?: ExternalRefDto;
  id?: number;
  name?: string;
  status?: 'ACTIVE' | 'INACTIVE';
}
