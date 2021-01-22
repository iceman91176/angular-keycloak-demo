import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { catchError, map, tap,flatMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import t from 'typy';

import {ProductSearchV1Service,ProductCatalogV1Service} from  '@splapi/services';
import {
    ProductDataSelectorDto,
    ProductItemDto,NamedProductCatalogDto
} from '@splapi/models';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private catalogSvc: ProductCatalogV1Service,
    private productSearch: ProductSearchV1Service
  ) { }


  /**
   *Get all named catalogs
   */
  getAllNamedCatalogs():Observable<NamedProductCatalogDto[]>{

    return this.catalogSvc.ProductCatalogFindNamedProductCatalogsByQueryV1("");
  }

  /**
   * Get all products in given catalog/portfolio
   * @param portfolioId
   * @param catalogId
   */
  getProductsByNamedCatalog(catalog: NamedProductCatalogDto):Observable<ProductItemDto[]>{

    //portfolioId:number,catalogId:number
    let queryText="*";
    let params=<ProductSearchV1Service.ProductSearchFindProductItemsByQuery2V1Params>{};
    params.query="productPortfolio.id = "+catalog.productPortfolio.id+" AND namedProductCatalogs.id = "+catalog.id;
    params.productItemType="Product";

    params.dataSelector=<ProductDataSelectorDto>{};
    params.dataSelector.includeCustomProperties=true;
    params.dataSelector._type = "ProductDataSelectorDto";

    return this.productSearch.ProductSearchFindProductItemsByQuery2V1(params);

  }


}