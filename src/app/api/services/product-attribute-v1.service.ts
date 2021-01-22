/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AttributeDefAssociationDto } from '../models/attribute-def-association-dto';
import { ProductAttribute_AddAttributeDefToProductItemRestHolder } from '../models/product-attribute-_add-attribute-def-to-product-item-rest-holder';
import { MoneyItemDto } from '../models/money-item-dto';
import { IntegerHolder } from '../models/integer-holder';
import { AttributeDefQueryPageResultDto } from '../models/attribute-def-query-page-result-dto';
import { AttributeDefQueryPageParametersDto } from '../models/attribute-def-query-page-parameters-dto';
import { BulkStatusDto } from '../models/bulk-status-dto';
import { ProductAttribute_UpdateAttributeDefRestHolder } from '../models/product-attribute-_update-attribute-def-rest-holder';

/**
 * Manages attribute definitions and their prices connected to product items
 */
@Injectable({
  providedIn: 'root',
})
class ProductAttributeV1Service extends __BaseService {
  static readonly ProductAttributeAddAttributeDefToProductItemV1Path = '/v1/product/attribute_defs/add';
  static readonly ProductAttributeAddCostToAttributeDecimalV1Path = '/v1/product/attribute_defs/{attributeDefId}/attribute_decimal/costs/add';
  static readonly ProductAttributeAddCostToAttributeEnumValueV1Path = '/v1/product/attribute_defs/attribute_enum_values/{attributeEnumValueId}/costs/add';
  static readonly ProductAttributeFindAllAttributeDefsOfProductItemExV1Path = '/v1/product/attribute_defs/find_by_product_item';
  static readonly ProductAttributeFindAllCostsOfAttributeDecimalV1Path = '/v1/product/attribute_defs/{attributeDefId}/attribute_decimal/costs/find';
  static readonly ProductAttributeFindAllCostsOfAttributeEnumValueV1Path = '/v1/product/attribute_defs/attribute_enum_values/{attributeEnumValueId}/costs/find';
  static readonly ProductAttributeFindAttributeDefByIdExV1Path = '/v1/product/attribute_defs/{attributeDefId}/find';
  static readonly ProductAttributeGetBulkRemoveLimitV1Path = '/v1/product/attribute_defs/metadata/bulk_remove_limit';
  static readonly ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Path = '/v1/product/attribute_defs/query/page';
  static readonly ProductAttributeRemoveAttributeDefFromProductItemV1Path = '/v1/product/attribute_defs/{attributeDefId}/remove';
  static readonly ProductAttributeRemoveAttributeDefsFromProductItemV1Path = '/v1/product/attribute_defs/bulk/remove';
  static readonly ProductAttributeRemoveCostFromAttributeDecimalV1Path = '/v1/product/attribute_defs/{attributeDefId}/attribute_decimal/costs/remove';
  static readonly ProductAttributeRemoveCostFromAttributeEnumValueV1Path = '/v1/product/attribute_defs/attribute_enum_values/{attributeEnumValueId}/costs/remove';
  static readonly ProductAttributeUpdateAttributeDefV1Path = '/v1/product/attribute_defs/update';
  static readonly ProductAttributeUpdateAttributeDefPositionV1Path = '/v1/product/attribute_defs/{attributeDefId}/position/update';
  static readonly ProductAttributeUpdateAttributeDefsV1Path = '/v1/product/attribute_defs/bulk/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addAttributeDefToProductItem
   *
   * Adds a new attributeDef with an attributeType to a product item.<br> <br> <p><br> <b>Note </b>A new attribute def is created -> the id is set to NULL<br> <p><br> <p><br> The name of the attributeDef must be unique within the associated<br> productItem.<br> </p><br> <p><br> Attributes may only be added when status of productItem is PLANNED<br> </p><br> <p><br> For the position of the attributeDef within the productItem, following rules<br> apply:<br> </p><br> <ul><br> <li>If the position is greater than the list of attributeDefs, the<br> attributeDef is appended at the end</li><br> <li>A position <= 0 will put the attributeDef at the beginning</li><br> <li>Giving a position already taken, will move all following attributeDefs<br> one further to the back.</li><br> </ul>
   * @param data <b>attributeDef</b>: Attribute definition to create (without any association)<br><b>attributeType</b>: Concrete type of attribute (concrete inherited type) - mandatory<br><b>productItemId</b>: Id of product item the attribute definition is attached to<br>
   * @return OK - Returns the newly created attribute def including all associations
   */
  ProductAttributeAddAttributeDefToProductItemV1Response(data: ProductAttribute_AddAttributeDefToProductItemRestHolder): __Observable<__StrictHttpResponse<AttributeDefAssociationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttributeDefAssociationDto>;
      })
    );
  }
  /**
   * addAttributeDefToProductItem
   *
   * Adds a new attributeDef with an attributeType to a product item.<br> <br> <p><br> <b>Note </b>A new attribute def is created -> the id is set to NULL<br> <p><br> <p><br> The name of the attributeDef must be unique within the associated<br> productItem.<br> </p><br> <p><br> Attributes may only be added when status of productItem is PLANNED<br> </p><br> <p><br> For the position of the attributeDef within the productItem, following rules<br> apply:<br> </p><br> <ul><br> <li>If the position is greater than the list of attributeDefs, the<br> attributeDef is appended at the end</li><br> <li>A position <= 0 will put the attributeDef at the beginning</li><br> <li>Giving a position already taken, will move all following attributeDefs<br> one further to the back.</li><br> </ul>
   * @param data <b>attributeDef</b>: Attribute definition to create (without any association)<br><b>attributeType</b>: Concrete type of attribute (concrete inherited type) - mandatory<br><b>productItemId</b>: Id of product item the attribute definition is attached to<br>
   * @return OK - Returns the newly created attribute def including all associations
   */
  ProductAttributeAddAttributeDefToProductItemV1(data: ProductAttribute_AddAttributeDefToProductItemRestHolder): __Observable<AttributeDefAssociationDto> {
    return this.ProductAttributeAddAttributeDefToProductItemV1Response(data).pipe(
      __map(_r => _r.body as AttributeDefAssociationDto)
    );
  }

  /**
   * addCostToAttributeDecimal
   *
   * Adds a cost item to the attributeDecimalType with the given id of owning<br> attributeDef.<br> <p><br> <b>NOTE</b> If a money item with the same accountingType already exists it<br> will be replaced by the new one. That means this one is the valid money item<br> for that name from now on.<br> </p><br> <br> <p><br> The 'old' money item can be found in the history of money items with that<br> given accountingType.<br> </p><br> <br> <p><br> <b>NOTE-2</b> Only decimal attributeDefs of type FuntionalType.FUNCTIONAL can<br> have costs<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeAddCostToAttributeDecimalV1Params` containing the following parameters:
   *
   * - `remark`: Remark for change of price
   *
   * - `moneyItem`: The money item to be added
   *
   * - `attributeDefId`: Id of AttributeDef with functional attributeDecimalType
   *
   * @return OK - Returns list of prices currently valid costs
   */
  ProductAttributeAddCostToAttributeDecimalV1Response(params: ProductAttributeV1Service.ProductAttributeAddCostToAttributeDecimalV1Params): __Observable<__StrictHttpResponse<Array<MoneyItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.remark != null) __params = __params.set('remark', params.remark.toString());
    __body = params.moneyItem;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/${encodeURIComponent(params.attributeDefId)}/attribute_decimal/costs/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MoneyItemDto>>;
      })
    );
  }
  /**
   * addCostToAttributeDecimal
   *
   * Adds a cost item to the attributeDecimalType with the given id of owning<br> attributeDef.<br> <p><br> <b>NOTE</b> If a money item with the same accountingType already exists it<br> will be replaced by the new one. That means this one is the valid money item<br> for that name from now on.<br> </p><br> <br> <p><br> The 'old' money item can be found in the history of money items with that<br> given accountingType.<br> </p><br> <br> <p><br> <b>NOTE-2</b> Only decimal attributeDefs of type FuntionalType.FUNCTIONAL can<br> have costs<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeAddCostToAttributeDecimalV1Params` containing the following parameters:
   *
   * - `remark`: Remark for change of price
   *
   * - `moneyItem`: The money item to be added
   *
   * - `attributeDefId`: Id of AttributeDef with functional attributeDecimalType
   *
   * @return OK - Returns list of prices currently valid costs
   */
  ProductAttributeAddCostToAttributeDecimalV1(params: ProductAttributeV1Service.ProductAttributeAddCostToAttributeDecimalV1Params): __Observable<Array<MoneyItemDto>> {
    return this.ProductAttributeAddCostToAttributeDecimalV1Response(params).pipe(
      __map(_r => _r.body as Array<MoneyItemDto>)
    );
  }

  /**
   * addCostToAttributeEnumValue
   *
   * Adds a cost item to the attributeEnumValue with the given id.<br> <p><br> <b>NOTE</b> If a money item with the same accountingType already exists it<br> will be replaced by the new one. That means this one is the valid money item<br> for that name from now on.<br> </p><br> <p><br> The 'old' money item can be found in the history of money items with that<br> given accountingType.<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeAddCostToAttributeEnumValueV1Params` containing the following parameters:
   *
   * - `remark`: Remark for change of price
   *
   * - `moneyItem`: The money item to be added
   *
   * - `attributeEnumValueId`: If of AttributeEnumValue
   *
   * @return OK - Returns list of prices currently valid costs
   */
  ProductAttributeAddCostToAttributeEnumValueV1Response(params: ProductAttributeV1Service.ProductAttributeAddCostToAttributeEnumValueV1Params): __Observable<__StrictHttpResponse<Array<MoneyItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.remark != null) __params = __params.set('remark', params.remark.toString());
    __body = params.moneyItem;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/attribute_enum_values/${encodeURIComponent(params.attributeEnumValueId)}/costs/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MoneyItemDto>>;
      })
    );
  }
  /**
   * addCostToAttributeEnumValue
   *
   * Adds a cost item to the attributeEnumValue with the given id.<br> <p><br> <b>NOTE</b> If a money item with the same accountingType already exists it<br> will be replaced by the new one. That means this one is the valid money item<br> for that name from now on.<br> </p><br> <p><br> The 'old' money item can be found in the history of money items with that<br> given accountingType.<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeAddCostToAttributeEnumValueV1Params` containing the following parameters:
   *
   * - `remark`: Remark for change of price
   *
   * - `moneyItem`: The money item to be added
   *
   * - `attributeEnumValueId`: If of AttributeEnumValue
   *
   * @return OK - Returns list of prices currently valid costs
   */
  ProductAttributeAddCostToAttributeEnumValueV1(params: ProductAttributeV1Service.ProductAttributeAddCostToAttributeEnumValueV1Params): __Observable<Array<MoneyItemDto>> {
    return this.ProductAttributeAddCostToAttributeEnumValueV1Response(params).pipe(
      __map(_r => _r.body as Array<MoneyItemDto>)
    );
  }

  /**
   * findAllAttributeDefsOfProductItemEx
   *
   * Finds the attributeDefs attached to a productItem.<br> <br> <p><br> The attributeDefs are sorted by the position of the attribute def<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeFindAllAttributeDefsOfProductItemExV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of product item attribute defs are associated to
   *
   * - `pricesAndCosts`: Whether to add calculated (total) prices and costs. Local prices<br>            and costs are always added.
   *
   * @return OK - Returns A list of attribute defs.
   */
  ProductAttributeFindAllAttributeDefsOfProductItemExV1Response(params: ProductAttributeV1Service.ProductAttributeFindAllAttributeDefsOfProductItemExV1Params): __Observable<__StrictHttpResponse<Array<AttributeDefAssociationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.productItemId != null) __params = __params.set('productItemId', params.productItemId.toString());
    if (params.pricesAndCosts != null) __params = __params.set('pricesAndCosts', params.pricesAndCosts.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs/find_by_product_item`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AttributeDefAssociationDto>>;
      })
    );
  }
  /**
   * findAllAttributeDefsOfProductItemEx
   *
   * Finds the attributeDefs attached to a productItem.<br> <br> <p><br> The attributeDefs are sorted by the position of the attribute def<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeFindAllAttributeDefsOfProductItemExV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of product item attribute defs are associated to
   *
   * - `pricesAndCosts`: Whether to add calculated (total) prices and costs. Local prices<br>            and costs are always added.
   *
   * @return OK - Returns A list of attribute defs.
   */
  ProductAttributeFindAllAttributeDefsOfProductItemExV1(params: ProductAttributeV1Service.ProductAttributeFindAllAttributeDefsOfProductItemExV1Params): __Observable<Array<AttributeDefAssociationDto>> {
    return this.ProductAttributeFindAllAttributeDefsOfProductItemExV1Response(params).pipe(
      __map(_r => _r.body as Array<AttributeDefAssociationDto>)
    );
  }

  /**
   * findAllCostsOfAttributeDecimal
   *
   * Returns a set of all valid local costs for the given attributeDecimal<br> <br> <p><br> <b>NOTE-2</b> Only decimal attributeDefs of type FuntionalType.FUNCTIONAL can<br> have costs<br> </p>
   * @param attributeDefId Id of AttributeDef with functional attributeDecimalType
   * @return OK - Returns list of local costs
   */
  ProductAttributeFindAllCostsOfAttributeDecimalV1Response(attributeDefId: number): __Observable<__StrictHttpResponse<Array<MoneyItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs/${encodeURIComponent(attributeDefId)}/attribute_decimal/costs/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MoneyItemDto>>;
      })
    );
  }
  /**
   * findAllCostsOfAttributeDecimal
   *
   * Returns a set of all valid local costs for the given attributeDecimal<br> <br> <p><br> <b>NOTE-2</b> Only decimal attributeDefs of type FuntionalType.FUNCTIONAL can<br> have costs<br> </p>
   * @param attributeDefId Id of AttributeDef with functional attributeDecimalType
   * @return OK - Returns list of local costs
   */
  ProductAttributeFindAllCostsOfAttributeDecimalV1(attributeDefId: number): __Observable<Array<MoneyItemDto>> {
    return this.ProductAttributeFindAllCostsOfAttributeDecimalV1Response(attributeDefId).pipe(
      __map(_r => _r.body as Array<MoneyItemDto>)
    );
  }

  /**
   * findAllCostsOfAttributeEnumValue
   *
   * Returns a set of all valid local costs for the given attributeEnumValue
   * @param attributeEnumValueId Id of AttributeEnumValue
   * @return OK - Returns list of local costs
   */
  ProductAttributeFindAllCostsOfAttributeEnumValueV1Response(attributeEnumValueId: number): __Observable<__StrictHttpResponse<Array<MoneyItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs/attribute_enum_values/${encodeURIComponent(attributeEnumValueId)}/costs/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MoneyItemDto>>;
      })
    );
  }
  /**
   * findAllCostsOfAttributeEnumValue
   *
   * Returns a set of all valid local costs for the given attributeEnumValue
   * @param attributeEnumValueId Id of AttributeEnumValue
   * @return OK - Returns list of local costs
   */
  ProductAttributeFindAllCostsOfAttributeEnumValueV1(attributeEnumValueId: number): __Observable<Array<MoneyItemDto>> {
    return this.ProductAttributeFindAllCostsOfAttributeEnumValueV1Response(attributeEnumValueId).pipe(
      __map(_r => _r.body as Array<MoneyItemDto>)
    );
  }

  /**
   * findAttributeDefByIdEx
   *
   * Finds the attributeDef by its id.
   * @param params The `ProductAttributeV1Service.ProductAttributeFindAttributeDefByIdExV1Params` containing the following parameters:
   *
   * - `attributeDefId`: Id of attribute def to retrieve
   *
   * - `pricesAndCosts`: Whether to add calculated (total) prices and costs. Local prices<br>            and costs are always added.
   *
   * @return OK - Returns attribute def with it's associations.
   */
  ProductAttributeFindAttributeDefByIdExV1Response(params: ProductAttributeV1Service.ProductAttributeFindAttributeDefByIdExV1Params): __Observable<__StrictHttpResponse<AttributeDefAssociationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.pricesAndCosts != null) __params = __params.set('pricesAndCosts', params.pricesAndCosts.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs/${encodeURIComponent(params.attributeDefId)}/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttributeDefAssociationDto>;
      })
    );
  }
  /**
   * findAttributeDefByIdEx
   *
   * Finds the attributeDef by its id.
   * @param params The `ProductAttributeV1Service.ProductAttributeFindAttributeDefByIdExV1Params` containing the following parameters:
   *
   * - `attributeDefId`: Id of attribute def to retrieve
   *
   * - `pricesAndCosts`: Whether to add calculated (total) prices and costs. Local prices<br>            and costs are always added.
   *
   * @return OK - Returns attribute def with it's associations.
   */
  ProductAttributeFindAttributeDefByIdExV1(params: ProductAttributeV1Service.ProductAttributeFindAttributeDefByIdExV1Params): __Observable<AttributeDefAssociationDto> {
    return this.ProductAttributeFindAttributeDefByIdExV1Response(params).pipe(
      __map(_r => _r.body as AttributeDefAssociationDto)
    );
  }

  /**
   * getBulkRemoveLimit
   *
   * Returns the maximum number of attributes defs that can be removed at once
   * @return OK - Returns max size of productItemIds for removal
   */
  ProductAttributeGetBulkRemoveLimitV1Response(): __Observable<__StrictHttpResponse<IntegerHolder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/product/attribute_defs/metadata/bulk_remove_limit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IntegerHolder>;
      })
    );
  }
  /**
   * getBulkRemoveLimit
   *
   * Returns the maximum number of attributes defs that can be removed at once
   * @return OK - Returns max size of productItemIds for removal
   */
  ProductAttributeGetBulkRemoveLimitV1(): __Observable<IntegerHolder> {
    return this.ProductAttributeGetBulkRemoveLimitV1Response().pipe(
      __map(_r => _r.body as IntegerHolder)
    );
  }

  /**
   * queryPageOfAttributeDefsOfProductItem
   *
   * Query a specific page of attribute definitions attached to a product item.
   * @param params The `ProductAttributeV1Service.ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Params` containing the following parameters:
   *
   * - `productItemId`: ID of the product item the attribute definitions are attached to
   *
   * - `parameters`: Parameters specifying the query.
   *
   * @return OK - Returns Query result
   */
  ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Response(params: ProductAttributeV1Service.ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Params): __Observable<__StrictHttpResponse<AttributeDefQueryPageResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.productItemId != null) __params = __params.set('productItemId', params.productItemId.toString());
    __body = params.parameters;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/query/page`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttributeDefQueryPageResultDto>;
      })
    );
  }
  /**
   * queryPageOfAttributeDefsOfProductItem
   *
   * Query a specific page of attribute definitions attached to a product item.
   * @param params The `ProductAttributeV1Service.ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Params` containing the following parameters:
   *
   * - `productItemId`: ID of the product item the attribute definitions are attached to
   *
   * - `parameters`: Parameters specifying the query.
   *
   * @return OK - Returns Query result
   */
  ProductAttributeQueryPageOfAttributeDefsOfProductItemV1(params: ProductAttributeV1Service.ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Params): __Observable<AttributeDefQueryPageResultDto> {
    return this.ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Response(params).pipe(
      __map(_r => _r.body as AttributeDefQueryPageResultDto)
    );
  }

  /**
   * removeAttributeDefFromProductItem
   *
   * Removes the attribute def with the given id from the product item it is<br> attached to.<br><br> <p><br> The attribute def together with its associated child entities are deleted<br> from the database<br> </p><br><br> <p><br> <b>Removal is only allowed if the product item in which the attribute def are<br> located has the status PLANNED.</b><br> </p>
   * @param attributeDefId Item
   */
  ProductAttributeRemoveAttributeDefFromProductItemV1Response(attributeDefId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/attribute_defs/${encodeURIComponent(attributeDefId)}/remove`,
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
   * removeAttributeDefFromProductItem
   *
   * Removes the attribute def with the given id from the product item it is<br> attached to.<br><br> <p><br> The attribute def together with its associated child entities are deleted<br> from the database<br> </p><br><br> <p><br> <b>Removal is only allowed if the product item in which the attribute def are<br> located has the status PLANNED.</b><br> </p>
   * @param attributeDefId Item
   */
  ProductAttributeRemoveAttributeDefFromProductItemV1(attributeDefId: number): __Observable<null> {
    return this.ProductAttributeRemoveAttributeDefFromProductItemV1Response(attributeDefId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * removeAttributeDefsFromProductItem
   *
   * Remove multiple attribute defs from the product item it is attached to.<br><br> <p><br> <b>Removal is only allowed if the product item in which the attribute defs<br> are located has the status PLANNED.</b><br> </p>
   * @param attributeDefIds A list of attribute def ids
   * @return OK - Returns the bulk removal status
   */
  ProductAttributeRemoveAttributeDefsFromProductItemV1Response(attributeDefIds: Array<number>): __Observable<__StrictHttpResponse<BulkStatusDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attributeDefIds;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/bulk/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BulkStatusDto>;
      })
    );
  }
  /**
   * removeAttributeDefsFromProductItem
   *
   * Remove multiple attribute defs from the product item it is attached to.<br><br> <p><br> <b>Removal is only allowed if the product item in which the attribute defs<br> are located has the status PLANNED.</b><br> </p>
   * @param attributeDefIds A list of attribute def ids
   * @return OK - Returns the bulk removal status
   */
  ProductAttributeRemoveAttributeDefsFromProductItemV1(attributeDefIds: Array<number>): __Observable<BulkStatusDto> {
    return this.ProductAttributeRemoveAttributeDefsFromProductItemV1Response(attributeDefIds).pipe(
      __map(_r => _r.body as BulkStatusDto)
    );
  }

  /**
   * removeCostFromAttributeDecimal
   *
   * Removes the current cost with the given name from list of current costs<br> <p><br> <b>NOTE</b> If a money item with that name does not exist, the command will<br> be ignored.<br> </p><br> <p><br> Removing a money item will not remove it from database even though it's not<br> found in the list of current cost items anymore. It can be found by asking<br> for the history of cost items with the name.<br> </p><br> <br> <p><br> <b>NOTE-2</b> Only decimal attributeDefs of type FuntionalType.FUNCTIONAL can<br> have costs<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeDecimalV1Params` containing the following parameters:
   *
   * - `remark`: Remark for removal
   *
   * - `attributeDefId`: Id of AttributeDef with functional attributeDecimalType
   *
   * - `accountingTypeId`: Id of accountingType of moneyItem to remove
   *
   * @return OK - Returns list of prices currently valid prices
   */
  ProductAttributeRemoveCostFromAttributeDecimalV1Response(params: ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeDecimalV1Params): __Observable<__StrictHttpResponse<Array<MoneyItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.remark != null) __params = __params.set('remark', params.remark.toString());

    if (params.accountingTypeId != null) __params = __params.set('accountingTypeId', params.accountingTypeId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/attribute_defs/${encodeURIComponent(params.attributeDefId)}/attribute_decimal/costs/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MoneyItemDto>>;
      })
    );
  }
  /**
   * removeCostFromAttributeDecimal
   *
   * Removes the current cost with the given name from list of current costs<br> <p><br> <b>NOTE</b> If a money item with that name does not exist, the command will<br> be ignored.<br> </p><br> <p><br> Removing a money item will not remove it from database even though it's not<br> found in the list of current cost items anymore. It can be found by asking<br> for the history of cost items with the name.<br> </p><br> <br> <p><br> <b>NOTE-2</b> Only decimal attributeDefs of type FuntionalType.FUNCTIONAL can<br> have costs<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeDecimalV1Params` containing the following parameters:
   *
   * - `remark`: Remark for removal
   *
   * - `attributeDefId`: Id of AttributeDef with functional attributeDecimalType
   *
   * - `accountingTypeId`: Id of accountingType of moneyItem to remove
   *
   * @return OK - Returns list of prices currently valid prices
   */
  ProductAttributeRemoveCostFromAttributeDecimalV1(params: ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeDecimalV1Params): __Observable<Array<MoneyItemDto>> {
    return this.ProductAttributeRemoveCostFromAttributeDecimalV1Response(params).pipe(
      __map(_r => _r.body as Array<MoneyItemDto>)
    );
  }

  /**
   * removeCostFromAttributeEnumValue
   *
   * Removes the current cost with the given name from list of current costs<br> <p><br> <b>NOTE</b> If a money item with that name does not exist, the command will<br> be ignored.<br> </p><br> <p><br> Removing a money item will not remove it from database even though it's not<br> found in the list of current cost items anymore. It can be found by asking<br> for the history of cost items with the name.<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeEnumValueV1Params` containing the following parameters:
   *
   * - `remark`: Remark for removal
   *
   * - `attributeEnumValueId`: If of AttributeEnumValue
   *
   * - `accountingTypeId`: Id of accountingType of moneyItem to remove
   *
   * @return OK - Returns list of prices currently valid prices
   */
  ProductAttributeRemoveCostFromAttributeEnumValueV1Response(params: ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeEnumValueV1Params): __Observable<__StrictHttpResponse<Array<MoneyItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.remark != null) __params = __params.set('remark', params.remark.toString());

    if (params.accountingTypeId != null) __params = __params.set('accountingTypeId', params.accountingTypeId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/product/attribute_defs/attribute_enum_values/${encodeURIComponent(params.attributeEnumValueId)}/costs/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MoneyItemDto>>;
      })
    );
  }
  /**
   * removeCostFromAttributeEnumValue
   *
   * Removes the current cost with the given name from list of current costs<br> <p><br> <b>NOTE</b> If a money item with that name does not exist, the command will<br> be ignored.<br> </p><br> <p><br> Removing a money item will not remove it from database even though it's not<br> found in the list of current cost items anymore. It can be found by asking<br> for the history of cost items with the name.<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeEnumValueV1Params` containing the following parameters:
   *
   * - `remark`: Remark for removal
   *
   * - `attributeEnumValueId`: If of AttributeEnumValue
   *
   * - `accountingTypeId`: Id of accountingType of moneyItem to remove
   *
   * @return OK - Returns list of prices currently valid prices
   */
  ProductAttributeRemoveCostFromAttributeEnumValueV1(params: ProductAttributeV1Service.ProductAttributeRemoveCostFromAttributeEnumValueV1Params): __Observable<Array<MoneyItemDto>> {
    return this.ProductAttributeRemoveCostFromAttributeEnumValueV1Response(params).pipe(
      __map(_r => _r.body as Array<MoneyItemDto>)
    );
  }

  /**
   * updateAttributeDef
   *
   * Update an attribute definition.<br> <br> <p><br> The name and the inheritable flag of an attributeDef can not be changed.<br> </p><br> <br> <p><br> Attributes may only be changed when status of associated productItem is<br> PLANNED.<br> </p><br> <br> <p><br> The position of the attributeDef will not be changed. Used special function<br> for that.<br> </p><br> <br> <p><br> Changing the <code>AttributeType</code> the following rules apply:<br> </p><br> <ul><br> <li>The values of attributeEnumValue must not be changed. An existing value<br> can be removed from the list and new values can be added, but existing values<br> cannot be changed.</li><br> <li>The concrete entity type of <code>AttributeType</code> must not be<br> changed and also its id must remain unchanged.</li><br> <li>Replacing an <code>AttributeEnumType</code> is not allowed when already<br> used in primary attribute relations.</li><br> <li>Removing an <code>AttributeEnumValue</code> will remove all related<br> primary attribute relations as well.</li><br> </ul><br> <br> <p><br> The <code>functional</code> field on <code>AttributeDef</code> must not be<br> changed from <code>true</code> to <code>false</code> when the<br> <code>AttributeDef</code> is used in any primary attribute relations.<br> </p>
   * @param data <b>attributeDef</b>: Base attributeDef to update<br><b>attributeType</b>: Concrete type of attribute (concrete inherited type) - mandatory<br>
   * @return OK - Returns the changed attribute def together with its associated entities
   */
  ProductAttributeUpdateAttributeDefV1Response(data: ProductAttribute_UpdateAttributeDefRestHolder): __Observable<__StrictHttpResponse<AttributeDefAssociationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AttributeDefAssociationDto>;
      })
    );
  }
  /**
   * updateAttributeDef
   *
   * Update an attribute definition.<br> <br> <p><br> The name and the inheritable flag of an attributeDef can not be changed.<br> </p><br> <br> <p><br> Attributes may only be changed when status of associated productItem is<br> PLANNED.<br> </p><br> <br> <p><br> The position of the attributeDef will not be changed. Used special function<br> for that.<br> </p><br> <br> <p><br> Changing the <code>AttributeType</code> the following rules apply:<br> </p><br> <ul><br> <li>The values of attributeEnumValue must not be changed. An existing value<br> can be removed from the list and new values can be added, but existing values<br> cannot be changed.</li><br> <li>The concrete entity type of <code>AttributeType</code> must not be<br> changed and also its id must remain unchanged.</li><br> <li>Replacing an <code>AttributeEnumType</code> is not allowed when already<br> used in primary attribute relations.</li><br> <li>Removing an <code>AttributeEnumValue</code> will remove all related<br> primary attribute relations as well.</li><br> </ul><br> <br> <p><br> The <code>functional</code> field on <code>AttributeDef</code> must not be<br> changed from <code>true</code> to <code>false</code> when the<br> <code>AttributeDef</code> is used in any primary attribute relations.<br> </p>
   * @param data <b>attributeDef</b>: Base attributeDef to update<br><b>attributeType</b>: Concrete type of attribute (concrete inherited type) - mandatory<br>
   * @return OK - Returns the changed attribute def together with its associated entities
   */
  ProductAttributeUpdateAttributeDefV1(data: ProductAttribute_UpdateAttributeDefRestHolder): __Observable<AttributeDefAssociationDto> {
    return this.ProductAttributeUpdateAttributeDefV1Response(data).pipe(
      __map(_r => _r.body as AttributeDefAssociationDto)
    );
  }

  /**
   * updateAttributeDefPosition
   *
   * Moves an attributeDef within the list of attributeDefs of a productItem.<br> <p><br> A position <= 0 will move the attributeDef at the beginning of the list.<br> </p><br> <p><br> A position >= the size of the list will move it to the end of the list.<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeUpdateAttributeDefPositionV1Params` containing the following parameters:
   *
   * - `newPosition`: New desired position of attributeDef
   *
   * - `attributeDefId`: Id attributeDef to move
   *
   * @return OK - Returns The new ordered list of attributeDefs.
   */
  ProductAttributeUpdateAttributeDefPositionV1Response(params: ProductAttributeV1Service.ProductAttributeUpdateAttributeDefPositionV1Params): __Observable<__StrictHttpResponse<Array<AttributeDefAssociationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.newPosition != null) __params = __params.set('newPosition', params.newPosition.toString());

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/${encodeURIComponent(params.attributeDefId)}/position/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AttributeDefAssociationDto>>;
      })
    );
  }
  /**
   * updateAttributeDefPosition
   *
   * Moves an attributeDef within the list of attributeDefs of a productItem.<br> <p><br> A position <= 0 will move the attributeDef at the beginning of the list.<br> </p><br> <p><br> A position >= the size of the list will move it to the end of the list.<br> </p>
   * @param params The `ProductAttributeV1Service.ProductAttributeUpdateAttributeDefPositionV1Params` containing the following parameters:
   *
   * - `newPosition`: New desired position of attributeDef
   *
   * - `attributeDefId`: Id attributeDef to move
   *
   * @return OK - Returns The new ordered list of attributeDefs.
   */
  ProductAttributeUpdateAttributeDefPositionV1(params: ProductAttributeV1Service.ProductAttributeUpdateAttributeDefPositionV1Params): __Observable<Array<AttributeDefAssociationDto>> {
    return this.ProductAttributeUpdateAttributeDefPositionV1Response(params).pipe(
      __map(_r => _r.body as Array<AttributeDefAssociationDto>)
    );
  }

  /**
   * updateAttributeDefs
   *
   * Update a list of AttributeDefs of a product item.<br> <br> <p><br> Items existing on database will be updated, new items will be inserted and<br> missing items will be removed<br> <p>
   * @param params The `ProductAttributeV1Service.ProductAttributeUpdateAttributeDefsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of owning productItem
   *
   * - `attributeDefs`: List of attributeDef to update
   *
   * @return OK - Returns The new ordered list of attributeDefs.
   */
  ProductAttributeUpdateAttributeDefsV1Response(params: ProductAttributeV1Service.ProductAttributeUpdateAttributeDefsV1Params): __Observable<__StrictHttpResponse<Array<AttributeDefAssociationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.productItemId != null) __params = __params.set('productItemId', params.productItemId.toString());
    __body = params.attributeDefs;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/product/attribute_defs/bulk/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AttributeDefAssociationDto>>;
      })
    );
  }
  /**
   * updateAttributeDefs
   *
   * Update a list of AttributeDefs of a product item.<br> <br> <p><br> Items existing on database will be updated, new items will be inserted and<br> missing items will be removed<br> <p>
   * @param params The `ProductAttributeV1Service.ProductAttributeUpdateAttributeDefsV1Params` containing the following parameters:
   *
   * - `productItemId`: Id of owning productItem
   *
   * - `attributeDefs`: List of attributeDef to update
   *
   * @return OK - Returns The new ordered list of attributeDefs.
   */
  ProductAttributeUpdateAttributeDefsV1(params: ProductAttributeV1Service.ProductAttributeUpdateAttributeDefsV1Params): __Observable<Array<AttributeDefAssociationDto>> {
    return this.ProductAttributeUpdateAttributeDefsV1Response(params).pipe(
      __map(_r => _r.body as Array<AttributeDefAssociationDto>)
    );
  }
}

module ProductAttributeV1Service {

  /**
   * Parameters for ProductAttributeAddCostToAttributeDecimalV1
   */
  export interface ProductAttributeAddCostToAttributeDecimalV1Params {

    /**
     * Remark for change of price
     */
    remark: string;

    /**
     * The money item to be added
     */
    moneyItem: MoneyItemDto;

    /**
     * Id of AttributeDef with functional attributeDecimalType
     */
    attributeDefId: number;
  }

  /**
   * Parameters for ProductAttributeAddCostToAttributeEnumValueV1
   */
  export interface ProductAttributeAddCostToAttributeEnumValueV1Params {

    /**
     * Remark for change of price
     */
    remark: string;

    /**
     * The money item to be added
     */
    moneyItem: MoneyItemDto;

    /**
     * If of AttributeEnumValue
     */
    attributeEnumValueId: number;
  }

  /**
   * Parameters for ProductAttributeFindAllAttributeDefsOfProductItemExV1
   */
  export interface ProductAttributeFindAllAttributeDefsOfProductItemExV1Params {

    /**
     * Id of product item attribute defs are associated to
     */
    productItemId: number;

    /**
     * Whether to add calculated (total) prices and costs. Local prices<br>            and costs are always added.
     */
    pricesAndCosts?: boolean;
  }

  /**
   * Parameters for ProductAttributeFindAttributeDefByIdExV1
   */
  export interface ProductAttributeFindAttributeDefByIdExV1Params {

    /**
     * Id of attribute def to retrieve
     */
    attributeDefId: number;

    /**
     * Whether to add calculated (total) prices and costs. Local prices<br>            and costs are always added.
     */
    pricesAndCosts?: boolean;
  }

  /**
   * Parameters for ProductAttributeQueryPageOfAttributeDefsOfProductItemV1
   */
  export interface ProductAttributeQueryPageOfAttributeDefsOfProductItemV1Params {

    /**
     * ID of the product item the attribute definitions are attached to
     */
    productItemId: number;

    /**
     * Parameters specifying the query.
     */
    parameters: AttributeDefQueryPageParametersDto;
  }

  /**
   * Parameters for ProductAttributeRemoveCostFromAttributeDecimalV1
   */
  export interface ProductAttributeRemoveCostFromAttributeDecimalV1Params {

    /**
     * Remark for removal
     */
    remark: string;

    /**
     * Id of AttributeDef with functional attributeDecimalType
     */
    attributeDefId: number;

    /**
     * Id of accountingType of moneyItem to remove
     */
    accountingTypeId: number;
  }

  /**
   * Parameters for ProductAttributeRemoveCostFromAttributeEnumValueV1
   */
  export interface ProductAttributeRemoveCostFromAttributeEnumValueV1Params {

    /**
     * Remark for removal
     */
    remark: string;

    /**
     * If of AttributeEnumValue
     */
    attributeEnumValueId: number;

    /**
     * Id of accountingType of moneyItem to remove
     */
    accountingTypeId: number;
  }

  /**
   * Parameters for ProductAttributeUpdateAttributeDefPositionV1
   */
  export interface ProductAttributeUpdateAttributeDefPositionV1Params {

    /**
     * New desired position of attributeDef
     */
    newPosition: number;

    /**
     * Id attributeDef to move
     */
    attributeDefId: number;
  }

  /**
   * Parameters for ProductAttributeUpdateAttributeDefsV1
   */
  export interface ProductAttributeUpdateAttributeDefsV1Params {

    /**
     * Id of owning productItem
     */
    productItemId: number;

    /**
     * List of attributeDef to update
     */
    attributeDefs: Array<AttributeDefAssociationDto>;
  }
}

export { ProductAttributeV1Service }
