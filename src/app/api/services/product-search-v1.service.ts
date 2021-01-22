/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductItemDto } from '../models/product-item-dto';
import { ProductDataSelectorDto } from '../models/product-data-selector-dto';
import { InfrastructureComponentDto } from '../models/infrastructure-component-dto';
import { ProviderExternalServiceDefDto } from '../models/provider-external-service-def-dto';
import { RevisionNodeDto } from '../models/revision-node-dto';
import { ProductItemQueryResultDto } from '../models/product-item-query-result-dto';
import { ProductItemQueryPageResultDto } from '../models/product-item-query-page-result-dto';
import { ProductItemQueryPageParametersDto } from '../models/product-item-query-page-parameters-dto';

/**
 * Manages product search
 */
@Injectable({
  providedIn: 'root',
})
class ProductSearchV1Service extends __BaseService {
  static readonly ProductSearchFindAddSuccessorsV1Path = '/v1/product/product_items/{productItemId}/successors/find_all';
  static readonly ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Path = '/v1/product/infrastructure_components/find_by_cidef';
  static readonly ProductSearchFindAllPredecessorsV1Path = '/v1/product/product_items/{productItemId}/predecessor/find_all';
  static readonly ProductSearchFindAllProviderExternalServiceDefsByProviderV1Path = '/v1/product/provider_ext_service_defs/find_by_provider';
  static readonly ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Path = '/v1/product/product_items/query_by_type_and_licensed_content';
  static readonly ProductSearchFindParentProductItemsV1Path = '/v1/product/product_items/{productItemId}/parent/find';
  static readonly ProductSearchFindPredecessorV1Path = '/v1/product/product_items/{productItemId}/predecessor/find';
  static readonly ProductSearchFindProductItemsByQuery2V1Path = '/v1/product/product_items/query';
  static readonly ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Path = '/v1/product/product_items/query_for_configured_ext_service_def';
  static readonly ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Path = '/v1/product/provider_ext_service_defs/query_by_provider';
  static readonly ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Path = '/v1/product/provider_ext_service_defs/query_by_underpinning_contract';
  static readonly ProductSearchFindRevisionTreeV1Path = '/v1/product/product_items/{productItemId}/revision/tree/find';
  static readonly ProductSearchFindRevisionsV1Path = '/v1/product/product_items/{productItemId}/revisions/find';
  static readonly ProductSearchFindSuccessorsV1Path = '/v1/product/product_items/{productItemId}/successors/find';
  static readonly ProductSearchFindSuccessorsForUpgradeV1Path = '/v1/product/product_items/{productItemId}/successors/find_for_upgrade';
  static readonly ProductSearchQueryFirstV1Path = '/v1/product/product_items/query_first';
  static readonly ProductSearchQueryMoreV1Path = '/v1/product/product_items/query_more';
  static readonly ProductSearchQueryPageV1Path = '/v1/product/product_items/query_page';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ProductSearchV1Service.ProductSearchFindAddSuccessorsV1Params` containing the following parameters:
   *
   * - `productItemId`:
   *
   * - `dataSelector`:
   *
   * @return OK
   */
  ProductSearchFindAddSuccessorsV1Response(params: ProductSearchV1Service.ProductSearchFindAddSuccessorsV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(params.productItemId)}/successors/find_all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * @param params The `ProductSearchV1Service.ProductSearchFindAddSuccessorsV1Params` containing the following parameters:
   *
   * - `productItemId`:
   *
   * - `dataSelector`:
   *
   * @return OK
   */
  ProductSearchFindAddSuccessorsV1(params: ProductSearchV1Service.ProductSearchFindAddSuccessorsV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindAddSuccessorsV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findAllInfrastructureComponentsByConfigurationItemDefId
   *
   * Finds all infrastructure components that have a connection to the<br> configurationItemDef with the given id
   * @param params The `ProductSearchV1Service.ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Params` containing the following parameters:
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * - `configurationItemDefId`: Id of configuration item def
   *
   * @return OK - Returns a list of infrastructure components
   */
  ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Response(params: ProductSearchV1Service.ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Params): __Observable<__StrictHttpResponse<Array<InfrastructureComponentDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.dataSelector;
    if (params.configurationItemDefId != null) __params = __params.set('configurationItemDefId', params.configurationItemDefId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/infrastructure_components/find_by_cidef`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<InfrastructureComponentDto>>;
      })
    );
  }
  /**
   * findAllInfrastructureComponentsByConfigurationItemDefId
   *
   * Finds all infrastructure components that have a connection to the<br> configurationItemDef with the given id
   * @param params The `ProductSearchV1Service.ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Params` containing the following parameters:
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * - `configurationItemDefId`: Id of configuration item def
   *
   * @return OK - Returns a list of infrastructure components
   */
  ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1(params: ProductSearchV1Service.ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Params): __Observable<Array<InfrastructureComponentDto>> {
    return this.ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Response(params).pipe(
      __map(_r => _r.body as Array<InfrastructureComponentDto>)
    );
  }

  /**
   * findAllPredecessors
   *
   * Finds all predecessor of a productItem.<br> <br> <p><br> The first element in the list is the product item with the given id, the<br> second element is it's predecessor, the third element the predecessor of the<br> predecessor. The list stops when no predecessor is found anymore.<br> </p>
   * @param params The `ProductSearchV1Service.ProductSearchFindAllPredecessorsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of product item
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of productItems and all it's predecessors.
   */
  ProductSearchFindAllPredecessorsV1Response(params: ProductSearchV1Service.ProductSearchFindAllPredecessorsV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(params.productItemId)}/predecessor/find_all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findAllPredecessors
   *
   * Finds all predecessor of a productItem.<br> <br> <p><br> The first element in the list is the product item with the given id, the<br> second element is it's predecessor, the third element the predecessor of the<br> predecessor. The list stops when no predecessor is found anymore.<br> </p>
   * @param params The `ProductSearchV1Service.ProductSearchFindAllPredecessorsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of product item
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of productItems and all it's predecessors.
   */
  ProductSearchFindAllPredecessorsV1(params: ProductSearchV1Service.ProductSearchFindAllPredecessorsV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindAllPredecessorsV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findAllProviderExternalServiceDefsByProvider
   *
   * Finds all provider ExternalServiceDefs of a given provider
   * @param params The `ProductSearchV1Service.ProductSearchFindAllProviderExternalServiceDefsByProviderV1Params` containing the following parameters:
   *
   * - `providerId`: Id of partner in the role of a provider
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns list of found ProviderExternalServiceDef
   */
  ProductSearchFindAllProviderExternalServiceDefsByProviderV1Response(params: ProductSearchV1Service.ProductSearchFindAllProviderExternalServiceDefsByProviderV1Params): __Observable<__StrictHttpResponse<Array<ProviderExternalServiceDefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.providerId != null) __params = __params.set('providerId', params.providerId.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/provider_ext_service_defs/find_by_provider`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProviderExternalServiceDefDto>>;
      })
    );
  }
  /**
   * findAllProviderExternalServiceDefsByProvider
   *
   * Finds all provider ExternalServiceDefs of a given provider
   * @param params The `ProductSearchV1Service.ProductSearchFindAllProviderExternalServiceDefsByProviderV1Params` containing the following parameters:
   *
   * - `providerId`: Id of partner in the role of a provider
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns list of found ProviderExternalServiceDef
   */
  ProductSearchFindAllProviderExternalServiceDefsByProviderV1(params: ProductSearchV1Service.ProductSearchFindAllProviderExternalServiceDefsByProviderV1Params): __Observable<Array<ProviderExternalServiceDefDto>> {
    return this.ProductSearchFindAllProviderExternalServiceDefsByProviderV1Response(params).pipe(
      __map(_r => _r.body as Array<ProviderExternalServiceDefDto>)
    );
  }

  /**
   * findLicensedContentProductItemsByTypeAndQuery
   *
   * Find all licensed content product items in the current tenant that fulfill<br> the given query.
   * @param params The `ProductSearchV1Service.ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Params` containing the following parameters:
   *
   * - `showProtectedLicensedContent`: If true add protected licensed content items
   *
   * - `query`: The query
   *
   * - `productItemTypes`: On optional collection of product item types
   *
   * @return OK - Returns a list of productItems
   */
  ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Response(params: ProductSearchV1Service.ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.showProtectedLicensedContent != null) __params = __params.set('showProtectedLicensedContent', params.showProtectedLicensedContent.toString());
    if (params.query != null) __params = __params.set('query', params.query.toString());
    (params.productItemTypes || []).forEach(val => {if (val != null) __params = __params.append('productItemTypes', val.toString())});
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/query_by_type_and_licensed_content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findLicensedContentProductItemsByTypeAndQuery
   *
   * Find all licensed content product items in the current tenant that fulfill<br> the given query.
   * @param params The `ProductSearchV1Service.ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Params` containing the following parameters:
   *
   * - `showProtectedLicensedContent`: If true add protected licensed content items
   *
   * - `query`: The query
   *
   * - `productItemTypes`: On optional collection of product item types
   *
   * @return OK - Returns a list of productItems
   */
  ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1(params: ProductSearchV1Service.ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findParentProductItems
   *
   * Find all parent productItems of the given type using the productItem
   * @param params The `ProductSearchV1Service.ProductSearchFindParentProductItemsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of productItem for which productItems will be returned
   *
   * - `parentType`: Type of productItems for parent. If null, all types are returned
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns list of parent productItems using the productItem
   */
  ProductSearchFindParentProductItemsV1Response(params: ProductSearchV1Service.ProductSearchFindParentProductItemsV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.parentType != null) __params = __params.set('parentType', params.parentType.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(params.productItemId)}/parent/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findParentProductItems
   *
   * Find all parent productItems of the given type using the productItem
   * @param params The `ProductSearchV1Service.ProductSearchFindParentProductItemsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of productItem for which productItems will be returned
   *
   * - `parentType`: Type of productItems for parent. If null, all types are returned
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns list of parent productItems using the productItem
   */
  ProductSearchFindParentProductItemsV1(params: ProductSearchV1Service.ProductSearchFindParentProductItemsV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindParentProductItemsV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findPredecessor
   *
   * Finds a product items predecessor. Child product items of the predecessor<br> will not be retrieved.
   * @param params The `ProductSearchV1Service.ProductSearchFindPredecessorV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the productItem for which the predecessor is searched
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A proposition, product, infrastructure product, infrastructure<br>         component or null if no predecessor exists
   */
  ProductSearchFindPredecessorV1Response(params: ProductSearchV1Service.ProductSearchFindPredecessorV1Params): __Observable<__StrictHttpResponse<ProductItemDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(params.productItemId)}/predecessor/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemDto>;
      })
    );
  }
  /**
   * findPredecessor
   *
   * Finds a product items predecessor. Child product items of the predecessor<br> will not be retrieved.
   * @param params The `ProductSearchV1Service.ProductSearchFindPredecessorV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the productItem for which the predecessor is searched
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A proposition, product, infrastructure product, infrastructure<br>         component or null if no predecessor exists
   */
  ProductSearchFindPredecessorV1(params: ProductSearchV1Service.ProductSearchFindPredecessorV1Params): __Observable<ProductItemDto> {
    return this.ProductSearchFindPredecessorV1Response(params).pipe(
      __map(_r => _r.body as ProductItemDto)
    );
  }

  /**
   * findProductItemsByQuery2
   *
   * Find all non licensed content product items in the current tenant that<br> fulfill the given query.
   * @param params The `ProductSearchV1Service.ProductSearchFindProductItemsByQuery2V1Params` containing the following parameters:
   *
   * - `query`: The query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * - `productItemType`: Specifies the product item type to run the search on, may be null.<br>            If null, the search will be run on the base type ProductItem.
   *
   * @return OK - Returns a list of productItems
   */
  ProductSearchFindProductItemsByQuery2V1Response(params: ProductSearchV1Service.ProductSearchFindProductItemsByQuery2V1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    __body = params.dataSelector;
    if (params.productItemType != null) __params = __params.set('productItemType', params.productItemType.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findProductItemsByQuery2
   *
   * Find all non licensed content product items in the current tenant that<br> fulfill the given query.
   * @param params The `ProductSearchV1Service.ProductSearchFindProductItemsByQuery2V1Params` containing the following parameters:
   *
   * - `query`: The query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * - `productItemType`: Specifies the product item type to run the search on, may be null.<br>            If null, the search will be run on the base type ProductItem.
   *
   * @return OK - Returns a list of productItems
   */
  ProductSearchFindProductItemsByQuery2V1(params: ProductSearchV1Service.ProductSearchFindProductItemsByQuery2V1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindProductItemsByQuery2V1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findProductItemsForConfiguredExternalServiceByQuery
   *
   * Find all productItems eligible to use for a configured external service using<br> a spql query. Child product items will not be retrieved.<br> <br> <p><br> The following conditions must apply in order to be returned<br> </p><br> <ul><br> <li>productItems must have status <code>RELEASED</code></li><br> <li>productItems must be of type proposition or product</li><br> <li>productItems must be in the same tenant</li><br> </ul>
   * @param params The `ProductSearchV1Service.ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns a list of productItems
   */
  ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Response(params: ProductSearchV1Service.ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/query_for_configured_ext_service_def`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findProductItemsForConfiguredExternalServiceByQuery
   *
   * Find all productItems eligible to use for a configured external service using<br> a spql query. Child product items will not be retrieved.<br> <br> <p><br> The following conditions must apply in order to be returned<br> </p><br> <ul><br> <li>productItems must have status <code>RELEASED</code></li><br> <li>productItems must be of type proposition or product</li><br> <li>productItems must be in the same tenant</li><br> </ul>
   * @param params The `ProductSearchV1Service.ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns a list of productItems
   */
  ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1(params: ProductSearchV1Service.ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findProviderExternalServiceDefsByProviderAndQuery
   *
   * Finds all provider ExternalServiceDefs of a given provider by the given<br> search query.
   * @param params The `ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `providerId`: Id of partner in the role of a provider
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of product items
   */
  ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Response(params: ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Params): __Observable<__StrictHttpResponse<Array<ProviderExternalServiceDefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    if (params.providerId != null) __params = __params.set('providerId', params.providerId.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/provider_ext_service_defs/query_by_provider`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProviderExternalServiceDefDto>>;
      })
    );
  }
  /**
   * findProviderExternalServiceDefsByProviderAndQuery
   *
   * Finds all provider ExternalServiceDefs of a given provider by the given<br> search query.
   * @param params The `ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `providerId`: Id of partner in the role of a provider
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of product items
   */
  ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1(params: ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Params): __Observable<Array<ProviderExternalServiceDefDto>> {
    return this.ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Response(params).pipe(
      __map(_r => _r.body as Array<ProviderExternalServiceDefDto>)
    );
  }

  /**
   * findProviderExternalServiceDefsByUnderpinningContractIdAndQuery
   *
   * Finds all provider ExternalServiceDefs for a given contract id using a spql<br> query.
   * @param params The `ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: Id of underpinning contract
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of provider external service defs
   */
  ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Response(params: ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Params): __Observable<__StrictHttpResponse<Array<ProviderExternalServiceDefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.underpinningContractId != null) __params = __params.set('underpinningContractId', params.underpinningContractId.toString());
    if (params.query != null) __params = __params.set('query', params.query.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/provider_ext_service_defs/query_by_underpinning_contract`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProviderExternalServiceDefDto>>;
      })
    );
  }
  /**
   * findProviderExternalServiceDefsByUnderpinningContractIdAndQuery
   *
   * Finds all provider ExternalServiceDefs for a given contract id using a spql<br> query.
   * @param params The `ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: Id of underpinning contract
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of provider external service defs
   */
  ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1(params: ProductSearchV1Service.ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Params): __Observable<Array<ProviderExternalServiceDefDto>> {
    return this.ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Response(params).pipe(
      __map(_r => _r.body as Array<ProviderExternalServiceDefDto>)
    );
  }

  /**
   * findRevisionTree
   *
   * Finds all revision of a productItem returned in a revision tree.
   * @param productItemId Id of product item
   * @return OK - Returns A revision node containing a tree structure of productItems<br>         revisions.
   */
  ProductSearchFindRevisionTreeV1Response(productItemId: number): __Observable<__StrictHttpResponse<RevisionNodeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(productItemId)}/revision/tree/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RevisionNodeDto>;
      })
    );
  }
  /**
   * findRevisionTree
   *
   * Finds all revision of a productItem returned in a revision tree.
   * @param productItemId Id of product item
   * @return OK - Returns A revision node containing a tree structure of productItems<br>         revisions.
   */
  ProductSearchFindRevisionTreeV1(productItemId: number): __Observable<RevisionNodeDto> {
    return this.ProductSearchFindRevisionTreeV1Response(productItemId).pipe(
      __map(_r => _r.body as RevisionNodeDto)
    );
  }

  /**
   * findRevisions
   *
   * Finds all revisions of a productItem.
   * @param params The `ProductSearchV1Service.ProductSearchFindRevisionsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of product item
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of productItems and all it's revisions.
   */
  ProductSearchFindRevisionsV1Response(params: ProductSearchV1Service.ProductSearchFindRevisionsV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(params.productItemId)}/revisions/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findRevisions
   *
   * Finds all revisions of a productItem.
   * @param params The `ProductSearchV1Service.ProductSearchFindRevisionsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of product item
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of productItems and all it's revisions.
   */
  ProductSearchFindRevisionsV1(params: ProductSearchV1Service.ProductSearchFindRevisionsV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindRevisionsV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findSuccessors
   *
   * Finds a product items successors. Child product items of the successors will<br> not be retrieved.
   * @param params The `ProductSearchV1Service.ProductSearchFindSuccessorsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the productItem for which the predecessor is searched
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of propositions, products, infrastructure products,<br>         infrastructure components that are successors of the given<br>         productItem
   */
  ProductSearchFindSuccessorsV1Response(params: ProductSearchV1Service.ProductSearchFindSuccessorsV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(params.productItemId)}/successors/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findSuccessors
   *
   * Finds a product items successors. Child product items of the successors will<br> not be retrieved.
   * @param params The `ProductSearchV1Service.ProductSearchFindSuccessorsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the productItem for which the predecessor is searched
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of propositions, products, infrastructure products,<br>         infrastructure components that are successors of the given<br>         productItem
   */
  ProductSearchFindSuccessorsV1(params: ProductSearchV1Service.ProductSearchFindSuccessorsV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindSuccessorsV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * findSuccessorsForUpgrade
   *
   * Finds all successors for which the given product item can be upgraded.
   * @param params The `ProductSearchV1Service.ProductSearchFindSuccessorsForUpgradeV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the productItem for which the successors are searched
   *
   * - `includePlanned`: If true productItems in status PLANNED will be included as<br>            possible target productItems
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of product items for which an upgrade is possible
   */
  ProductSearchFindSuccessorsForUpgradeV1Response(params: ProductSearchV1Service.ProductSearchFindSuccessorsForUpgradeV1Params): __Observable<__StrictHttpResponse<Array<ProductItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.includePlanned != null) __params = __params.set('includePlanned', params.includePlanned.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/${encodeURIComponent(params.productItemId)}/successors/find_for_upgrade`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductItemDto>>;
      })
    );
  }
  /**
   * findSuccessorsForUpgrade
   *
   * Finds all successors for which the given product item can be upgraded.
   * @param params The `ProductSearchV1Service.ProductSearchFindSuccessorsForUpgradeV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the productItem for which the successors are searched
   *
   * - `includePlanned`: If true productItems in status PLANNED will be included as<br>            possible target productItems
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns A list of product items for which an upgrade is possible
   */
  ProductSearchFindSuccessorsForUpgradeV1(params: ProductSearchV1Service.ProductSearchFindSuccessorsForUpgradeV1Params): __Observable<Array<ProductItemDto>> {
    return this.ProductSearchFindSuccessorsForUpgradeV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductItemDto>)
    );
  }

  /**
   * queryFirst
   *
   * Query a first bulk of product items.
   * @param params The `ProductSearchV1Service.ProductSearchQueryFirstV1Params` containing the following parameters:
   *
   * - `query`: The query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns a product item query result
   */
  ProductSearchQueryFirstV1Response(params: ProductSearchV1Service.ProductSearchQueryFirstV1Params): __Observable<__StrictHttpResponse<ProductItemQueryResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/query_first`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemQueryResultDto>;
      })
    );
  }
  /**
   * queryFirst
   *
   * Query a first bulk of product items.
   * @param params The `ProductSearchV1Service.ProductSearchQueryFirstV1Params` containing the following parameters:
   *
   * - `query`: The query
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns a product item query result
   */
  ProductSearchQueryFirstV1(params: ProductSearchV1Service.ProductSearchQueryFirstV1Params): __Observable<ProductItemQueryResultDto> {
    return this.ProductSearchQueryFirstV1Response(params).pipe(
      __map(_r => _r.body as ProductItemQueryResultDto)
    );
  }

  /**
   * queryMore
   *
   * Query a further bulk of product items.
   * @param params The `ProductSearchV1Service.ProductSearchQueryMoreV1Params` containing the following parameters:
   *
   * - `queryLocator`: A query locator received from a previous queryFirst or queryMore<br>            call
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns a product item query result
   */
  ProductSearchQueryMoreV1Response(params: ProductSearchV1Service.ProductSearchQueryMoreV1Params): __Observable<__StrictHttpResponse<ProductItemQueryResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.queryLocator != null) __params = __params.set('queryLocator', params.queryLocator.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/query_more`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemQueryResultDto>;
      })
    );
  }
  /**
   * queryMore
   *
   * Query a further bulk of product items.
   * @param params The `ProductSearchV1Service.ProductSearchQueryMoreV1Params` containing the following parameters:
   *
   * - `queryLocator`: A query locator received from a previous queryFirst or queryMore<br>            call
   *
   * - `dataSelector`: Class containing information about what data should be loaded.
   *
   * @return OK - Returns a product item query result
   */
  ProductSearchQueryMoreV1(params: ProductSearchV1Service.ProductSearchQueryMoreV1Params): __Observable<ProductItemQueryResultDto> {
    return this.ProductSearchQueryMoreV1Response(params).pipe(
      __map(_r => _r.body as ProductItemQueryResultDto)
    );
  }

  /**
   * queryPage
   *
   * Query a specific page of product items.
   * @param parameters Parameters specifying the query.
   * @return OK - Returns Query result
   */
  ProductSearchQueryPageV1Response(parameters: ProductItemQueryPageParametersDto): __Observable<__StrictHttpResponse<ProductItemQueryPageResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = parameters;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/product_items/query_page`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemQueryPageResultDto>;
      })
    );
  }
  /**
   * queryPage
   *
   * Query a specific page of product items.
   * @param parameters Parameters specifying the query.
   * @return OK - Returns Query result
   */
  ProductSearchQueryPageV1(parameters: ProductItemQueryPageParametersDto): __Observable<ProductItemQueryPageResultDto> {
    return this.ProductSearchQueryPageV1Response(parameters).pipe(
      __map(_r => _r.body as ProductItemQueryPageResultDto)
    );
  }
}

module ProductSearchV1Service {

  /**
   * Parameters for ProductSearchFindAddSuccessorsV1
   */
  export interface ProductSearchFindAddSuccessorsV1Params {
    productItemId: number;
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1
   */
  export interface ProductSearchFindAllInfrastructureComponentsByConfigurationItemDefIdV1Params {

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;

    /**
     * Id of configuration item def
     */
    configurationItemDefId: number;
  }

  /**
   * Parameters for ProductSearchFindAllPredecessorsV1
   */
  export interface ProductSearchFindAllPredecessorsV1Params {

    /**
     * Id of product item
     */
    productItemId: number;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindAllProviderExternalServiceDefsByProviderV1
   */
  export interface ProductSearchFindAllProviderExternalServiceDefsByProviderV1Params {

    /**
     * Id of partner in the role of a provider
     */
    providerId: number;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1
   */
  export interface ProductSearchFindLicensedContentProductItemsByTypeAndQueryV1Params {

    /**
     * If true add protected licensed content items
     */
    showProtectedLicensedContent: boolean;

    /**
     * The query
     */
    query: string;

    /**
     * On optional collection of product item types
     */
    productItemTypes: Array<'ProductItem' | 'Proposition' | 'Product' | 'InfrastructureProduct' | 'ExternalServiceDef' | 'ProviderExternalServiceDef' | 'ConfiguredExternalServiceDef' | 'LinkedExternalServiceDef' | 'InfrastructureComponent'>;
  }

  /**
   * Parameters for ProductSearchFindParentProductItemsV1
   */
  export interface ProductSearchFindParentProductItemsV1Params {

    /**
     * Id of productItem for which productItems will be returned
     */
    productItemId: number;

    /**
     * Type of productItems for parent. If null, all types are returned
     */
    parentType: 'ProductItem' | 'Proposition' | 'Product' | 'InfrastructureProduct' | 'ExternalServiceDef' | 'ProviderExternalServiceDef' | 'ConfiguredExternalServiceDef' | 'LinkedExternalServiceDef' | 'InfrastructureComponent';

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindPredecessorV1
   */
  export interface ProductSearchFindPredecessorV1Params {

    /**
     * Id of the productItem for which the predecessor is searched
     */
    productItemId: number;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindProductItemsByQuery2V1
   */
  export interface ProductSearchFindProductItemsByQuery2V1Params {

    /**
     * The query
     */
    query: string;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;

    /**
     * Specifies the product item type to run the search on, may be null.<br>            If null, the search will be run on the base type ProductItem.
     */
    productItemType?: 'ProductItem' | 'Proposition' | 'Product' | 'InfrastructureProduct' | 'ExternalServiceDef' | 'ProviderExternalServiceDef' | 'ConfiguredExternalServiceDef' | 'LinkedExternalServiceDef' | 'InfrastructureComponent';
  }

  /**
   * Parameters for ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1
   */
  export interface ProductSearchFindProductItemsForConfiguredExternalServiceByQueryV1Params {

    /**
     * The search query
     */
    query: string;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1
   */
  export interface ProductSearchFindProviderExternalServiceDefsByProviderAndQueryV1Params {

    /**
     * The search query
     */
    query: string;

    /**
     * Id of partner in the role of a provider
     */
    providerId: number;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1
   */
  export interface ProductSearchFindProviderExternalServiceDefsByUnderpinningContractIdAndQueryV1Params {

    /**
     * Id of underpinning contract
     */
    underpinningContractId: number;

    /**
     * The search query
     */
    query: string;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindRevisionsV1
   */
  export interface ProductSearchFindRevisionsV1Params {

    /**
     * Id of product item
     */
    productItemId: number;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindSuccessorsV1
   */
  export interface ProductSearchFindSuccessorsV1Params {

    /**
     * Id of the productItem for which the predecessor is searched
     */
    productItemId: number;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchFindSuccessorsForUpgradeV1
   */
  export interface ProductSearchFindSuccessorsForUpgradeV1Params {

    /**
     * Id of the productItem for which the successors are searched
     */
    productItemId: number;

    /**
     * If true productItems in status PLANNED will be included as<br>            possible target productItems
     */
    includePlanned: boolean;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchQueryFirstV1
   */
  export interface ProductSearchQueryFirstV1Params {

    /**
     * The query
     */
    query: string;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }

  /**
   * Parameters for ProductSearchQueryMoreV1
   */
  export interface ProductSearchQueryMoreV1Params {

    /**
     * A query locator received from a previous queryFirst or queryMore<br>            call
     */
    queryLocator: string;

    /**
     * Class containing information about what data should be loaded.
     */
    dataSelector: ProductDataSelectorDto;
  }
}

export { ProductSearchV1Service }
