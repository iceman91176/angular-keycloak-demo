/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CustomerProductCatalogDto } from '../models/customer-product-catalog-dto';
import { NamedProductCatalogDto } from '../models/named-product-catalog-dto';
import { ProductPortfolioDto } from '../models/product-portfolio-dto';
import { MultiLingualStringDto } from '../models/multi-lingual-string-dto';
import { SimpleProductPortfolioDto } from '../models/simple-product-portfolio-dto';
import { ExternalRefDto } from '../models/external-ref-dto';
import { ProductInventoryDto } from '../models/product-inventory-dto';
import { ProductPortfolioAssociationDto } from '../models/product-portfolio-association-dto';
import { StandardProductCatalogDto } from '../models/standard-product-catalog-dto';
import { ProductPortfolioQueryPageResultDto } from '../models/product-portfolio-query-page-result-dto';
import { ProductPortfolioQueryPageParametersDto } from '../models/product-portfolio-query-page-parameters-dto';

/**
 * Manages product catalogs.
 */
@Injectable({
  providedIn: 'root',
})
class ProductCatalogV1Service extends __BaseService {
  static readonly ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Path = '/v1/product/portfolios/{productPortfolioId}/catalog/customer/add';
  static readonly ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Path = '/v1/product/portfolios/{productPortfolioId}/catalog/named/add';
  static readonly ProductCatalogAddNewProductPortfolioV1Path = '/v1/product/portfolios/add';
  static readonly ProductCatalogAddProductItemsToNamedProductCatalogV1Path = '/v1/product/portfolios/catalog/{catalogId}/product_items/add';
  static readonly ProductCatalogAddProductVariantsToNamedProductCatalogV1Path = '/v1/product/portfolios/catalogs/{catalogId}/product_variant/add';
  static readonly ProductCatalogCopyLicensedPortfolioV1Path = '/v1/product/portfolios/{portfolioId}/licensed/copy';
  static readonly ProductCatalogCopyNamedProductCatalogV1Path = '/v1/product/portfolios/catalog/name/{catalogId}/copy';
  static readonly ProductCatalogCreateLicensedPortfolioV1Path = '/v1/product/portfolios/{portfolioId}/licensed/create';
  static readonly ProductCatalogFindAllSimpleProductPortfoliosV1Path = '/v1/product/portfolios/find_simple';
  static readonly ProductCatalogFindCustomerProductCatalogByExternalRefV1Path = '/v1/product/portfolios/catalogs/customer/find_by_ext_ref';
  static readonly ProductCatalogFindCustomerProductCatalogByIdV1Path = '/v1/product/portfolios/catalogs/customer/{catalogId}/find';
  static readonly ProductCatalogFindCustomerProductCatalogsByCustomerV1Path = '/v1/product/portfolios/{productPortfolioId}/catalogs/customer/find_by_customer';
  static readonly ProductCatalogFindCustomerProductCatalogsByProductPortfolioV1Path = '/v1/product/portfolios/{productPortfolioId}/catalogs/customer/find';
  static readonly ProductCatalogFindCustomerProductCatalogsByQueryV1Path = '/v1/product/portfolios/catalogs/customer/query';
  static readonly ProductCatalogFindNamedProductCatalogByExternalRefV1Path = '/v1/product/portfolios/catalog/named/find_by_ext_ref';
  static readonly ProductCatalogFindNamedProductCatalogByIdV1Path = '/v1/product/portfolios/catalog/named/{catalogId}/find';
  static readonly ProductCatalogFindNamedProductCatalogsByProductPortfolioV1Path = '/v1/product/portfolios/{productPortfolioId}/catalog/named/find';
  static readonly ProductCatalogFindNamedProductCatalogsByQueryV1Path = '/v1/product/portfolios/catalog/named/query';
  static readonly ProductCatalogFindProductInventoryV1Path = '/v1/product/inventory/find';
  static readonly ProductCatalogFindProductPortfolioAssociationByIdV1Path = '/v1/product/portfolios/{productPortfolioId}/associations/find';
  static readonly ProductCatalogFindProductPortfolioByExternalRefV1Path = '/v1/product/portfolios/find_by_ext_ref';
  static readonly ProductCatalogFindProductPortfolioByIdV1Path = '/v1/product/portfolios/{productPortfolioId}/find';
  static readonly ProductCatalogFindProductPortfoliosV1Path = '/v1/product/portfolios/find';
  static readonly ProductCatalogFindProductPortfoliosByQueryV1Path = '/v1/product/portfolios/query';
  static readonly ProductCatalogFindStandardProductCatalogByExternalRefV1Path = '/v1/product/portfolios/catalogs/standard/find_by_ext_ref';
  static readonly ProductCatalogFindStandardProductCatalogByProductPortfolioV1Path = '/v1/product/portfolios/{productPortfolioId}/catalogs/standard/find';
  static readonly ProductCatalogQueryProductPortfolioPageV1Path = '/v1/product/portfolios/query/page';
  static readonly ProductCatalogRemoveCustomerProductCatalogFromProductPortfolioV1Path = '/v1/product/portfolios/catalog/customer/{catalogId}/remove';
  static readonly ProductCatalogRemoveNamedProductCatalogFromProductPortfolioV1Path = '/v1/product/portfolios/catalog/named/{catalogId}/remove';
  static readonly ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Path = '/v1/product/portfolios/catalog/{catalogId}/product_items/remove2';
  static readonly ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Path = '/v1/product/portfolios/catalog/{catalogId}/product_items/remove';
  static readonly ProductCatalogRemoveProductPortfolioV1Path = '/v1/product/portfolios/{productPortfolioId}/remove';
  static readonly ProductCatalogRemoveProductPortfolioIncludingProductItemsV1Path = '/v1/product/portfolios/{productPortfolioId}/remove_including_product_items';
  static readonly ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Path = '/v1/product/portfolios/catalogs/{catalogId}/product_variant/remove';
  static readonly ProductCatalogSetProductPortfolioStatusV1Path = '/v1/product/portfolios/{productPortfolioId}/status/update';
  static readonly ProductCatalogUpdateCustomerProductCatalogV1Path = '/v1/product/portfolios/catalog/customer/update';
  static readonly ProductCatalogUpdateNamedProductCatalogV1Path = '/v1/product/portfolios/catalog/named/update';
  static readonly ProductCatalogUpdateProductPortfolioV1Path = '/v1/product/portfolios/update';
  static readonly ProductCatalogUpdateStandardProductCatalogV1Path = '/v1/product/portfolios/catalog/standard/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addNewCustomerProductCatalogToProductPortfolio
   *
   * Add a new customer product catalog to a product portfolio.
   * @param params The `ProductCatalogV1Service.ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Params` containing the following parameters:
   *
   * - `productPortfolioId`: A product portfolio
   *
   * - `catalog`: The customer product catalog to add. The catalog DTO must contain<br>            an existing customer represented by the customer's id (customer<br>            name and remarks can be ommitted).
   *
   * @return OK - Returns the created customer product catalog
   */
  ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Response(params: ProductCatalogV1Service.ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Params): __Observable<__StrictHttpResponse<CustomerProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.catalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(params.productPortfolioId)}/catalog/customer/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerProductCatalogDto>;
      })
    );
  }
  /**
   * addNewCustomerProductCatalogToProductPortfolio
   *
   * Add a new customer product catalog to a product portfolio.
   * @param params The `ProductCatalogV1Service.ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Params` containing the following parameters:
   *
   * - `productPortfolioId`: A product portfolio
   *
   * - `catalog`: The customer product catalog to add. The catalog DTO must contain<br>            an existing customer represented by the customer's id (customer<br>            name and remarks can be ommitted).
   *
   * @return OK - Returns the created customer product catalog
   */
  ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1(params: ProductCatalogV1Service.ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Params): __Observable<CustomerProductCatalogDto> {
    return this.ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Response(params).pipe(
      __map(_r => _r.body as CustomerProductCatalogDto)
    );
  }

  /**
   * addNewNamedProductCatalogToProductPortfolio
   *
   * Add a new product catalog to a product portfolio.
   * @param params The `ProductCatalogV1Service.ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Params` containing the following parameters:
   *
   * - `productPortfolioId`: A product portfolio
   *
   * - `catalog`: The product catalog to add. The catalog DTO
   *
   * @return OK - Returns the created product catalog
   */
  ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Response(params: ProductCatalogV1Service.ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Params): __Observable<__StrictHttpResponse<NamedProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.catalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(params.productPortfolioId)}/catalog/named/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NamedProductCatalogDto>;
      })
    );
  }
  /**
   * addNewNamedProductCatalogToProductPortfolio
   *
   * Add a new product catalog to a product portfolio.
   * @param params The `ProductCatalogV1Service.ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Params` containing the following parameters:
   *
   * - `productPortfolioId`: A product portfolio
   *
   * - `catalog`: The product catalog to add. The catalog DTO
   *
   * @return OK - Returns the created product catalog
   */
  ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1(params: ProductCatalogV1Service.ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Params): __Observable<NamedProductCatalogDto> {
    return this.ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Response(params).pipe(
      __map(_r => _r.body as NamedProductCatalogDto)
    );
  }

  /**
   * addNewProductPortfolio
   *
   * Add a new product portfolio to the current tenant without thumbnail image.<br> <br> <p><br> <b>Note:</b> A standard product catalog will automatically be added to the<br> portfolio<br> </p>
   * @param productPortfolio The product portfolio to add
   * @return OK - Returns the created product portfolio
   */
  ProductCatalogAddNewProductPortfolioV1Response(productPortfolio: ProductPortfolioDto): __Observable<__StrictHttpResponse<ProductPortfolioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productPortfolio;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductPortfolioDto>;
      })
    );
  }
  /**
   * addNewProductPortfolio
   *
   * Add a new product portfolio to the current tenant without thumbnail image.<br> <br> <p><br> <b>Note:</b> A standard product catalog will automatically be added to the<br> portfolio<br> </p>
   * @param productPortfolio The product portfolio to add
   * @return OK - Returns the created product portfolio
   */
  ProductCatalogAddNewProductPortfolioV1(productPortfolio: ProductPortfolioDto): __Observable<ProductPortfolioDto> {
    return this.ProductCatalogAddNewProductPortfolioV1Response(productPortfolio).pipe(
      __map(_r => _r.body as ProductPortfolioDto)
    );
  }

  /**
   * addProductItemsToNamedProductCatalog
   *
   * Adds a list of propositions/products to the given product catalog. This may<br> only be done for productItems within the same portfolio as the product<br> catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p><br> <br> <p><br> Also adds the associated product variants if the catalog's<br> {@link NamedProductCatalogDto#isAutoAddProductVariants()} property is set to<br> true.<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogAddProductItemsToNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productItemIds`: A list of product items
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogAddProductItemsToNamedProductCatalogV1Response(params: ProductCatalogV1Service.ProductCatalogAddProductItemsToNamedProductCatalogV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productItemIds;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/${encodeURIComponent(params.catalogId)}/product_items/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * addProductItemsToNamedProductCatalog
   *
   * Adds a list of propositions/products to the given product catalog. This may<br> only be done for productItems within the same portfolio as the product<br> catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p><br> <br> <p><br> Also adds the associated product variants if the catalog's<br> {@link NamedProductCatalogDto#isAutoAddProductVariants()} property is set to<br> true.<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogAddProductItemsToNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productItemIds`: A list of product items
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogAddProductItemsToNamedProductCatalogV1(params: ProductCatalogV1Service.ProductCatalogAddProductItemsToNamedProductCatalogV1Params): __Observable<null> {
    return this.ProductCatalogAddProductItemsToNamedProductCatalogV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * addProductVariantsToNamedProductCatalog
   *
   * Adds a list of productVariants to the given product catalog. This may only be<br> done for variants within the same portfolio as the product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogAddProductVariantsToNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productVariantIdCsvList`: A list of product variant ids
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogAddProductVariantsToNamedProductCatalogV1Response(params: ProductCatalogV1Service.ProductCatalogAddProductVariantsToNamedProductCatalogV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.productVariantIdCsvList || []).forEach(val => {if (val != null) __params = __params.append('productVariantIdCsvList', val.toString())});

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalogs/${encodeURIComponent(params.catalogId)}/product_variant/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * addProductVariantsToNamedProductCatalog
   *
   * Adds a list of productVariants to the given product catalog. This may only be<br> done for variants within the same portfolio as the product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogAddProductVariantsToNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productVariantIdCsvList`: A list of product variant ids
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogAddProductVariantsToNamedProductCatalogV1(params: ProductCatalogV1Service.ProductCatalogAddProductVariantsToNamedProductCatalogV1Params): __Observable<null> {
    return this.ProductCatalogAddProductVariantsToNamedProductCatalogV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * copyLicensedPortfolio
   *
   * A licensed portfolio with all it's product items and product catalogs will be<br> copied.<br> <br> <p><br> The newly created product items will be in status <code>PLANNED</code><br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogCopyLicensedPortfolioV1Params` containing the following parameters:
   *
   * - `portfolioId`: Id of portfolio to copy
   *
   * - `newPortfolio`: The new portfolio that will be created and where the product items<br>            will be copied to
   *
   * @return OK - Returns the created portfolio
   */
  ProductCatalogCopyLicensedPortfolioV1Response(params: ProductCatalogV1Service.ProductCatalogCopyLicensedPortfolioV1Params): __Observable<__StrictHttpResponse<ProductPortfolioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.newPortfolio;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(params.portfolioId)}/licensed/copy`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductPortfolioDto>;
      })
    );
  }
  /**
   * copyLicensedPortfolio
   *
   * A licensed portfolio with all it's product items and product catalogs will be<br> copied.<br> <br> <p><br> The newly created product items will be in status <code>PLANNED</code><br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogCopyLicensedPortfolioV1Params` containing the following parameters:
   *
   * - `portfolioId`: Id of portfolio to copy
   *
   * - `newPortfolio`: The new portfolio that will be created and where the product items<br>            will be copied to
   *
   * @return OK - Returns the created portfolio
   */
  ProductCatalogCopyLicensedPortfolioV1(params: ProductCatalogV1Service.ProductCatalogCopyLicensedPortfolioV1Params): __Observable<ProductPortfolioDto> {
    return this.ProductCatalogCopyLicensedPortfolioV1Response(params).pipe(
      __map(_r => _r.body as ProductPortfolioDto)
    );
  }

  /**
   * copyNamedProductCatalog
   *
   * Copies a product catalog with all it's linked product items.<br> <br> <p><br> <b>Note:</b> The sealed flag is set to false even if sealed flag of the<br> source catalog is set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogCopyNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `newDisplayName`: New display name of the catalog to create
   *
   * - `catalogId`: Id of catalog to copy
   *
   * @return OK - Returns the created catalog
   */
  ProductCatalogCopyNamedProductCatalogV1Response(params: ProductCatalogV1Service.ProductCatalogCopyNamedProductCatalogV1Params): __Observable<__StrictHttpResponse<NamedProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.newDisplayName;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/name/${encodeURIComponent(params.catalogId)}/copy`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NamedProductCatalogDto>;
      })
    );
  }
  /**
   * copyNamedProductCatalog
   *
   * Copies a product catalog with all it's linked product items.<br> <br> <p><br> <b>Note:</b> The sealed flag is set to false even if sealed flag of the<br> source catalog is set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogCopyNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `newDisplayName`: New display name of the catalog to create
   *
   * - `catalogId`: Id of catalog to copy
   *
   * @return OK - Returns the created catalog
   */
  ProductCatalogCopyNamedProductCatalogV1(params: ProductCatalogV1Service.ProductCatalogCopyNamedProductCatalogV1Params): __Observable<NamedProductCatalogDto> {
    return this.ProductCatalogCopyNamedProductCatalogV1Response(params).pipe(
      __map(_r => _r.body as NamedProductCatalogDto)
    );
  }

  /**
   * createLicensedPortfolio
   *
   * The given portfolio including all it's contained productItems will be<br> licensed. Any product catalog in the portfolio will be set to sealed.<br> <br> <p><br> For licensing a portfolio the following rules apply:<br> <ul><br> <li>There must be no customer product catalog in the portfolio</li><br> <li>At least one product item must be in the portfolio</li><br> <li>All product items must be in status <code>RELEASED</code></li><br> <li>LinkedExternalServiceDefs and ProviderExternalServiceDefs must not<br> occur.</li><br> <li>InfrastructureComponents must not have any connections to CiDefs</li><br> <li>The portfolio must not be licensed already</li><br> <li>The user must have the right to create a licensed content</li><br> <li></li><br> </ul><br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogCreateLicensedPortfolioV1Params` containing the following parameters:
   *
   * - `portfolioId`: Id of portfolio to license
   *
   * - `licenseKey`: Mandatory license key
   *
   * - `licenseIssuer`: Issuer of license
   */
  ProductCatalogCreateLicensedPortfolioV1Response(params: ProductCatalogV1Service.ProductCatalogCreateLicensedPortfolioV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.licenseKey != null) __params = __params.set('licenseKey', params.licenseKey.toString());
    if (params.licenseIssuer != null) __params = __params.set('licenseIssuer', params.licenseIssuer.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(params.portfolioId)}/licensed/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * createLicensedPortfolio
   *
   * The given portfolio including all it's contained productItems will be<br> licensed. Any product catalog in the portfolio will be set to sealed.<br> <br> <p><br> For licensing a portfolio the following rules apply:<br> <ul><br> <li>There must be no customer product catalog in the portfolio</li><br> <li>At least one product item must be in the portfolio</li><br> <li>All product items must be in status <code>RELEASED</code></li><br> <li>LinkedExternalServiceDefs and ProviderExternalServiceDefs must not<br> occur.</li><br> <li>InfrastructureComponents must not have any connections to CiDefs</li><br> <li>The portfolio must not be licensed already</li><br> <li>The user must have the right to create a licensed content</li><br> <li></li><br> </ul><br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogCreateLicensedPortfolioV1Params` containing the following parameters:
   *
   * - `portfolioId`: Id of portfolio to license
   *
   * - `licenseKey`: Mandatory license key
   *
   * - `licenseIssuer`: Issuer of license
   */
  ProductCatalogCreateLicensedPortfolioV1(params: ProductCatalogV1Service.ProductCatalogCreateLicensedPortfolioV1Params): __Observable<null> {
    return this.ProductCatalogCreateLicensedPortfolioV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findAllSimpleProductPortfolios
   *
   * Finds all product portfolios for the current user's tenant.
   * @param limitByUserAccessRights If true, only portfolios where the user has rights are returned.
   * @return OK - Returns A list of product portfolios. The list may be empty if there are no<br>         portfolios either because the inventory is empty or there is no<br>         inventory for the current user's tenant.
   */
  ProductCatalogFindAllSimpleProductPortfoliosV1Response(limitByUserAccessRights: boolean): __Observable<__StrictHttpResponse<Array<SimpleProductPortfolioDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (limitByUserAccessRights != null) __params = __params.set('limitByUserAccessRights', limitByUserAccessRights.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/find_simple`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SimpleProductPortfolioDto>>;
      })
    );
  }
  /**
   * findAllSimpleProductPortfolios
   *
   * Finds all product portfolios for the current user's tenant.
   * @param limitByUserAccessRights If true, only portfolios where the user has rights are returned.
   * @return OK - Returns A list of product portfolios. The list may be empty if there are no<br>         portfolios either because the inventory is empty or there is no<br>         inventory for the current user's tenant.
   */
  ProductCatalogFindAllSimpleProductPortfoliosV1(limitByUserAccessRights: boolean): __Observable<Array<SimpleProductPortfolioDto>> {
    return this.ProductCatalogFindAllSimpleProductPortfoliosV1Response(limitByUserAccessRights).pipe(
      __map(_r => _r.body as Array<SimpleProductPortfolioDto>)
    );
  }

  /**
   * findCustomerProductCatalogByExternalRef
   *
   * Finds a customer product catalog by its external ref.
   * @param externalRef External ref of customer product catalog
   * @return OK - Returns A customer product catalog
   */
  ProductCatalogFindCustomerProductCatalogByExternalRefV1Response(externalRef: ExternalRefDto): __Observable<__StrictHttpResponse<CustomerProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = externalRef;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalogs/customer/find_by_ext_ref`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerProductCatalogDto>;
      })
    );
  }
  /**
   * findCustomerProductCatalogByExternalRef
   *
   * Finds a customer product catalog by its external ref.
   * @param externalRef External ref of customer product catalog
   * @return OK - Returns A customer product catalog
   */
  ProductCatalogFindCustomerProductCatalogByExternalRefV1(externalRef: ExternalRefDto): __Observable<CustomerProductCatalogDto> {
    return this.ProductCatalogFindCustomerProductCatalogByExternalRefV1Response(externalRef).pipe(
      __map(_r => _r.body as CustomerProductCatalogDto)
    );
  }

  /**
   * findCustomerProductCatalogById
   *
   * Finds a customer product catalog by its id.
   * @param catalogId Id of customer product catalog
   * @return OK - Returns A customer product catalog.
   */
  ProductCatalogFindCustomerProductCatalogByIdV1Response(catalogId: number): __Observable<__StrictHttpResponse<CustomerProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/catalogs/customer/${encodeURIComponent(catalogId)}/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerProductCatalogDto>;
      })
    );
  }
  /**
   * findCustomerProductCatalogById
   *
   * Finds a customer product catalog by its id.
   * @param catalogId Id of customer product catalog
   * @return OK - Returns A customer product catalog.
   */
  ProductCatalogFindCustomerProductCatalogByIdV1(catalogId: number): __Observable<CustomerProductCatalogDto> {
    return this.ProductCatalogFindCustomerProductCatalogByIdV1Response(catalogId).pipe(
      __map(_r => _r.body as CustomerProductCatalogDto)
    );
  }

  /**
   * findCustomerProductCatalogsByCustomer
   *
   * Finds all customer product catalogs that are assigned to a partner. Optional<br> the selection can be restricted by the product portfolio.
   * @param params The `ProductCatalogV1Service.ProductCatalogFindCustomerProductCatalogsByCustomerV1Params` containing the following parameters:
   *
   * - `productPortfolioId`: Optional id of product portfolio
   *
   * - `partnerId`: Id of partner
   *
   * @return OK - Returns A list of customer product catalogs.
   */
  ProductCatalogFindCustomerProductCatalogsByCustomerV1Response(params: ProductCatalogV1Service.ProductCatalogFindCustomerProductCatalogsByCustomerV1Params): __Observable<__StrictHttpResponse<Array<CustomerProductCatalogDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.partnerId != null) __params = __params.set('partnerId', params.partnerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(params.productPortfolioId)}/catalogs/customer/find_by_customer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CustomerProductCatalogDto>>;
      })
    );
  }
  /**
   * findCustomerProductCatalogsByCustomer
   *
   * Finds all customer product catalogs that are assigned to a partner. Optional<br> the selection can be restricted by the product portfolio.
   * @param params The `ProductCatalogV1Service.ProductCatalogFindCustomerProductCatalogsByCustomerV1Params` containing the following parameters:
   *
   * - `productPortfolioId`: Optional id of product portfolio
   *
   * - `partnerId`: Id of partner
   *
   * @return OK - Returns A list of customer product catalogs.
   */
  ProductCatalogFindCustomerProductCatalogsByCustomerV1(params: ProductCatalogV1Service.ProductCatalogFindCustomerProductCatalogsByCustomerV1Params): __Observable<Array<CustomerProductCatalogDto>> {
    return this.ProductCatalogFindCustomerProductCatalogsByCustomerV1Response(params).pipe(
      __map(_r => _r.body as Array<CustomerProductCatalogDto>)
    );
  }

  /**
   * findCustomerProductCatalogsByProductPortfolio
   *
   * Finds all customer product catalogs that are defined by a product portfolio.
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A list of customer product catalogs.
   */
  ProductCatalogFindCustomerProductCatalogsByProductPortfolioV1Response(productPortfolioId: number): __Observable<__StrictHttpResponse<Array<CustomerProductCatalogDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(productPortfolioId)}/catalogs/customer/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CustomerProductCatalogDto>>;
      })
    );
  }
  /**
   * findCustomerProductCatalogsByProductPortfolio
   *
   * Finds all customer product catalogs that are defined by a product portfolio.
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A list of customer product catalogs.
   */
  ProductCatalogFindCustomerProductCatalogsByProductPortfolioV1(productPortfolioId: number): __Observable<Array<CustomerProductCatalogDto>> {
    return this.ProductCatalogFindCustomerProductCatalogsByProductPortfolioV1Response(productPortfolioId).pipe(
      __map(_r => _r.body as Array<CustomerProductCatalogDto>)
    );
  }

  /**
   * findCustomerProductCatalogsByQuery
   *
   * Finds all customer product catalogs within a tenant using a spql query.
   * @param query The search query
   * @return OK - Returns A list of customer product catalogs.
   */
  ProductCatalogFindCustomerProductCatalogsByQueryV1Response(query: string): __Observable<__StrictHttpResponse<Array<CustomerProductCatalogDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (query != null) __params = __params.set('query', query.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalogs/customer/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CustomerProductCatalogDto>>;
      })
    );
  }
  /**
   * findCustomerProductCatalogsByQuery
   *
   * Finds all customer product catalogs within a tenant using a spql query.
   * @param query The search query
   * @return OK - Returns A list of customer product catalogs.
   */
  ProductCatalogFindCustomerProductCatalogsByQueryV1(query: string): __Observable<Array<CustomerProductCatalogDto>> {
    return this.ProductCatalogFindCustomerProductCatalogsByQueryV1Response(query).pipe(
      __map(_r => _r.body as Array<CustomerProductCatalogDto>)
    );
  }

  /**
   * findNamedProductCatalogByExternalRef
   *
   * Finds a named product catalog by its external ref.
   * @param externalRef External ref of product catalog
   * @return OK - Returns A product catalog.
   */
  ProductCatalogFindNamedProductCatalogByExternalRefV1Response(externalRef: ExternalRefDto): __Observable<__StrictHttpResponse<NamedProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = externalRef;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/named/find_by_ext_ref`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NamedProductCatalogDto>;
      })
    );
  }
  /**
   * findNamedProductCatalogByExternalRef
   *
   * Finds a named product catalog by its external ref.
   * @param externalRef External ref of product catalog
   * @return OK - Returns A product catalog.
   */
  ProductCatalogFindNamedProductCatalogByExternalRefV1(externalRef: ExternalRefDto): __Observable<NamedProductCatalogDto> {
    return this.ProductCatalogFindNamedProductCatalogByExternalRefV1Response(externalRef).pipe(
      __map(_r => _r.body as NamedProductCatalogDto)
    );
  }

  /**
   * findNamedProductCatalogById
   *
   * Finds a named product catalog by its id.
   * @param catalogId Id of product catalog
   * @return OK - Returns A product catalog.
   */
  ProductCatalogFindNamedProductCatalogByIdV1Response(catalogId: number): __Observable<__StrictHttpResponse<NamedProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/catalog/named/${encodeURIComponent(catalogId)}/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NamedProductCatalogDto>;
      })
    );
  }
  /**
   * findNamedProductCatalogById
   *
   * Finds a named product catalog by its id.
   * @param catalogId Id of product catalog
   * @return OK - Returns A product catalog.
   */
  ProductCatalogFindNamedProductCatalogByIdV1(catalogId: number): __Observable<NamedProductCatalogDto> {
    return this.ProductCatalogFindNamedProductCatalogByIdV1Response(catalogId).pipe(
      __map(_r => _r.body as NamedProductCatalogDto)
    );
  }

  /**
   * findNamedProductCatalogsByProductPortfolio
   *
   * Finds all product catalogs that are defined by a product portfolio.
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A list of product catalogs.
   */
  ProductCatalogFindNamedProductCatalogsByProductPortfolioV1Response(productPortfolioId: number): __Observable<__StrictHttpResponse<Array<NamedProductCatalogDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(productPortfolioId)}/catalog/named/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NamedProductCatalogDto>>;
      })
    );
  }
  /**
   * findNamedProductCatalogsByProductPortfolio
   *
   * Finds all product catalogs that are defined by a product portfolio.
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A list of product catalogs.
   */
  ProductCatalogFindNamedProductCatalogsByProductPortfolioV1(productPortfolioId: number): __Observable<Array<NamedProductCatalogDto>> {
    return this.ProductCatalogFindNamedProductCatalogsByProductPortfolioV1Response(productPortfolioId).pipe(
      __map(_r => _r.body as Array<NamedProductCatalogDto>)
    );
  }

  /**
   * findNamedProductCatalogsByQuery
   *
   * Finds all product catalogs within a tenant using a spql query.
   * @param query The search query
   * @return OK - Returns A list of product catalogs.
   */
  ProductCatalogFindNamedProductCatalogsByQueryV1Response(query: string): __Observable<__StrictHttpResponse<Array<NamedProductCatalogDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (query != null) __params = __params.set('query', query.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/named/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NamedProductCatalogDto>>;
      })
    );
  }
  /**
   * findNamedProductCatalogsByQuery
   *
   * Finds all product catalogs within a tenant using a spql query.
   * @param query The search query
   * @return OK - Returns A list of product catalogs.
   */
  ProductCatalogFindNamedProductCatalogsByQueryV1(query: string): __Observable<Array<NamedProductCatalogDto>> {
    return this.ProductCatalogFindNamedProductCatalogsByQueryV1Response(query).pipe(
      __map(_r => _r.body as Array<NamedProductCatalogDto>)
    );
  }

  /**
   * findProductInventory
   *
   * Finds the product inventory for the current user's tenant.
   * @return OK - Returns A product inventory or null if the inventory does not exist
   */
  ProductCatalogFindProductInventoryV1Response(): __Observable<__StrictHttpResponse<ProductInventoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/inventory/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductInventoryDto>;
      })
    );
  }
  /**
   * findProductInventory
   *
   * Finds the product inventory for the current user's tenant.
   * @return OK - Returns A product inventory or null if the inventory does not exist
   */
  ProductCatalogFindProductInventoryV1(): __Observable<ProductInventoryDto> {
    return this.ProductCatalogFindProductInventoryV1Response().pipe(
      __map(_r => _r.body as ProductInventoryDto)
    );
  }

  /**
   * findProductPortfolioAssociationById
   *
   * Finds the product portfolio by it's id.<br> <br> <p><br> The product portfolio contains all associated customer product catalogs, the<br> standard product catlog, and all product categories.<br> </p>
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A product portfolio with it's associations for the current user's<br>         tenant.
   */
  ProductCatalogFindProductPortfolioAssociationByIdV1Response(productPortfolioId: number): __Observable<__StrictHttpResponse<ProductPortfolioAssociationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(productPortfolioId)}/associations/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductPortfolioAssociationDto>;
      })
    );
  }
  /**
   * findProductPortfolioAssociationById
   *
   * Finds the product portfolio by it's id.<br> <br> <p><br> The product portfolio contains all associated customer product catalogs, the<br> standard product catlog, and all product categories.<br> </p>
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A product portfolio with it's associations for the current user's<br>         tenant.
   */
  ProductCatalogFindProductPortfolioAssociationByIdV1(productPortfolioId: number): __Observable<ProductPortfolioAssociationDto> {
    return this.ProductCatalogFindProductPortfolioAssociationByIdV1Response(productPortfolioId).pipe(
      __map(_r => _r.body as ProductPortfolioAssociationDto)
    );
  }

  /**
   * findProductPortfolioByExternalRef
   *
   * Finds a product portfolio by its external ref for the current user's tenant.
   * @param externalRef ExternalRef of portfolio
   * @return OK - Returns A product portfolio
   */
  ProductCatalogFindProductPortfolioByExternalRefV1Response(externalRef: ExternalRefDto): __Observable<__StrictHttpResponse<ProductPortfolioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = externalRef;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/find_by_ext_ref`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductPortfolioDto>;
      })
    );
  }
  /**
   * findProductPortfolioByExternalRef
   *
   * Finds a product portfolio by its external ref for the current user's tenant.
   * @param externalRef ExternalRef of portfolio
   * @return OK - Returns A product portfolio
   */
  ProductCatalogFindProductPortfolioByExternalRefV1(externalRef: ExternalRefDto): __Observable<ProductPortfolioDto> {
    return this.ProductCatalogFindProductPortfolioByExternalRefV1Response(externalRef).pipe(
      __map(_r => _r.body as ProductPortfolioDto)
    );
  }

  /**
   * findProductPortfolioById
   *
   * Finds the product portfolio by it's id.<br> <br> <p><br> The product portfolio contains all associated customer product catalogs, the<br> standard product catlog, and all product categories.<br> </p>
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A product portfolio with it's associations for the current user's<br>         tenant.
   */
  ProductCatalogFindProductPortfolioByIdV1Response(productPortfolioId: number): __Observable<__StrictHttpResponse<ProductPortfolioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(productPortfolioId)}/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductPortfolioDto>;
      })
    );
  }
  /**
   * findProductPortfolioById
   *
   * Finds the product portfolio by it's id.<br> <br> <p><br> The product portfolio contains all associated customer product catalogs, the<br> standard product catlog, and all product categories.<br> </p>
   * @param productPortfolioId A product portfolio
   * @return OK - Returns A product portfolio with it's associations for the current user's<br>         tenant.
   */
  ProductCatalogFindProductPortfolioByIdV1(productPortfolioId: number): __Observable<ProductPortfolioDto> {
    return this.ProductCatalogFindProductPortfolioByIdV1Response(productPortfolioId).pipe(
      __map(_r => _r.body as ProductPortfolioDto)
    );
  }

  /**
   * findProductPortfolios
   *
   * Finds all product portfolios for the current user's tenant.
   * @param params The `ProductCatalogV1Service.ProductCatalogFindProductPortfoliosV1Params` containing the following parameters:
   *
   * - `useSearchService`: If true, the search service will be used.
   *
   * - `ignoreLimit`: Ignore the configured limit and load all portfolios.
   *
   * - `excludeLicensedPortfolios`: If true, licensed portfolio will not be returned
   *
   * @return OK - Returns A list of product portfolios. The list may be empty if there are no<br>         portfolios either because the inventory is empty or there is no<br>         inventory for the current user's tenant.
   */
  ProductCatalogFindProductPortfoliosV1Response(params: ProductCatalogV1Service.ProductCatalogFindProductPortfoliosV1Params): __Observable<__StrictHttpResponse<Array<ProductPortfolioDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.useSearchService != null) __params = __params.set('useSearchService', params.useSearchService.toString());
    if (params.ignoreLimit != null) __params = __params.set('ignoreLimit', params.ignoreLimit.toString());
    if (params.excludeLicensedPortfolios != null) __params = __params.set('excludeLicensedPortfolios', params.excludeLicensedPortfolios.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductPortfolioDto>>;
      })
    );
  }
  /**
   * findProductPortfolios
   *
   * Finds all product portfolios for the current user's tenant.
   * @param params The `ProductCatalogV1Service.ProductCatalogFindProductPortfoliosV1Params` containing the following parameters:
   *
   * - `useSearchService`: If true, the search service will be used.
   *
   * - `ignoreLimit`: Ignore the configured limit and load all portfolios.
   *
   * - `excludeLicensedPortfolios`: If true, licensed portfolio will not be returned
   *
   * @return OK - Returns A list of product portfolios. The list may be empty if there are no<br>         portfolios either because the inventory is empty or there is no<br>         inventory for the current user's tenant.
   */
  ProductCatalogFindProductPortfoliosV1(params: ProductCatalogV1Service.ProductCatalogFindProductPortfoliosV1Params): __Observable<Array<ProductPortfolioDto>> {
    return this.ProductCatalogFindProductPortfoliosV1Response(params).pipe(
      __map(_r => _r.body as Array<ProductPortfolioDto>)
    );
  }

  /**
   * findProductPortfoliosByQuery
   *
   * Finds all product portfolios using a spql query.<br> <br> <p><br> Returns only product portfolios that belong to the calling user's tenant.
   * @param query The search query
   * @return OK - Returns A list of product portfolios
   */
  ProductCatalogFindProductPortfoliosByQueryV1Response(query: string): __Observable<__StrictHttpResponse<Array<ProductPortfolioDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (query != null) __params = __params.set('query', query.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductPortfolioDto>>;
      })
    );
  }
  /**
   * findProductPortfoliosByQuery
   *
   * Finds all product portfolios using a spql query.<br> <br> <p><br> Returns only product portfolios that belong to the calling user's tenant.
   * @param query The search query
   * @return OK - Returns A list of product portfolios
   */
  ProductCatalogFindProductPortfoliosByQueryV1(query: string): __Observable<Array<ProductPortfolioDto>> {
    return this.ProductCatalogFindProductPortfoliosByQueryV1Response(query).pipe(
      __map(_r => _r.body as Array<ProductPortfolioDto>)
    );
  }

  /**
   * findStandardProductCatalogByExternalRef
   *
   * Finds a standard product catalog by external ref.
   * @param externalRef An external reference
   * @return OK - Returns A standard product catalog or null.
   */
  ProductCatalogFindStandardProductCatalogByExternalRefV1Response(externalRef: ExternalRefDto): __Observable<__StrictHttpResponse<StandardProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = externalRef;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalogs/standard/find_by_ext_ref`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StandardProductCatalogDto>;
      })
    );
  }
  /**
   * findStandardProductCatalogByExternalRef
   *
   * Finds a standard product catalog by external ref.
   * @param externalRef An external reference
   * @return OK - Returns A standard product catalog or null.
   */
  ProductCatalogFindStandardProductCatalogByExternalRefV1(externalRef: ExternalRefDto): __Observable<StandardProductCatalogDto> {
    return this.ProductCatalogFindStandardProductCatalogByExternalRefV1Response(externalRef).pipe(
      __map(_r => _r.body as StandardProductCatalogDto)
    );
  }

  /**
   * findStandardProductCatalogByProductPortfolio
   *
   * Finds a product portfolio's standard product catalog.
   * @param productPortfolioId A product portfolio
   * @return OK - Returns The portfolio's standard product catalog.
   */
  ProductCatalogFindStandardProductCatalogByProductPortfolioV1Response(productPortfolioId: number): __Observable<__StrictHttpResponse<StandardProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(productPortfolioId)}/catalogs/standard/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StandardProductCatalogDto>;
      })
    );
  }
  /**
   * findStandardProductCatalogByProductPortfolio
   *
   * Finds a product portfolio's standard product catalog.
   * @param productPortfolioId A product portfolio
   * @return OK - Returns The portfolio's standard product catalog.
   */
  ProductCatalogFindStandardProductCatalogByProductPortfolioV1(productPortfolioId: number): __Observable<StandardProductCatalogDto> {
    return this.ProductCatalogFindStandardProductCatalogByProductPortfolioV1Response(productPortfolioId).pipe(
      __map(_r => _r.body as StandardProductCatalogDto)
    );
  }

  /**
   * queryProductPortfolioPage
   *
   * Query a specific page of product portfolios.
   * @param parameters Parameters specifying the query.
   * @return OK - Returns Query result
   */
  ProductCatalogQueryProductPortfolioPageV1Response(parameters: ProductPortfolioQueryPageParametersDto): __Observable<__StrictHttpResponse<ProductPortfolioQueryPageResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = parameters;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/query/page`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductPortfolioQueryPageResultDto>;
      })
    );
  }
  /**
   * queryProductPortfolioPage
   *
   * Query a specific page of product portfolios.
   * @param parameters Parameters specifying the query.
   * @return OK - Returns Query result
   */
  ProductCatalogQueryProductPortfolioPageV1(parameters: ProductPortfolioQueryPageParametersDto): __Observable<ProductPortfolioQueryPageResultDto> {
    return this.ProductCatalogQueryProductPortfolioPageV1Response(parameters).pipe(
      __map(_r => _r.body as ProductPortfolioQueryPageResultDto)
    );
  }

  /**
   * removeCustomerProductCatalogFromProductPortfolio
   *
   * Removes a customer product catalog from a product portfolio.<br> <br> <p><br> <b>Note:</b> A customer product catalog can only be removed if the catalog is<br> empty meaning there are no product items assigned to the catalog<br> </p>
   * @param catalogId The customer product catalog id
   */
  ProductCatalogRemoveCustomerProductCatalogFromProductPortfolioV1Response(catalogId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/portfolios/catalog/customer/${encodeURIComponent(catalogId)}/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * removeCustomerProductCatalogFromProductPortfolio
   *
   * Removes a customer product catalog from a product portfolio.<br> <br> <p><br> <b>Note:</b> A customer product catalog can only be removed if the catalog is<br> empty meaning there are no product items assigned to the catalog<br> </p>
   * @param catalogId The customer product catalog id
   */
  ProductCatalogRemoveCustomerProductCatalogFromProductPortfolioV1(catalogId: number): __Observable<null> {
    return this.ProductCatalogRemoveCustomerProductCatalogFromProductPortfolioV1Response(catalogId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * removeNamedProductCatalogFromProductPortfolio
   *
   * Removes a product catalog from a product portfolio.<br> <br> <p><br> <b>Note:</b> A product catalog can only be removed if the sealed flag is not<br> set<br> </p>
   * @param catalogId The product catalog id
   */
  ProductCatalogRemoveNamedProductCatalogFromProductPortfolioV1Response(catalogId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/portfolios/catalog/named/${encodeURIComponent(catalogId)}/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * removeNamedProductCatalogFromProductPortfolio
   *
   * Removes a product catalog from a product portfolio.<br> <br> <p><br> <b>Note:</b> A product catalog can only be removed if the sealed flag is not<br> set<br> </p>
   * @param catalogId The product catalog id
   */
  ProductCatalogRemoveNamedProductCatalogFromProductPortfolioV1(catalogId: number): __Observable<null> {
    return this.ProductCatalogRemoveNamedProductCatalogFromProductPortfolioV1Response(catalogId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Params` containing the following parameters:
   *
   * - `productItemIds`:
   *
   * - `catalogId`:
   */
  ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Response(params: ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productItemIds;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/${encodeURIComponent(params.catalogId)}/product_items/remove2`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Params` containing the following parameters:
   *
   * - `productItemIds`:
   *
   * - `catalogId`:
   */
  ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1(params: ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Params): __Observable<null> {
    return this.ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * removeProductItemsFromNamedProductCatalog
   *
   * Removes a list of propostions/products from the given product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productItemIds`: A list of product items
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Response(params: ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productItemIds;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/portfolios/catalog/${encodeURIComponent(params.catalogId)}/product_items/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * removeProductItemsFromNamedProductCatalog
   *
   * Removes a list of propostions/products from the given product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productItemIds`: A list of product items
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogRemoveProductItemsFromNamedProductCatalogV1(params: ProductCatalogV1Service.ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Params): __Observable<null> {
    return this.ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * removeProductPortfolio
   *
   * Removes a product portfolio.<br> <br> <p><br> <b>Note:</b> A product portfolio can only be removed if the portfolio is<br> empty, meaning there are no customer catalogs, categories, and product item<br> assigned to the portfolio. The standard product catalog must be empty.<br> </p>
   * @param productPortfolioId The product portfolio
   */
  ProductCatalogRemoveProductPortfolioV1Response(productPortfolioId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(productPortfolioId)}/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * removeProductPortfolio
   *
   * Removes a product portfolio.<br> <br> <p><br> <b>Note:</b> A product portfolio can only be removed if the portfolio is<br> empty, meaning there are no customer catalogs, categories, and product item<br> assigned to the portfolio. The standard product catalog must be empty.<br> </p>
   * @param productPortfolioId The product portfolio
   */
  ProductCatalogRemoveProductPortfolioV1(productPortfolioId: number): __Observable<null> {
    return this.ProductCatalogRemoveProductPortfolioV1Response(productPortfolioId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * removeProductPortfolioIncludingProductItems
   *
   * Removes a product portfolio including all products and catalogs.<br> <br> <p><br> <b>Note:</b> This method is only possible if no business services on<br> productItems exist.<br> </p>
   * @param productPortfolioId The product portfolio
   */
  ProductCatalogRemoveProductPortfolioIncludingProductItemsV1Response(productPortfolioId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(productPortfolioId)}/remove_including_product_items`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * removeProductPortfolioIncludingProductItems
   *
   * Removes a product portfolio including all products and catalogs.<br> <br> <p><br> <b>Note:</b> This method is only possible if no business services on<br> productItems exist.<br> </p>
   * @param productPortfolioId The product portfolio
   */
  ProductCatalogRemoveProductPortfolioIncludingProductItemsV1(productPortfolioId: number): __Observable<null> {
    return this.ProductCatalogRemoveProductPortfolioIncludingProductItemsV1Response(productPortfolioId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * removeProductVariantsFromNamedProductCatalog
   *
   * Removes a list of productVariants from the given product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productVariantIdCsvList`: A list of product variants
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Response(params: ProductCatalogV1Service.ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.productVariantIdCsvList || []).forEach(val => {if (val != null) __params = __params.append('productVariantIdCsvList', val.toString())});

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/portfolios/catalogs/${encodeURIComponent(params.catalogId)}/product_variant/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * removeProductVariantsFromNamedProductCatalog
   *
   * Removes a list of productVariants from the given product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Params` containing the following parameters:
   *
   * - `productVariantIdCsvList`: A list of product variants
   *
   * - `catalogId`: Id of product catalog
   */
  ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1(params: ProductCatalogV1Service.ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Params): __Observable<null> {
    return this.ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * setProductPortfolioStatus
   *
   * * Change a portfolios status<br><br> <p><br> If the portfolio is already in the requested status nothing is done<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogSetProductPortfolioStatusV1Params` containing the following parameters:
   *
   * - `productPortfolioId`:
   *
   * - `newStatus`: A mandatory new status for the portfolio
   */
  ProductCatalogSetProductPortfolioStatusV1Response(params: ProductCatalogV1Service.ProductCatalogSetProductPortfolioStatusV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.newStatus != null) __params = __params.set('newStatus', params.newStatus.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/${encodeURIComponent(params.productPortfolioId)}/status/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * setProductPortfolioStatus
   *
   * * Change a portfolios status<br><br> <p><br> If the portfolio is already in the requested status nothing is done<br> </p>
   * @param params The `ProductCatalogV1Service.ProductCatalogSetProductPortfolioStatusV1Params` containing the following parameters:
   *
   * - `productPortfolioId`:
   *
   * - `newStatus`: A mandatory new status for the portfolio
   */
  ProductCatalogSetProductPortfolioStatusV1(params: ProductCatalogV1Service.ProductCatalogSetProductPortfolioStatusV1Params): __Observable<null> {
    return this.ProductCatalogSetProductPortfolioStatusV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * updateCustomerProductCatalog
   *
   * Updates a customer product catalog.<br> <br> <p><br> <b>Note:</b> the associated customer can not be changed on an existing<br> customer product catalog<br> </p>
   * @param catalog A customer product catalog
   * @return OK - Returns the updated catalog
   */
  ProductCatalogUpdateCustomerProductCatalogV1Response(catalog: CustomerProductCatalogDto): __Observable<__StrictHttpResponse<CustomerProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = catalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/customer/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerProductCatalogDto>;
      })
    );
  }
  /**
   * updateCustomerProductCatalog
   *
   * Updates a customer product catalog.<br> <br> <p><br> <b>Note:</b> the associated customer can not be changed on an existing<br> customer product catalog<br> </p>
   * @param catalog A customer product catalog
   * @return OK - Returns the updated catalog
   */
  ProductCatalogUpdateCustomerProductCatalogV1(catalog: CustomerProductCatalogDto): __Observable<CustomerProductCatalogDto> {
    return this.ProductCatalogUpdateCustomerProductCatalogV1Response(catalog).pipe(
      __map(_r => _r.body as CustomerProductCatalogDto)
    );
  }

  /**
   * updateNamedProductCatalog
   *
   * Updates a product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param catalog A product catalog
   * @return OK - Returns the updated catalog
   */
  ProductCatalogUpdateNamedProductCatalogV1Response(catalog: NamedProductCatalogDto): __Observable<__StrictHttpResponse<NamedProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = catalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/named/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NamedProductCatalogDto>;
      })
    );
  }
  /**
   * updateNamedProductCatalog
   *
   * Updates a product catalog.<br> <br> <p><br> <b>Note:</b> the data can only be changed when the sealed flag is not set<br> </p>
   * @param catalog A product catalog
   * @return OK - Returns the updated catalog
   */
  ProductCatalogUpdateNamedProductCatalogV1(catalog: NamedProductCatalogDto): __Observable<NamedProductCatalogDto> {
    return this.ProductCatalogUpdateNamedProductCatalogV1Response(catalog).pipe(
      __map(_r => _r.body as NamedProductCatalogDto)
    );
  }

  /**
   * updateProductPortfolio
   *
   * Updates a product portfolio.
   * @param portfolio A portfolio
   * @return OK - Returns the updated portfolio
   */
  ProductCatalogUpdateProductPortfolioV1Response(portfolio: ProductPortfolioDto): __Observable<__StrictHttpResponse<ProductPortfolioDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = portfolio;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductPortfolioDto>;
      })
    );
  }
  /**
   * updateProductPortfolio
   *
   * Updates a product portfolio.
   * @param portfolio A portfolio
   * @return OK - Returns the updated portfolio
   */
  ProductCatalogUpdateProductPortfolioV1(portfolio: ProductPortfolioDto): __Observable<ProductPortfolioDto> {
    return this.ProductCatalogUpdateProductPortfolioV1Response(portfolio).pipe(
      __map(_r => _r.body as ProductPortfolioDto)
    );
  }

  /**
   * updateStandardProductCatalog
   *
   * Updates a product portfolio's standard product catalog.
   * @param catalog A standard product catalog
   * @return OK - Returns the updated standard product catalog
   */
  ProductCatalogUpdateStandardProductCatalogV1Response(catalog: StandardProductCatalogDto): __Observable<__StrictHttpResponse<StandardProductCatalogDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = catalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/portfolios/catalog/standard/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StandardProductCatalogDto>;
      })
    );
  }
  /**
   * updateStandardProductCatalog
   *
   * Updates a product portfolio's standard product catalog.
   * @param catalog A standard product catalog
   * @return OK - Returns the updated standard product catalog
   */
  ProductCatalogUpdateStandardProductCatalogV1(catalog: StandardProductCatalogDto): __Observable<StandardProductCatalogDto> {
    return this.ProductCatalogUpdateStandardProductCatalogV1Response(catalog).pipe(
      __map(_r => _r.body as StandardProductCatalogDto)
    );
  }
}

module ProductCatalogV1Service {

  /**
   * Parameters for ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1
   */
  export interface ProductCatalogAddNewCustomerProductCatalogToProductPortfolioV1Params {

    /**
     * A product portfolio
     */
    productPortfolioId: number;

    /**
     * The customer product catalog to add. The catalog DTO must contain<br>            an existing customer represented by the customer's id (customer<br>            name and remarks can be ommitted).
     */
    catalog: CustomerProductCatalogDto;
  }

  /**
   * Parameters for ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1
   */
  export interface ProductCatalogAddNewNamedProductCatalogToProductPortfolioV1Params {

    /**
     * A product portfolio
     */
    productPortfolioId: number;

    /**
     * The product catalog to add. The catalog DTO
     */
    catalog: NamedProductCatalogDto;
  }

  /**
   * Parameters for ProductCatalogAddProductItemsToNamedProductCatalogV1
   */
  export interface ProductCatalogAddProductItemsToNamedProductCatalogV1Params {

    /**
     * A list of product items
     */
    productItemIds: Array<number>;

    /**
     * Id of product catalog
     */
    catalogId: number;
  }

  /**
   * Parameters for ProductCatalogAddProductVariantsToNamedProductCatalogV1
   */
  export interface ProductCatalogAddProductVariantsToNamedProductCatalogV1Params {

    /**
     * A list of product variant ids
     */
    productVariantIdCsvList: Array<number>;

    /**
     * Id of product catalog
     */
    catalogId: number;
  }

  /**
   * Parameters for ProductCatalogCopyLicensedPortfolioV1
   */
  export interface ProductCatalogCopyLicensedPortfolioV1Params {

    /**
     * Id of portfolio to copy
     */
    portfolioId: number;

    /**
     * The new portfolio that will be created and where the product items<br>            will be copied to
     */
    newPortfolio: ProductPortfolioDto;
  }

  /**
   * Parameters for ProductCatalogCopyNamedProductCatalogV1
   */
  export interface ProductCatalogCopyNamedProductCatalogV1Params {

    /**
     * New display name of the catalog to create
     */
    newDisplayName: MultiLingualStringDto;

    /**
     * Id of catalog to copy
     */
    catalogId: number;
  }

  /**
   * Parameters for ProductCatalogCreateLicensedPortfolioV1
   */
  export interface ProductCatalogCreateLicensedPortfolioV1Params {

    /**
     * Id of portfolio to license
     */
    portfolioId: number;

    /**
     * Mandatory license key
     */
    licenseKey: string;

    /**
     * Issuer of license
     */
    licenseIssuer: string;
  }

  /**
   * Parameters for ProductCatalogFindCustomerProductCatalogsByCustomerV1
   */
  export interface ProductCatalogFindCustomerProductCatalogsByCustomerV1Params {

    /**
     * Optional id of product portfolio
     */
    productPortfolioId: number;

    /**
     * Id of partner
     */
    partnerId: number;
  }

  /**
   * Parameters for ProductCatalogFindProductPortfoliosV1
   */
  export interface ProductCatalogFindProductPortfoliosV1Params {

    /**
     * If true, the search service will be used.
     */
    useSearchService: boolean;

    /**
     * Ignore the configured limit and load all portfolios.
     */
    ignoreLimit: boolean;

    /**
     * If true, licensed portfolio will not be returned
     */
    excludeLicensedPortfolios: boolean;
  }

  /**
   * Parameters for ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1
   */
  export interface ProductCatalogRemoveProductItemsFromNamedProductCatalog2V1Params {
    productItemIds: Array<number>;
    catalogId: number;
  }

  /**
   * Parameters for ProductCatalogRemoveProductItemsFromNamedProductCatalogV1
   */
  export interface ProductCatalogRemoveProductItemsFromNamedProductCatalogV1Params {

    /**
     * A list of product items
     */
    productItemIds: Array<number>;

    /**
     * Id of product catalog
     */
    catalogId: number;
  }

  /**
   * Parameters for ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1
   */
  export interface ProductCatalogRemoveProductVariantsFromNamedProductCatalogV1Params {

    /**
     * A list of product variants
     */
    productVariantIdCsvList: Array<number>;

    /**
     * Id of product catalog
     */
    catalogId: number;
  }

  /**
   * Parameters for ProductCatalogSetProductPortfolioStatusV1
   */
  export interface ProductCatalogSetProductPortfolioStatusV1Params {
    productPortfolioId: number;

    /**
     * A mandatory new status for the portfolio
     */
    newStatus: 'ACTIVE' | 'INACTIVE';
  }
}

export { ProductCatalogV1Service }
