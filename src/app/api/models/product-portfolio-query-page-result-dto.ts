/* tslint:disable */
import { QueryPageResultDto } from './query-page-result-dto';
import { ProductPortfolioDto } from './product-portfolio-dto';
export interface ProductPortfolioQueryPageResultDto extends QueryPageResultDto{
  _type: string;
  pageItems?: Array<ProductPortfolioDto>;
}
