/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PartnerDto } from '../models/partner-dto';
import { PartnerDataSelectorDto } from '../models/partner-data-selector-dto';
import { ContactTypeDto } from '../models/contact-type-dto';
import { PartnerRetrievalController_V2_FindByExternalRefRestHolder } from '../models/partner-retrieval-controller-_v2_find-by-external-ref-rest-holder';
import { ContactDto } from '../models/contact-dto';
import { ContactDataSelectorDto } from '../models/contact-data-selector-dto';
import { SimplePartnerDto } from '../models/simple-partner-dto';
import { UnderpinningContractDto } from '../models/underpinning-contract-dto';
import { LocationDto } from '../models/location-dto';
import { PartnerRetrievalController_V2_GetContactByExternalRefRestHolder } from '../models/partner-retrieval-controller-_v2_get-contact-by-external-ref-rest-holder';
import { ContactQueryResultDto } from '../models/contact-query-result-dto';
import { ContactQueryPageResultDto } from '../models/contact-query-page-result-dto';
import { ContactQueryPageParametersDto } from '../models/contact-query-page-parameters-dto';
import { PartnerQueryResultDto } from '../models/partner-query-result-dto';
import { LocationQueryPageResultDto } from '../models/location-query-page-result-dto';
import { LocationQueryPageParametersDto } from '../models/location-query-page-parameters-dto';
import { PartnerQueryPageResultDto } from '../models/partner-query-page-result-dto';
import { PartnerQueryPageParametersDto } from '../models/partner-query-page-parameters-dto';

/**
 * Functions used to find and retrieve objects connected with the partner<br> <br> <p><br> Functionality overview:<br> </p><br> <ul><br> <li>Find/get partners with primary, alternate location and contacts</li><br> <li>Find/get alternate locations of a partner</li><br> <li>Find/get contacts of partners</li><br> <li>Find/get partner roles</li><br> <li>Get all contactTypes</li><br> </ul>
 */
@Injectable({
  providedIn: 'root',
})
class PartnerRetrievalV2Service extends __BaseService {
  static readonly PartnerRetrievalFindAllV2Path = '/v2/partners/find';
  static readonly PartnerRetrievalFindAllByTimestampV2Path = '/v2/partners/find_by_timestamp';
  static readonly PartnerRetrievalFindAllContactTypesV2Path = '/v2/partners/contact/types/find';
  static readonly PartnerRetrievalFindByContactV2Path = '/v2/partners/find_by_contact';
  static readonly PartnerRetrievalFindByExternalRefV2Path = '/v2/partners/find_by_ext_ref';
  static readonly PartnerRetrievalFindByIdV2Path = '/v2/partners/{partnerId}/find';
  static readonly PartnerRetrievalFindByNameV2Path = '/v2/partners/find_by_name';
  static readonly PartnerRetrievalFindByQueryV2Path = '/v2/partners/query';
  static readonly PartnerRetrievalFindContactByIdV2Path = '/v2/partners/contacts/{contactId}/find';
  static readonly PartnerRetrievalFindContactsByQueryV2Path = '/v2/partners/{partnerId}/contacts/find_by_query';
  static readonly PartnerRetrievalFindSimplePartnerByIdV2Path = '/v2/partners/{partnerId}/find_simple';
  static readonly PartnerRetrievalFindUnderpinningContractByIdV2Path = '/v2/partners/underpinning_contracts/{underpinningContractId}';
  static readonly PartnerRetrievalFindUnderpinningContractsByQueryV2Path = '/v2/partners/{partnerId}/underpinning_contracts/query';
  static readonly PartnerRetrievalGetAContactV2Path = '/v2/partners/{partnerId}/contacts/find_one';
  static readonly PartnerRetrievalGetAlternateLocationsV2Path = '/v2/partners/{partnerId}/locations/alternate/find';
  static readonly PartnerRetrievalGetContactByExternalRefV2Path = '/v2/partners/contacts/find_by_ext_ref';
  static readonly PartnerRetrievalGetPrimaryLocationV2Path = '/v2/partners/{partnerId}/locations/primary/find';
  static readonly PartnerRetrievalGetUnderpinningContractsV2Path = '/v2/partners/{partnerId}/underpinning_contracts/find';
  static readonly PartnerRetrievalQueryContactsV2Path = '/v2/partners/{partnerId}/contacts/query';
  static readonly PartnerRetrievalQueryContactsMoreV2Path = '/v2/partners/contacts/query/more';
  static readonly PartnerRetrievalQueryContactsPageV2Path = '/v2/partners/{partnerId}/contacts/query/page';
  static readonly PartnerRetrievalQueryFirstV2Path = '/v2/partners/query_first';
  static readonly PartnerRetrievalQueryLocationsPageV2Path = '/v2/partners/{partnerId}/locations/query/page';
  static readonly PartnerRetrievalQueryMoreV2Path = '/v2/partners/query_more';
  static readonly PartnerRetrievalQueryPartnersPageV2Path = '/v2/partners/query_page';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAll
   *
   * Finds all partners in the current tenant.<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindAllV2Params` containing the following parameters:
   *
   * - `retrievalStrategy`: Limits the partners retrieved to the ones that have the specified<br>            roles associated
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * - `activeRolesOnly`: If true only partners with an active PartnerRole are returned
   *
   * @return OK - Returns A list of partners
   */
  PartnerRetrievalFindAllV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindAllV2Params): __Observable<__StrictHttpResponse<Array<PartnerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.retrievalStrategy != null) __params = __params.set('retrievalStrategy', params.retrievalStrategy.toString());
    __body = params.dataSelector;
    if (params.activeRolesOnly != null) __params = __params.set('activeRolesOnly', params.activeRolesOnly.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PartnerDto>>;
      })
    );
  }
  /**
   * findAll
   *
   * Finds all partners in the current tenant.<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindAllV2Params` containing the following parameters:
   *
   * - `retrievalStrategy`: Limits the partners retrieved to the ones that have the specified<br>            roles associated
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * - `activeRolesOnly`: If true only partners with an active PartnerRole are returned
   *
   * @return OK - Returns A list of partners
   */
  PartnerRetrievalFindAllV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindAllV2Params): __Observable<Array<PartnerDto>> {
    return this.PartnerRetrievalFindAllV2Response(params).pipe(
      __map(_r => _r.body as Array<PartnerDto>)
    );
  }

  /**
   * findAllByTimestamp
   *
   * Finds all partners in the current tenant that were created or modified after<br> the passed timestamp.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindAllByTimestampV2Params` containing the following parameters:
   *
   * - `timestamp`: A timestamp value, must not be null
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of partner
   */
  PartnerRetrievalFindAllByTimestampV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindAllByTimestampV2Params): __Observable<__StrictHttpResponse<Array<PartnerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.timestamp != null) __params = __params.set('timestamp', params.timestamp.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/find_by_timestamp`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PartnerDto>>;
      })
    );
  }
  /**
   * findAllByTimestamp
   *
   * Finds all partners in the current tenant that were created or modified after<br> the passed timestamp.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindAllByTimestampV2Params` containing the following parameters:
   *
   * - `timestamp`: A timestamp value, must not be null
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of partner
   */
  PartnerRetrievalFindAllByTimestampV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindAllByTimestampV2Params): __Observable<Array<PartnerDto>> {
    return this.PartnerRetrievalFindAllByTimestampV2Response(params).pipe(
      __map(_r => _r.body as Array<PartnerDto>)
    );
  }

  /**
   * findAllContactTypes
   *
   * Finds all available contactTypes.
   * @return OK - Returns A list of all available contactTypes
   */
  PartnerRetrievalFindAllContactTypesV2Response(): __Observable<__StrictHttpResponse<Array<ContactTypeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v2/partners/contact/types/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactTypeDto>>;
      })
    );
  }
  /**
   * findAllContactTypes
   *
   * Finds all available contactTypes.
   * @return OK - Returns A list of all available contactTypes
   */
  PartnerRetrievalFindAllContactTypesV2(): __Observable<Array<ContactTypeDto>> {
    return this.PartnerRetrievalFindAllContactTypesV2Response().pipe(
      __map(_r => _r.body as Array<ContactTypeDto>)
    );
  }

  /**
   * findByContact
   *
   * Finds a partner by one of its contacts<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded. Since we search by contacts, the contact data is always loaded.<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByContactV2Params` containing the following parameters:
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * - `contactId`: The id of the contact
   *
   * @return OK - Returns The retrieved partner
   */
  PartnerRetrievalFindByContactV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindByContactV2Params): __Observable<__StrictHttpResponse<PartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.dataSelector;
    if (params.contactId != null) __params = __params.set('contactId', params.contactId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/find_by_contact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PartnerDto>;
      })
    );
  }
  /**
   * findByContact
   *
   * Finds a partner by one of its contacts<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded. Since we search by contacts, the contact data is always loaded.<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByContactV2Params` containing the following parameters:
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * - `contactId`: The id of the contact
   *
   * @return OK - Returns The retrieved partner
   */
  PartnerRetrievalFindByContactV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindByContactV2Params): __Observable<PartnerDto> {
    return this.PartnerRetrievalFindByContactV2Response(params).pipe(
      __map(_r => _r.body as PartnerDto)
    );
  }

  /**
   * findByExternalRef
   *
   * Finds a partner by its external ref.
   * @param partnerRetrievalController_V2_FindByExternalRefRestHolder <b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response<br><b>externalRef</b>: A partner external ref<br>
   * @return OK - Returns A partner
   */
  PartnerRetrievalFindByExternalRefV2Response(partnerRetrievalControllerV2FindByExternalRefRestHolder: PartnerRetrievalController_V2_FindByExternalRefRestHolder): __Observable<__StrictHttpResponse<PartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = partnerRetrievalControllerV2FindByExternalRefRestHolder;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/find_by_ext_ref`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PartnerDto>;
      })
    );
  }
  /**
   * findByExternalRef
   *
   * Finds a partner by its external ref.
   * @param partnerRetrievalController_V2_FindByExternalRefRestHolder <b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response<br><b>externalRef</b>: A partner external ref<br>
   * @return OK - Returns A partner
   */
  PartnerRetrievalFindByExternalRefV2(partnerRetrievalControllerV2FindByExternalRefRestHolder: PartnerRetrievalController_V2_FindByExternalRefRestHolder): __Observable<PartnerDto> {
    return this.PartnerRetrievalFindByExternalRefV2Response(partnerRetrievalControllerV2FindByExternalRefRestHolder).pipe(
      __map(_r => _r.body as PartnerDto)
    );
  }

  /**
   * findById
   *
   * Finds a partner by its id.<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded<br> </p><br> <br> <p><br> If a company logo exists for the requested partner, the logo's image URI will<br> be added to the <code>PartnerDto</code>.<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByIdV2Params` containing the following parameters:
   *
   * - `partnerId`: A partner id
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A partner
   */
  PartnerRetrievalFindByIdV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindByIdV2Params): __Observable<__StrictHttpResponse<PartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/${encodeURIComponent(params.partnerId)}/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PartnerDto>;
      })
    );
  }
  /**
   * findById
   *
   * Finds a partner by its id.<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded<br> </p><br> <br> <p><br> If a company logo exists for the requested partner, the logo's image URI will<br> be added to the <code>PartnerDto</code>.<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByIdV2Params` containing the following parameters:
   *
   * - `partnerId`: A partner id
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A partner
   */
  PartnerRetrievalFindByIdV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindByIdV2Params): __Observable<PartnerDto> {
    return this.PartnerRetrievalFindByIdV2Response(params).pipe(
      __map(_r => _r.body as PartnerDto)
    );
  }

  /**
   * findByName
   *
   * Finds all partners with the given name.<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded<br> </p><br> <p><br> In the name the '%' can be used as a wildcard character.<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByNameV2Params` containing the following parameters:
   *
   * - `name`: Of the partner to search for
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of partnerDto's or an empty list if no partner exist with the<br>         given name
   */
  PartnerRetrievalFindByNameV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindByNameV2Params): __Observable<__StrictHttpResponse<Array<PartnerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/find_by_name`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PartnerDto>>;
      })
    );
  }
  /**
   * findByName
   *
   * Finds all partners with the given name.<br> <br> <p><br> <b>Note:</b> Depending the load parameters set not all of the partner is<br> loaded<br> </p><br> <p><br> In the name the '%' can be used as a wildcard character.<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByNameV2Params` containing the following parameters:
   *
   * - `name`: Of the partner to search for
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of partnerDto's or an empty list if no partner exist with the<br>         given name
   */
  PartnerRetrievalFindByNameV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindByNameV2Params): __Observable<Array<PartnerDto>> {
    return this.PartnerRetrievalFindByNameV2Response(params).pipe(
      __map(_r => _r.body as Array<PartnerDto>)
    );
  }

  /**
   * findByQuery
   *
   * Finds all partners in the current tenant using a spql query.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByQueryV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of partners
   */
  PartnerRetrievalFindByQueryV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindByQueryV2Params): __Observable<__StrictHttpResponse<Array<PartnerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PartnerDto>>;
      })
    );
  }
  /**
   * findByQuery
   *
   * Finds all partners in the current tenant using a spql query.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindByQueryV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of partners
   */
  PartnerRetrievalFindByQueryV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindByQueryV2Params): __Observable<Array<PartnerDto>> {
    return this.PartnerRetrievalFindByQueryV2Response(params).pipe(
      __map(_r => _r.body as Array<PartnerDto>)
    );
  }

  /**
   * findContactById
   *
   * Finds a contact by its ID.<br> <br> <p><br> <b>Note:</b> Depending the data selector set not all of the contact is loaded<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindContactByIdV2Params` containing the following parameters:
   *
   * - `dataSelector`: A data selector containing information about what data should be<br>            loaded.
   *
   * - `contactId`: A contact ID
   *
   * @return OK - Returns A contact
   */
  PartnerRetrievalFindContactByIdV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindContactByIdV2Params): __Observable<__StrictHttpResponse<ContactDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.dataSelector;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/contacts/${encodeURIComponent(params.contactId)}/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactDto>;
      })
    );
  }
  /**
   * findContactById
   *
   * Finds a contact by its ID.<br> <br> <p><br> <b>Note:</b> Depending the data selector set not all of the contact is loaded<br> </p>
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindContactByIdV2Params` containing the following parameters:
   *
   * - `dataSelector`: A data selector containing information about what data should be<br>            loaded.
   *
   * - `contactId`: A contact ID
   *
   * @return OK - Returns A contact
   */
  PartnerRetrievalFindContactByIdV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindContactByIdV2Params): __Observable<ContactDto> {
    return this.PartnerRetrievalFindContactByIdV2Response(params).pipe(
      __map(_r => _r.body as ContactDto)
    );
  }

  /**
   * findContactsByQuery
   *
   * Finds all contacts of a partner using a spql search query.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindContactsByQueryV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `partnerId`: A partner id
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of contracts
   */
  PartnerRetrievalFindContactsByQueryV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindContactsByQueryV2Params): __Observable<__StrictHttpResponse<Array<ContactDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/${encodeURIComponent(params.partnerId)}/contacts/find_by_query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ContactDto>>;
      })
    );
  }
  /**
   * findContactsByQuery
   *
   * Finds all contacts of a partner using a spql search query.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindContactsByQueryV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `partnerId`: A partner id
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A list of contracts
   */
  PartnerRetrievalFindContactsByQueryV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindContactsByQueryV2Params): __Observable<Array<ContactDto>> {
    return this.PartnerRetrievalFindContactsByQueryV2Response(params).pipe(
      __map(_r => _r.body as Array<ContactDto>)
    );
  }

  /**
   * findSimplePartnerById
   *
   * Finds a partner by its id and returns it's simple representation.<br> <br> <p><br> <b>Note:</b> Only the base partner information is loaded<br> </p>
   * @param partnerId A partner id
   * @return OK - Returns The simple representation of a partner
   */
  PartnerRetrievalFindSimplePartnerByIdV2Response(partnerId: number): __Observable<__StrictHttpResponse<SimplePartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v2/partners/${encodeURIComponent(partnerId)}/find_simple`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SimplePartnerDto>;
      })
    );
  }
  /**
   * findSimplePartnerById
   *
   * Finds a partner by its id and returns it's simple representation.<br> <br> <p><br> <b>Note:</b> Only the base partner information is loaded<br> </p>
   * @param partnerId A partner id
   * @return OK - Returns The simple representation of a partner
   */
  PartnerRetrievalFindSimplePartnerByIdV2(partnerId: number): __Observable<SimplePartnerDto> {
    return this.PartnerRetrievalFindSimplePartnerByIdV2Response(partnerId).pipe(
      __map(_r => _r.body as SimplePartnerDto)
    );
  }

  /**
   * findUnderpinningContractById
   *
   * Finds an underpinning contract by its id
   * @param underpinningContractId An underpinning contract id
   * @return OK - Returns An underpinning contract
   */
  PartnerRetrievalFindUnderpinningContractByIdV2Response(underpinningContractId: number): __Observable<__StrictHttpResponse<UnderpinningContractDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v2/partners/underpinning_contracts/${encodeURIComponent(underpinningContractId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UnderpinningContractDto>;
      })
    );
  }
  /**
   * findUnderpinningContractById
   *
   * Finds an underpinning contract by its id
   * @param underpinningContractId An underpinning contract id
   * @return OK - Returns An underpinning contract
   */
  PartnerRetrievalFindUnderpinningContractByIdV2(underpinningContractId: number): __Observable<UnderpinningContractDto> {
    return this.PartnerRetrievalFindUnderpinningContractByIdV2Response(underpinningContractId).pipe(
      __map(_r => _r.body as UnderpinningContractDto)
    );
  }

  /**
   * findUnderpinningContractsByQuery
   *
   * Returns all underpinning contracts that are assigned to a partner using a<br> spql search query.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindUnderpinningContractsByQueryV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `partnerId`: A partner id
   *
   * @return OK - Returns a list of underpinning contracts
   */
  PartnerRetrievalFindUnderpinningContractsByQueryV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalFindUnderpinningContractsByQueryV2Params): __Observable<__StrictHttpResponse<Array<UnderpinningContractDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/${encodeURIComponent(params.partnerId)}/underpinning_contracts/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UnderpinningContractDto>>;
      })
    );
  }
  /**
   * findUnderpinningContractsByQuery
   *
   * Returns all underpinning contracts that are assigned to a partner using a<br> spql search query.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalFindUnderpinningContractsByQueryV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `partnerId`: A partner id
   *
   * @return OK - Returns a list of underpinning contracts
   */
  PartnerRetrievalFindUnderpinningContractsByQueryV2(params: PartnerRetrievalV2Service.PartnerRetrievalFindUnderpinningContractsByQueryV2Params): __Observable<Array<UnderpinningContractDto>> {
    return this.PartnerRetrievalFindUnderpinningContractsByQueryV2Response(params).pipe(
      __map(_r => _r.body as Array<UnderpinningContractDto>)
    );
  }

  /**
   * getAContact
   *
   * Returns an arbitrary contact of the given partner. Subsequent calls to this<br> method may not return the same contact.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalGetAContactV2Params` containing the following parameters:
   *
   * - `partnerId`: A partner id
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A contact or null if no one is existing for partner
   */
  PartnerRetrievalGetAContactV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalGetAContactV2Params): __Observable<__StrictHttpResponse<ContactDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/${encodeURIComponent(params.partnerId)}/contacts/find_one`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactDto>;
      })
    );
  }
  /**
   * getAContact
   *
   * Returns an arbitrary contact of the given partner. Subsequent calls to this<br> method may not return the same contact.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalGetAContactV2Params` containing the following parameters:
   *
   * - `partnerId`: A partner id
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns A contact or null if no one is existing for partner
   */
  PartnerRetrievalGetAContactV2(params: PartnerRetrievalV2Service.PartnerRetrievalGetAContactV2Params): __Observable<ContactDto> {
    return this.PartnerRetrievalGetAContactV2Response(params).pipe(
      __map(_r => _r.body as ContactDto)
    );
  }

  /**
   * getAlternateLocations
   *
   * Returns the alternate locations that are assigned to a partner.
   * @param partnerId A partner id
   * @return OK - Returns A list of locations
   */
  PartnerRetrievalGetAlternateLocationsV2Response(partnerId: number): __Observable<__StrictHttpResponse<Array<LocationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v2/partners/${encodeURIComponent(partnerId)}/locations/alternate/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LocationDto>>;
      })
    );
  }
  /**
   * getAlternateLocations
   *
   * Returns the alternate locations that are assigned to a partner.
   * @param partnerId A partner id
   * @return OK - Returns A list of locations
   */
  PartnerRetrievalGetAlternateLocationsV2(partnerId: number): __Observable<Array<LocationDto>> {
    return this.PartnerRetrievalGetAlternateLocationsV2Response(partnerId).pipe(
      __map(_r => _r.body as Array<LocationDto>)
    );
  }

  /**
   * getContactByExternalRef
   *
   * Finds a contact by its external reference
   * @param partnerRetrievalController_V2_GetContactByExternalRefRestHolder <b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response<br><b>externalRef</b>: An external reference<br>
   * @return OK - Returns A contact
   */
  PartnerRetrievalGetContactByExternalRefV2Response(partnerRetrievalControllerV2GetContactByExternalRefRestHolder: PartnerRetrievalController_V2_GetContactByExternalRefRestHolder): __Observable<__StrictHttpResponse<ContactDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = partnerRetrievalControllerV2GetContactByExternalRefRestHolder;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/contacts/find_by_ext_ref`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactDto>;
      })
    );
  }
  /**
   * getContactByExternalRef
   *
   * Finds a contact by its external reference
   * @param partnerRetrievalController_V2_GetContactByExternalRefRestHolder <b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response<br><b>externalRef</b>: An external reference<br>
   * @return OK - Returns A contact
   */
  PartnerRetrievalGetContactByExternalRefV2(partnerRetrievalControllerV2GetContactByExternalRefRestHolder: PartnerRetrievalController_V2_GetContactByExternalRefRestHolder): __Observable<ContactDto> {
    return this.PartnerRetrievalGetContactByExternalRefV2Response(partnerRetrievalControllerV2GetContactByExternalRefRestHolder).pipe(
      __map(_r => _r.body as ContactDto)
    );
  }

  /**
   * getPrimaryLocation
   *
   * Returns the primary location that is assigned to a partner.
   * @param partnerId A partner id
   * @return OK - Returns The primary location
   */
  PartnerRetrievalGetPrimaryLocationV2Response(partnerId: number): __Observable<__StrictHttpResponse<LocationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v2/partners/${encodeURIComponent(partnerId)}/locations/primary/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LocationDto>;
      })
    );
  }
  /**
   * getPrimaryLocation
   *
   * Returns the primary location that is assigned to a partner.
   * @param partnerId A partner id
   * @return OK - Returns The primary location
   */
  PartnerRetrievalGetPrimaryLocationV2(partnerId: number): __Observable<LocationDto> {
    return this.PartnerRetrievalGetPrimaryLocationV2Response(partnerId).pipe(
      __map(_r => _r.body as LocationDto)
    );
  }

  /**
   * getUnderpinningContracts
   *
   * Returns the underpinning contracts that are assigned to a partner.
   * @param partnerId A partner id
   * @return OK - Returns A list of underpinning contracts
   */
  PartnerRetrievalGetUnderpinningContractsV2Response(partnerId: number): __Observable<__StrictHttpResponse<Array<UnderpinningContractDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v2/partners/${encodeURIComponent(partnerId)}/underpinning_contracts/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UnderpinningContractDto>>;
      })
    );
  }
  /**
   * getUnderpinningContracts
   *
   * Returns the underpinning contracts that are assigned to a partner.
   * @param partnerId A partner id
   * @return OK - Returns A list of underpinning contracts
   */
  PartnerRetrievalGetUnderpinningContractsV2(partnerId: number): __Observable<Array<UnderpinningContractDto>> {
    return this.PartnerRetrievalGetUnderpinningContractsV2Response(partnerId).pipe(
      __map(_r => _r.body as Array<UnderpinningContractDto>)
    );
  }

  /**
   * queryContacts
   *
   * Get the first n contacts by it's partner
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryContactsV2Params` containing the following parameters:
   *
   * - `partnerId`: Id of partner
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns a query result including the first n contacts and a query locator for<br>         next query call (the next n contacts)
   */
  PartnerRetrievalQueryContactsV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalQueryContactsV2Params): __Observable<__StrictHttpResponse<ContactQueryResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/${encodeURIComponent(params.partnerId)}/contacts/query`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactQueryResultDto>;
      })
    );
  }
  /**
   * queryContacts
   *
   * Get the first n contacts by it's partner
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryContactsV2Params` containing the following parameters:
   *
   * - `partnerId`: Id of partner
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns a query result including the first n contacts and a query locator for<br>         next query call (the next n contacts)
   */
  PartnerRetrievalQueryContactsV2(params: PartnerRetrievalV2Service.PartnerRetrievalQueryContactsV2Params): __Observable<ContactQueryResultDto> {
    return this.PartnerRetrievalQueryContactsV2Response(params).pipe(
      __map(_r => _r.body as ContactQueryResultDto)
    );
  }

  /**
   * queryContactsMore
   *
   * Get the next n contacts of a partner.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryContactsMoreV2Params` containing the following parameters:
   *
   * - `queryLocator`: String retrieved from previous call to queryContacts or<br>            queryContactsMore
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns the query result of the next n contacts including the query locator<br>         used for next query call
   */
  PartnerRetrievalQueryContactsMoreV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalQueryContactsMoreV2Params): __Observable<__StrictHttpResponse<ContactQueryResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.queryLocator != null) __params = __params.set('queryLocator', params.queryLocator.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/contacts/query/more`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactQueryResultDto>;
      })
    );
  }
  /**
   * queryContactsMore
   *
   * Get the next n contacts of a partner.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryContactsMoreV2Params` containing the following parameters:
   *
   * - `queryLocator`: String retrieved from previous call to queryContacts or<br>            queryContactsMore
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns the query result of the next n contacts including the query locator<br>         used for next query call
   */
  PartnerRetrievalQueryContactsMoreV2(params: PartnerRetrievalV2Service.PartnerRetrievalQueryContactsMoreV2Params): __Observable<ContactQueryResultDto> {
    return this.PartnerRetrievalQueryContactsMoreV2Response(params).pipe(
      __map(_r => _r.body as ContactQueryResultDto)
    );
  }

  /**
   * queryContactsPage
   *
   * Query a specific page of contacts.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryContactsPageV2Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner whose contacts should be searched for
   *
   * - `parameters`: Parameters specifying the query.
   *
   * @return OK - Returns Query result
   */
  PartnerRetrievalQueryContactsPageV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalQueryContactsPageV2Params): __Observable<__StrictHttpResponse<ContactQueryPageResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.parameters;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/${encodeURIComponent(params.partnerId)}/contacts/query/page`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactQueryPageResultDto>;
      })
    );
  }
  /**
   * queryContactsPage
   *
   * Query a specific page of contacts.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryContactsPageV2Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner whose contacts should be searched for
   *
   * - `parameters`: Parameters specifying the query.
   *
   * @return OK - Returns Query result
   */
  PartnerRetrievalQueryContactsPageV2(params: PartnerRetrievalV2Service.PartnerRetrievalQueryContactsPageV2Params): __Observable<ContactQueryPageResultDto> {
    return this.PartnerRetrievalQueryContactsPageV2Response(params).pipe(
      __map(_r => _r.body as ContactQueryPageResultDto)
    );
  }

  /**
   * queryFirst
   *
   * Query a first bulk of partners.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryFirstV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns a partner query result
   */
  PartnerRetrievalQueryFirstV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalQueryFirstV2Params): __Observable<__StrictHttpResponse<PartnerQueryResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/query_first`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PartnerQueryResultDto>;
      })
    );
  }
  /**
   * queryFirst
   *
   * Query a first bulk of partners.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryFirstV2Params` containing the following parameters:
   *
   * - `query`: The search query
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns a partner query result
   */
  PartnerRetrievalQueryFirstV2(params: PartnerRetrievalV2Service.PartnerRetrievalQueryFirstV2Params): __Observable<PartnerQueryResultDto> {
    return this.PartnerRetrievalQueryFirstV2Response(params).pipe(
      __map(_r => _r.body as PartnerQueryResultDto)
    );
  }

  /**
   * queryLocationsPage
   *
   * Query a specific page of locations.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryLocationsPageV2Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner whose locations should be searched for
   *
   * - `parameters`: Parameters specifying the query.
   *
   * @return OK - Returns Query result
   */
  PartnerRetrievalQueryLocationsPageV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalQueryLocationsPageV2Params): __Observable<__StrictHttpResponse<LocationQueryPageResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.parameters;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/${encodeURIComponent(params.partnerId)}/locations/query/page`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LocationQueryPageResultDto>;
      })
    );
  }
  /**
   * queryLocationsPage
   *
   * Query a specific page of locations.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryLocationsPageV2Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner whose locations should be searched for
   *
   * - `parameters`: Parameters specifying the query.
   *
   * @return OK - Returns Query result
   */
  PartnerRetrievalQueryLocationsPageV2(params: PartnerRetrievalV2Service.PartnerRetrievalQueryLocationsPageV2Params): __Observable<LocationQueryPageResultDto> {
    return this.PartnerRetrievalQueryLocationsPageV2Response(params).pipe(
      __map(_r => _r.body as LocationQueryPageResultDto)
    );
  }

  /**
   * queryMore
   *
   * Query a further bulk of partners.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryMoreV2Params` containing the following parameters:
   *
   * - `queryLocator`: A query locator received from a previous queryFirst or queryMore<br>            call
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns a partner query result
   */
  PartnerRetrievalQueryMoreV2Response(params: PartnerRetrievalV2Service.PartnerRetrievalQueryMoreV2Params): __Observable<__StrictHttpResponse<PartnerQueryResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.queryLocator != null) __params = __params.set('queryLocator', params.queryLocator.toString());
    __body = params.dataSelector;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/query_more`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PartnerQueryResultDto>;
      })
    );
  }
  /**
   * queryMore
   *
   * Query a further bulk of partners.
   * @param params The `PartnerRetrievalV2Service.PartnerRetrievalQueryMoreV2Params` containing the following parameters:
   *
   * - `queryLocator`: A query locator received from a previous queryFirst or queryMore<br>            call
   *
   * - `dataSelector`: Optional dataSelector that specifies which data should be included<br>            in the response
   *
   * @return OK - Returns a partner query result
   */
  PartnerRetrievalQueryMoreV2(params: PartnerRetrievalV2Service.PartnerRetrievalQueryMoreV2Params): __Observable<PartnerQueryResultDto> {
    return this.PartnerRetrievalQueryMoreV2Response(params).pipe(
      __map(_r => _r.body as PartnerQueryResultDto)
    );
  }

  /**
   * queryPartnersPage
   *
   * Query a specific page of partners.
   * @param parameters Parameters specifying the query.
   * @return OK - Returns Query result
   */
  PartnerRetrievalQueryPartnersPageV2Response(parameters: PartnerQueryPageParametersDto): __Observable<__StrictHttpResponse<PartnerQueryPageResultDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = parameters;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v2/partners/query_page`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PartnerQueryPageResultDto>;
      })
    );
  }
  /**
   * queryPartnersPage
   *
   * Query a specific page of partners.
   * @param parameters Parameters specifying the query.
   * @return OK - Returns Query result
   */
  PartnerRetrievalQueryPartnersPageV2(parameters: PartnerQueryPageParametersDto): __Observable<PartnerQueryPageResultDto> {
    return this.PartnerRetrievalQueryPartnersPageV2Response(parameters).pipe(
      __map(_r => _r.body as PartnerQueryPageResultDto)
    );
  }
}

module PartnerRetrievalV2Service {

  /**
   * Parameters for PartnerRetrievalFindAllV2
   */
  export interface PartnerRetrievalFindAllV2Params {

    /**
     * Limits the partners retrieved to the ones that have the specified<br>            roles associated
     */
    retrievalStrategy: 'RETRIEVE_ALL' | 'RETRIEVE_CUSTOMER' | 'RETRIEVE_SUPPLIER' | 'RETRIEVE_INTERNAL_PROVIDER' | 'RETRIEVE_SUPPLIER_OR_INTERNAL_PROVIDER';

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;

    /**
     * If true only partners with an active PartnerRole are returned
     */
    activeRolesOnly: boolean;
  }

  /**
   * Parameters for PartnerRetrievalFindAllByTimestampV2
   */
  export interface PartnerRetrievalFindAllByTimestampV2Params {

    /**
     * A timestamp value, must not be null
     */
    timestamp: string;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalFindByContactV2
   */
  export interface PartnerRetrievalFindByContactV2Params {

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;

    /**
     * The id of the contact
     */
    contactId: number;
  }

  /**
   * Parameters for PartnerRetrievalFindByIdV2
   */
  export interface PartnerRetrievalFindByIdV2Params {

    /**
     * A partner id
     */
    partnerId: number;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalFindByNameV2
   */
  export interface PartnerRetrievalFindByNameV2Params {

    /**
     * Of the partner to search for
     */
    name: string;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalFindByQueryV2
   */
  export interface PartnerRetrievalFindByQueryV2Params {

    /**
     * The search query
     */
    query: string;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalFindContactByIdV2
   */
  export interface PartnerRetrievalFindContactByIdV2Params {

    /**
     * A data selector containing information about what data should be<br>            loaded.
     */
    dataSelector: ContactDataSelectorDto;

    /**
     * A contact ID
     */
    contactId: number;
  }

  /**
   * Parameters for PartnerRetrievalFindContactsByQueryV2
   */
  export interface PartnerRetrievalFindContactsByQueryV2Params {

    /**
     * The search query
     */
    query: string;

    /**
     * A partner id
     */
    partnerId: number;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: ContactDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalFindUnderpinningContractsByQueryV2
   */
  export interface PartnerRetrievalFindUnderpinningContractsByQueryV2Params {

    /**
     * The search query
     */
    query: string;

    /**
     * A partner id
     */
    partnerId: number;
  }

  /**
   * Parameters for PartnerRetrievalGetAContactV2
   */
  export interface PartnerRetrievalGetAContactV2Params {

    /**
     * A partner id
     */
    partnerId: number;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: ContactDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalQueryContactsV2
   */
  export interface PartnerRetrievalQueryContactsV2Params {

    /**
     * Id of partner
     */
    partnerId: number;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: ContactDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalQueryContactsMoreV2
   */
  export interface PartnerRetrievalQueryContactsMoreV2Params {

    /**
     * String retrieved from previous call to queryContacts or<br>            queryContactsMore
     */
    queryLocator: string;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: ContactDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalQueryContactsPageV2
   */
  export interface PartnerRetrievalQueryContactsPageV2Params {

    /**
     * ID of the partner whose contacts should be searched for
     */
    partnerId: number;

    /**
     * Parameters specifying the query.
     */
    parameters: ContactQueryPageParametersDto;
  }

  /**
   * Parameters for PartnerRetrievalQueryFirstV2
   */
  export interface PartnerRetrievalQueryFirstV2Params {

    /**
     * The search query
     */
    query: string;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;
  }

  /**
   * Parameters for PartnerRetrievalQueryLocationsPageV2
   */
  export interface PartnerRetrievalQueryLocationsPageV2Params {

    /**
     * ID of the partner whose locations should be searched for
     */
    partnerId: number;

    /**
     * Parameters specifying the query.
     */
    parameters: LocationQueryPageParametersDto;
  }

  /**
   * Parameters for PartnerRetrievalQueryMoreV2
   */
  export interface PartnerRetrievalQueryMoreV2Params {

    /**
     * A query locator received from a previous queryFirst or queryMore<br>            call
     */
    queryLocator: string;

    /**
     * Optional dataSelector that specifies which data should be included<br>            in the response
     */
    dataSelector: PartnerDataSelectorDto;
  }
}

export { PartnerRetrievalV2Service }
