/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductItemPrimaryMappingDataDto } from '../models/product-item-primary-mapping-data-dto';
import { PrimaryMetaInformationDto } from '../models/primary-meta-information-dto';
import { ProductItemPrimaryMoneyDataDto } from '../models/product-item-primary-money-data-dto';

/**
 * Manages the primary attribute spread sheet model
 */
@Injectable({
  providedIn: 'root',
})
class PrimaryAttributeV1Service extends __BaseService {
  static readonly PrimaryAttributeCreateExcelMatrixV1Path = '/v1/product/attribute_defs_primary/product_items/{productItemId}/matrix/excel';
  static readonly PrimaryAttributeGetPrimaryAttributeInstanceDataV1Path = '/v1/product/attribute_defs_primary/product_items/{productItemId}/instance_data/find';
  static readonly PrimaryAttributeGetPrimaryAttributeMetaInformationV1Path = '/v1/product/attribute_defs_primary/product_items/{productItemId}/meta_info/find';
  static readonly PrimaryAttributeGetPrimaryAttributePricingInformationV1Path = '/v1/product/attribute_defs_primary/product_items/{productItemId}/prices/find';
  static readonly PrimaryAttributeResetFunctionalAttributeDefV1Path = '/v1/product/attribute_defs_primary/product_items/{productItemId}/attribute_def/functional/reset';
  static readonly PrimaryAttributeResetPrimaryAttributeDefV1Path = '/v1/product/attribute_defs_primary/product_items/{productItemId}/attribute_def/primary/reset';
  static readonly PrimaryAttributeSetPricesBasedOnCostsV1Path = '/v1/product/attribute_defs_primary/product_items/{productItemId}/prices/set_base_on_costs';
  static readonly PrimaryAttributeUpdatePrimaryAttributeInstanceDataV1Path = '/v1/product/attribute_defs_primary/product_items/instance_data/update';
  static readonly PrimaryAttributeUpdatePrimaryAttributePricingInformationV1Path = '/v1/product/attribute_defs_primary/product_items/prices/update';
  static readonly PrimaryAttributeVerifyPrimaryAttributeInstanceDataV1Path = '/v1/product/attribute_defs_primary/product_items/instance_data/verify';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * createExcelMatrix
   *
   * Creates an excel report of the product item matrix<br> <p><br> A report can only be generated when at least one productChildAssociation and<br> one primary attribute is defined on parent product item. For infrastructure<br> components at least one configurationItemDef is required.<br> </p><br> Exports are allowed for the following product items<br> <ul><br> <li>Proposition</li><br> <li>Product</li><br> <li>InfrastructureProduct</li><br> <li>ConfiguredExternalServiceDef</li><br> <li>InfrastructureComponent --> associations to ConfigurationItemDefs</li><br> <li></li><br> </ul>
   * @param params The `PrimaryAttributeV1Service.PrimaryAttributeCreateExcelMatrixV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the parent productItem
   *
   * - `priceHistoryDate`: Optional date for which prices will be displayed
   *
   * - `locale`: An optional locale. If presents overrides the calling user's<br>            locale.
   *
   * - `highlightDay`: If true and priceHistoryDate is set, all prices/costs changed on<br>            requested day will be highlighted
   *
   * @return OK - Returns The excel report of the matrix
   */
  PrimaryAttributeCreateExcelMatrixV1Response(params: PrimaryAttributeV1Service.PrimaryAttributeCreateExcelMatrixV1Params): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.priceHistoryDate != null) __params = __params.set('priceHistoryDate', params.priceHistoryDate.toString());
    if (params.locale != null) __params = __params.set('locale', params.locale.toString());
    if (params.highlightDay != null) __params = __params.set('highlightDay', params.highlightDay.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/${encodeURIComponent(params.productItemId)}/matrix/excel`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * createExcelMatrix
   *
   * Creates an excel report of the product item matrix<br> <p><br> A report can only be generated when at least one productChildAssociation and<br> one primary attribute is defined on parent product item. For infrastructure<br> components at least one configurationItemDef is required.<br> </p><br> Exports are allowed for the following product items<br> <ul><br> <li>Proposition</li><br> <li>Product</li><br> <li>InfrastructureProduct</li><br> <li>ConfiguredExternalServiceDef</li><br> <li>InfrastructureComponent --> associations to ConfigurationItemDefs</li><br> <li></li><br> </ul>
   * @param params The `PrimaryAttributeV1Service.PrimaryAttributeCreateExcelMatrixV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the parent productItem
   *
   * - `priceHistoryDate`: Optional date for which prices will be displayed
   *
   * - `locale`: An optional locale. If presents overrides the calling user's<br>            locale.
   *
   * - `highlightDay`: If true and priceHistoryDate is set, all prices/costs changed on<br>            requested day will be highlighted
   *
   * @return OK - Returns The excel report of the matrix
   */
  PrimaryAttributeCreateExcelMatrixV1(params: PrimaryAttributeV1Service.PrimaryAttributeCreateExcelMatrixV1Params): __Observable<Blob> {
    return this.PrimaryAttributeCreateExcelMatrixV1Response(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * getPrimaryAttributeInstanceData
   *
   * Given a productItem the meta information about the primary functional<br> spreadsheet model is returned.<br> <p><br> The returned structure contains 3 Sets:<br> </p><br> <ul><br> <li>A set of all child items and the kind of relation. This information is<br> contained in the meta information as well.</li><br> <li>A set of child multiplicities that states for every primary attribute<br> value, how often the related child product item is used. Dynamic child<br> product items for which it's multiplicity is 0 are not contained in the<br> set.</li><br> <li>A set of PrimaryFunctionalSelections for all related functional<br> attributes. Where no definition is found in the primary attribute relations,<br> the default values of the attributeDef is filled.</li><br> </ul><br> <p><br> In case of error, these erros will be attached to the entries directly.<br> </p>
   * @param productItemId Id of the parent productItem
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData with a set of instance<br>         data or an empty set if no instance data is available yet
   */
  PrimaryAttributeGetPrimaryAttributeInstanceDataV1Response(productItemId: number): __Observable<__StrictHttpResponse<ProductItemPrimaryMappingDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/${encodeURIComponent(productItemId)}/instance_data/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMappingDataDto>;
      })
    );
  }
  /**
   * getPrimaryAttributeInstanceData
   *
   * Given a productItem the meta information about the primary functional<br> spreadsheet model is returned.<br> <p><br> The returned structure contains 3 Sets:<br> </p><br> <ul><br> <li>A set of all child items and the kind of relation. This information is<br> contained in the meta information as well.</li><br> <li>A set of child multiplicities that states for every primary attribute<br> value, how often the related child product item is used. Dynamic child<br> product items for which it's multiplicity is 0 are not contained in the<br> set.</li><br> <li>A set of PrimaryFunctionalSelections for all related functional<br> attributes. Where no definition is found in the primary attribute relations,<br> the default values of the attributeDef is filled.</li><br> </ul><br> <p><br> In case of error, these erros will be attached to the entries directly.<br> </p>
   * @param productItemId Id of the parent productItem
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData with a set of instance<br>         data or an empty set if no instance data is available yet
   */
  PrimaryAttributeGetPrimaryAttributeInstanceDataV1(productItemId: number): __Observable<ProductItemPrimaryMappingDataDto> {
    return this.PrimaryAttributeGetPrimaryAttributeInstanceDataV1Response(productItemId).pipe(
      __map(_r => _r.body as ProductItemPrimaryMappingDataDto)
    );
  }

  /**
   * getPrimaryAttributeMetaInformation
   *
   * Given a productItem the meta information about the primary functional<br> spreadsheet model is returned.
   * @param productItemId Id of the parent productItem
   * @return OK - Returns The meta information used to build spreadsheet information
   */
  PrimaryAttributeGetPrimaryAttributeMetaInformationV1Response(productItemId: number): __Observable<__StrictHttpResponse<PrimaryMetaInformationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/${encodeURIComponent(productItemId)}/meta_info/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PrimaryMetaInformationDto>;
      })
    );
  }
  /**
   * getPrimaryAttributeMetaInformation
   *
   * Given a productItem the meta information about the primary functional<br> spreadsheet model is returned.
   * @param productItemId Id of the parent productItem
   * @return OK - Returns The meta information used to build spreadsheet information
   */
  PrimaryAttributeGetPrimaryAttributeMetaInformationV1(productItemId: number): __Observable<PrimaryMetaInformationDto> {
    return this.PrimaryAttributeGetPrimaryAttributeMetaInformationV1Response(productItemId).pipe(
      __map(_r => _r.body as PrimaryMetaInformationDto)
    );
  }

  /**
   * getPrimaryAttributePricingInformation
   *
   * Get price items defined for attribute enum values overridden by the primary<br> attribute relations.<br> <br> <p><br> Prices defined on the original attribute enum value are not returned<br> </p><br> <p><br> Only current prices are returned. Old prices are not returned.<br> </p>
   * @param productItemId Id of the parent productItem
   * @return OK - Returns The price information used on enum values in spreadsheet
   */
  PrimaryAttributeGetPrimaryAttributePricingInformationV1Response(productItemId: number): __Observable<__StrictHttpResponse<ProductItemPrimaryMoneyDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/${encodeURIComponent(productItemId)}/prices/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMoneyDataDto>;
      })
    );
  }
  /**
   * getPrimaryAttributePricingInformation
   *
   * Get price items defined for attribute enum values overridden by the primary<br> attribute relations.<br> <br> <p><br> Prices defined on the original attribute enum value are not returned<br> </p><br> <p><br> Only current prices are returned. Old prices are not returned.<br> </p>
   * @param productItemId Id of the parent productItem
   * @return OK - Returns The price information used on enum values in spreadsheet
   */
  PrimaryAttributeGetPrimaryAttributePricingInformationV1(productItemId: number): __Observable<ProductItemPrimaryMoneyDataDto> {
    return this.PrimaryAttributeGetPrimaryAttributePricingInformationV1Response(productItemId).pipe(
      __map(_r => _r.body as ProductItemPrimaryMoneyDataDto)
    );
  }

  /**
   * resetFunctionalAttributeDef
   *
   * Resets the values of the given attributeDef to it's default values
   * @param params The `PrimaryAttributeV1Service.PrimaryAttributeResetFunctionalAttributeDefV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the parent productItem
   *
   * - `functionalId`: Mandatory id of a functional attributeDef that will be reset to<br>            it's default values. If childAssociationId is filled, the<br>            functionalId must be the id of a functional attributeDef of a<br>            child productItem related by that association.
   *
   * - `childAssociationId`: Optional id of child association. If null the functionalId must be<br>            a functionalLocal attribute on parent productItem
   *
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeResetFunctionalAttributeDefV1Response(params: PrimaryAttributeV1Service.PrimaryAttributeResetFunctionalAttributeDefV1Params): __Observable<__StrictHttpResponse<ProductItemPrimaryMappingDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.functionalId != null) __params = __params.set('functionalId', params.functionalId.toString());
    if (params.childAssociationId != null) __params = __params.set('childAssociationId', params.childAssociationId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/${encodeURIComponent(params.productItemId)}/attribute_def/functional/reset`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMappingDataDto>;
      })
    );
  }
  /**
   * resetFunctionalAttributeDef
   *
   * Resets the values of the given attributeDef to it's default values
   * @param params The `PrimaryAttributeV1Service.PrimaryAttributeResetFunctionalAttributeDefV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the parent productItem
   *
   * - `functionalId`: Mandatory id of a functional attributeDef that will be reset to<br>            it's default values. If childAssociationId is filled, the<br>            functionalId must be the id of a functional attributeDef of a<br>            child productItem related by that association.
   *
   * - `childAssociationId`: Optional id of child association. If null the functionalId must be<br>            a functionalLocal attribute on parent productItem
   *
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeResetFunctionalAttributeDefV1(params: PrimaryAttributeV1Service.PrimaryAttributeResetFunctionalAttributeDefV1Params): __Observable<ProductItemPrimaryMappingDataDto> {
    return this.PrimaryAttributeResetFunctionalAttributeDefV1Response(params).pipe(
      __map(_r => _r.body as ProductItemPrimaryMappingDataDto)
    );
  }

  /**
   * resetPrimaryAttributeDef
   *
   * Resets all functional values of the given primary attributeDef and if<br> required the primary value.<br> <p><br> The reset will be done on all child ProductItems<br> </p>
   * @param params The `PrimaryAttributeV1Service.PrimaryAttributeResetPrimaryAttributeDefV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the parent productItem
   *
   * - `primaryValue`: Optional. If not null only the functional attributeDefs steered by<br>            this value will be set to default.
   *
   * - `primaryId`: Id of the primary attributeValue
   *
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeResetPrimaryAttributeDefV1Response(params: PrimaryAttributeV1Service.PrimaryAttributeResetPrimaryAttributeDefV1Params): __Observable<__StrictHttpResponse<ProductItemPrimaryMappingDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.primaryValue != null) __params = __params.set('primaryValue', params.primaryValue.toString());
    if (params.primaryId != null) __params = __params.set('primaryId', params.primaryId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/${encodeURIComponent(params.productItemId)}/attribute_def/primary/reset`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMappingDataDto>;
      })
    );
  }
  /**
   * resetPrimaryAttributeDef
   *
   * Resets all functional values of the given primary attributeDef and if<br> required the primary value.<br> <p><br> The reset will be done on all child ProductItems<br> </p>
   * @param params The `PrimaryAttributeV1Service.PrimaryAttributeResetPrimaryAttributeDefV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of the parent productItem
   *
   * - `primaryValue`: Optional. If not null only the functional attributeDefs steered by<br>            this value will be set to default.
   *
   * - `primaryId`: Id of the primary attributeValue
   *
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeResetPrimaryAttributeDefV1(params: PrimaryAttributeV1Service.PrimaryAttributeResetPrimaryAttributeDefV1Params): __Observable<ProductItemPrimaryMappingDataDto> {
    return this.PrimaryAttributeResetPrimaryAttributeDefV1Response(params).pipe(
      __map(_r => _r.body as ProductItemPrimaryMappingDataDto)
    );
  }

  /**
   * setPricesBasedOnCosts
   *
   * Set the pricing information on primary attribute related AttributeEnumValues<br> based on the aggregated costs and the default price margin.<br> <br> <p><br> Existing prices will be removed<br> </p>
   * @param productItemId Id of proposition or product on which prices will be updated
   * @return OK - Returns an instance of ProductItemPrimaryMoneyData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeSetPricesBasedOnCostsV1Response(productItemId: number): __Observable<__StrictHttpResponse<ProductItemPrimaryMoneyDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/${encodeURIComponent(productItemId)}/prices/set_base_on_costs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMoneyDataDto>;
      })
    );
  }
  /**
   * setPricesBasedOnCosts
   *
   * Set the pricing information on primary attribute related AttributeEnumValues<br> based on the aggregated costs and the default price margin.<br> <br> <p><br> Existing prices will be removed<br> </p>
   * @param productItemId Id of proposition or product on which prices will be updated
   * @return OK - Returns an instance of ProductItemPrimaryMoneyData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeSetPricesBasedOnCostsV1(productItemId: number): __Observable<ProductItemPrimaryMoneyDataDto> {
    return this.PrimaryAttributeSetPricesBasedOnCostsV1Response(productItemId).pipe(
      __map(_r => _r.body as ProductItemPrimaryMoneyDataDto)
    );
  }

  /**
   * updatePrimaryAttributeInstanceData
   *
   * Update the the database given the primary instance data.<br> <p><br> <b>NOTE: </b>The existing primary attribute structure of the product item<br> with the given Id is replaced completely with the given data<br> </p><br> <br> <p><br> This call is only allowed for parent product items in status PLANNED. To<br> update price items use the call<br> {@link com.fntsoftware.serviceplanet.services.app.product.IPrimaryAttributeAppService#updatePrimaryAttributePricingInformation(ProductItemPrimaryMoneyDataDto)<br> updatePrimaryAttributePricingInformation}<br> </p><br> <br> <p><br> The structure for update contains 3 Sets:<br> </p><br> <ul><br> <li>The <b>ProductItemChildRelation</b> contains the kind of relation. When<br> this set is empty no change will take place regarding the static/dynamic<br> status of child product items.</li><br> <li>The <b>ProductItemChildMultiplicity</b> describe the multiplicity of<br> every primary attribute value together with any child product item. Missing<br> entries of attribute value -- child product items will be treated as 0 for<br> dynamically associated child product items. For static child items it's<br> default product item multiplicity is filled in.</li><br> <li>A set of <b>PrimaryFunctionalSelection</b> denotes what functional<br> attribute values are set for what primary attribute. A missing definition for<br> a functional attribute is regarded as the attribute cannot be set.</li><br> </ul>
   * @param instanceData ProductItemPrimaryInstanceData
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeUpdatePrimaryAttributeInstanceDataV1Response(instanceData: ProductItemPrimaryMappingDataDto): __Observable<__StrictHttpResponse<ProductItemPrimaryMappingDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = instanceData;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/instance_data/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMappingDataDto>;
      })
    );
  }
  /**
   * updatePrimaryAttributeInstanceData
   *
   * Update the the database given the primary instance data.<br> <p><br> <b>NOTE: </b>The existing primary attribute structure of the product item<br> with the given Id is replaced completely with the given data<br> </p><br> <br> <p><br> This call is only allowed for parent product items in status PLANNED. To<br> update price items use the call<br> {@link com.fntsoftware.serviceplanet.services.app.product.IPrimaryAttributeAppService#updatePrimaryAttributePricingInformation(ProductItemPrimaryMoneyDataDto)<br> updatePrimaryAttributePricingInformation}<br> </p><br> <br> <p><br> The structure for update contains 3 Sets:<br> </p><br> <ul><br> <li>The <b>ProductItemChildRelation</b> contains the kind of relation. When<br> this set is empty no change will take place regarding the static/dynamic<br> status of child product items.</li><br> <li>The <b>ProductItemChildMultiplicity</b> describe the multiplicity of<br> every primary attribute value together with any child product item. Missing<br> entries of attribute value -- child product items will be treated as 0 for<br> dynamically associated child product items. For static child items it's<br> default product item multiplicity is filled in.</li><br> <li>A set of <b>PrimaryFunctionalSelection</b> denotes what functional<br> attribute values are set for what primary attribute. A missing definition for<br> a functional attribute is regarded as the attribute cannot be set.</li><br> </ul>
   * @param instanceData ProductItemPrimaryInstanceData
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeUpdatePrimaryAttributeInstanceDataV1(instanceData: ProductItemPrimaryMappingDataDto): __Observable<ProductItemPrimaryMappingDataDto> {
    return this.PrimaryAttributeUpdatePrimaryAttributeInstanceDataV1Response(instanceData).pipe(
      __map(_r => _r.body as ProductItemPrimaryMappingDataDto)
    );
  }

  /**
   * updatePrimaryAttributePricingInformation
   *
   * Update the pricing data for primary attribute related AttributeEnumValues.<br> <p><br> Prices can only be changed for product items on status <code>PLANNED</code>.<br> <br> <p><br> For updating price items on attribute enum values the following rules apply:<br> </p><br> <ul><br> <li>Prices will only be changed on MoneyItems without an Id</li><br> <li>Only prices of AttributeEnumValues referenced by<br> <code>ChildAttributeEnumValue</code> will be updated.</li><br> <li>To remove all prices of an AttributeEnumValue add it's<br> <code>ChildAttributeEnumValue</code> without any price attached.</li><br> </ul>
   * @param pricingInformation Pricing information to update
   * @return OK - Returns an instance of ProductItemPrimaryMoneyData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeUpdatePrimaryAttributePricingInformationV1Response(pricingInformation: ProductItemPrimaryMoneyDataDto): __Observable<__StrictHttpResponse<ProductItemPrimaryMoneyDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = pricingInformation;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/prices/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMoneyDataDto>;
      })
    );
  }
  /**
   * updatePrimaryAttributePricingInformation
   *
   * Update the pricing data for primary attribute related AttributeEnumValues.<br> <p><br> Prices can only be changed for product items on status <code>PLANNED</code>.<br> <br> <p><br> For updating price items on attribute enum values the following rules apply:<br> </p><br> <ul><br> <li>Prices will only be changed on MoneyItems without an Id</li><br> <li>Only prices of AttributeEnumValues referenced by<br> <code>ChildAttributeEnumValue</code> will be updated.</li><br> <li>To remove all prices of an AttributeEnumValue add it's<br> <code>ChildAttributeEnumValue</code> without any price attached.</li><br> </ul>
   * @param pricingInformation Pricing information to update
   * @return OK - Returns an instance of ProductItemPrimaryMoneyData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeUpdatePrimaryAttributePricingInformationV1(pricingInformation: ProductItemPrimaryMoneyDataDto): __Observable<ProductItemPrimaryMoneyDataDto> {
    return this.PrimaryAttributeUpdatePrimaryAttributePricingInformationV1Response(pricingInformation).pipe(
      __map(_r => _r.body as ProductItemPrimaryMoneyDataDto)
    );
  }

  /**
   * verifyPrimaryAttributeInstanceData
   *
   * Verify the primary instance data. If the field<br> <code>instanceDataCorrect<code> returns true, no error was found. If false,<br> the errors are listed for each entry of<br> <code>PrimaryFunctionalSelectionDto<code><br> <br> <p><br> <b>NOTE: </b>The given data is not stored on the database<br> </p>
   * @param instanceData ProductItemPrimaryInstanceData
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeVerifyPrimaryAttributeInstanceDataV1Response(instanceData: ProductItemPrimaryMappingDataDto): __Observable<__StrictHttpResponse<ProductItemPrimaryMappingDataDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = instanceData;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs_primary/product_items/instance_data/verify`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductItemPrimaryMappingDataDto>;
      })
    );
  }
  /**
   * verifyPrimaryAttributeInstanceData
   *
   * Verify the primary instance data. If the field<br> <code>instanceDataCorrect<code> returns true, no error was found. If false,<br> the errors are listed for each entry of<br> <code>PrimaryFunctionalSelectionDto<code><br> <br> <p><br> <b>NOTE: </b>The given data is not stored on the database<br> </p>
   * @param instanceData ProductItemPrimaryInstanceData
   * @return OK - Returns an instance of ProductItemPrimaryInstanceData enriched with error<br>         information. If no error was found the data has been saved correctly.
   */
  PrimaryAttributeVerifyPrimaryAttributeInstanceDataV1(instanceData: ProductItemPrimaryMappingDataDto): __Observable<ProductItemPrimaryMappingDataDto> {
    return this.PrimaryAttributeVerifyPrimaryAttributeInstanceDataV1Response(instanceData).pipe(
      __map(_r => _r.body as ProductItemPrimaryMappingDataDto)
    );
  }
}

module PrimaryAttributeV1Service {

  /**
   * Parameters for PrimaryAttributeCreateExcelMatrixV1
   */
  export interface PrimaryAttributeCreateExcelMatrixV1Params {

    /**
     * Id of the parent productItem
     */
    productItemId: number;

    /**
     * Optional date for which prices will be displayed
     */
    priceHistoryDate: string;

    /**
     * An optional locale. If presents overrides the calling user's<br>            locale.
     */
    locale: string;

    /**
     * If true and priceHistoryDate is set, all prices/costs changed on<br>            requested day will be highlighted
     */
    highlightDay: boolean;
  }

  /**
   * Parameters for PrimaryAttributeResetFunctionalAttributeDefV1
   */
  export interface PrimaryAttributeResetFunctionalAttributeDefV1Params {

    /**
     * Id of the parent productItem
     */
    productItemId: number;

    /**
     * Mandatory id of a functional attributeDef that will be reset to<br>            it's default values. If childAssociationId is filled, the<br>            functionalId must be the id of a functional attributeDef of a<br>            child productItem related by that association.
     */
    functionalId: number;

    /**
     * Optional id of child association. If null the functionalId must be<br>            a functionalLocal attribute on parent productItem
     */
    childAssociationId: number;
  }

  /**
   * Parameters for PrimaryAttributeResetPrimaryAttributeDefV1
   */
  export interface PrimaryAttributeResetPrimaryAttributeDefV1Params {

    /**
     * Id of the parent productItem
     */
    productItemId: number;

    /**
     * Optional. If not null only the functional attributeDefs steered by<br>            this value will be set to default.
     */
    primaryValue: string;

    /**
     * Id of the primary attributeValue
     */
    primaryId: number;
  }
}

export { PrimaryAttributeV1Service }
