/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactDto } from '../models/contact-dto';
import { ForeignRefDto } from '../models/foreign-ref-dto';
import { UnderpinningContractDto } from '../models/underpinning-contract-dto';
import { PartnerDto } from '../models/partner-dto';
import { PartnerMgmtController_CreatePartner2RestHolder } from '../models/partner-mgmt-controller-_create-partner-2rest-holder';
import { IntegerHolder } from '../models/integer-holder';
import { PartnerMgmtController_RemoveContactsFromPartner2RestHolder } from '../models/partner-mgmt-controller-_remove-contacts-from-partner-2rest-holder';
import { ExternalRefDto } from '../models/external-ref-dto';
import { BulkStatusDto } from '../models/bulk-status-dto';
import { PartnerAssociationDto } from '../models/partner-association-dto';
import { LocationDto } from '../models/location-dto';
import { PartnerMgmtController_UpdatePartner2RestHolder } from '../models/partner-mgmt-controller-_update-partner-2rest-holder';
import { PartnerMgmtController_UpdatePartner3RestHolder } from '../models/partner-mgmt-controller-_update-partner-3rest-holder';

/**
 * Manages partners with partnerRoles, locations and contact persons and manages<br> contactTypes<br> <br> <p><br> Functionality overview:<br> </p><br> <ul><br> <li>Create a partner with a partnerRole, a primary location, alternate<br> locations and contacts</li><br> <li>Remove partners</li><br> <li>Update the partner and it's associated partner roles</li><br> <li>Update partner locations</li><br> <li>Update partner contacts</li><br> <li>Add/update/remove partner segments</li><br> <li>Add/update/remove supplier-/customer - underpinning contracts</li><br> </ul><br> <br> <p><br> The following rules apply for partners in order to be valid:<br> </p><br> <ul><br> <li>At least one partner role must be set (isCustomer, isSupplier,<br> isInternalProvider)</li><br> <li>A partner always needs a primary location</li><br> <li>A partner always needs a contact</li><br> <li>CustomerNumber, SupplierNumber and internalProviderNumber are unique for<br> all partners</li><br> <ul>
 */
@Injectable({
  providedIn: 'root',
})
class PartnerMgmtV1Service extends __BaseService {
  static readonly PartnerMgmtAddContactsToPartnerV1Path = '/v1/partners/{partnerId}/contacts/add';
  static readonly PartnerMgmtAddForeignRefRelationsV1Path = '/v1/partners/{partnerId}/foreignrefs/add';
  static readonly PartnerMgmtAddUnderpinningContractToPartnerV1Path = '/v1/partners/{partnerId}/underpinning_contract/add';
  static readonly PartnerMgmtCreatePartner2V1Path = '/v1/partners/create2';
  static readonly PartnerMgmtGetBulkRemoveLimitV1Path = '/v1/partners/metadata/bulk_remove_limit';
  static readonly PartnerMgmtGetBulkSynchronizeLimitV1Path = '/v1/partners/metadata/bulk_synchronize_limit';
  static readonly PartnerMgmtRemoveContactsFromPartner2V1Path = '/v1/partners/{partnerId}/contacts/remove2';
  static readonly PartnerMgmtRemoveExternalPartnerV1Path = '/v1/partners/remove_external';
  static readonly PartnerMgmtRemoveForeignRefRelationsV1Path = '/v1/partners/{partnerId}/foreignrefs/remove';
  static readonly PartnerMgmtRemovePartnerV1Path = '/v1/partners/{partnerId}/remove';
  static readonly PartnerMgmtRemovePartners2V1Path = '/v1/partners/remove2';
  static readonly PartnerMgmtRemovePartnersV1Path = '/v1/partners/remove';
  static readonly PartnerMgmtRemoveUnderpinningContractFromPartnerV1Path = '/v1/partners/{partnerId}/underpinning_contract/remove';
  static readonly PartnerMgmtReplaceForeignRefRelationsV1Path = '/v1/partners/{partnerId}/foreignrefs/replace';
  static readonly PartnerMgmtSetLocationStatusV1Path = '/v1/partners/locations/{locationId}/status/update';
  static readonly PartnerMgmtSynchronizePartners2V1Path = '/v1/partners/synchronize2';
  static readonly PartnerMgmtSynchronizePartnersV1Path = '/v1/partners/synchronize';
  static readonly PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Path = '/v1/partners/underpinning_contract/{underpinningContractId}/foreignrefs/add';
  static readonly PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Path = '/v1/partners/underpinning_contract/{underpinningContractId}/foreignrefs/remove';
  static readonly PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Path = '/v1/partners/underpinning_contract/{underpinningContractId}/foreignrefs/replace';
  static readonly PartnerMgmtUpdateLocationV1Path = '/v1/partners/location/update';
  static readonly PartnerMgmtUpdatePartner2V1Path = '/v1/partners/update2';
  static readonly PartnerMgmtUpdatePartner3V1Path = '/v1/partners/update3';
  static readonly PartnerMgmtUpdateUnderpinningContractV1Path = '/v1/partners/underpinning_contract/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addContactsToPartner
   *
   * Adds/updates contacts of the partner<br> <p><br> <b>Note:</b>Contacts without id's will be added, the ones with id updated<br> </p>
   * @param params The `PartnerMgmtV1Service.PartnerMgmtAddContactsToPartnerV1Params` containing the following parameters:
   *
   * - `partnerId`: Id of partner
   *
   * - `contacts`: List of contacts to add/update
   *
   * @return OK - Returns The added/updated contacts
   */
  PartnerMgmtAddContactsToPartnerV1Response(params: PartnerMgmtV1Service.PartnerMgmtAddContactsToPartnerV1Params): __Observable<__StrictHttpResponse<Array<ContactDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.contacts;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/${encodeURIComponent(params.partnerId)}/contacts/add`,
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
   * addContactsToPartner
   *
   * Adds/updates contacts of the partner<br> <p><br> <b>Note:</b>Contacts without id's will be added, the ones with id updated<br> </p>
   * @param params The `PartnerMgmtV1Service.PartnerMgmtAddContactsToPartnerV1Params` containing the following parameters:
   *
   * - `partnerId`: Id of partner
   *
   * - `contacts`: List of contacts to add/update
   *
   * @return OK - Returns The added/updated contacts
   */
  PartnerMgmtAddContactsToPartnerV1(params: PartnerMgmtV1Service.PartnerMgmtAddContactsToPartnerV1Params): __Observable<Array<ContactDto>> {
    return this.PartnerMgmtAddContactsToPartnerV1Response(params).pipe(
      __map(_r => _r.body as Array<ContactDto>)
    );
  }

  /**
   * addForeignRefRelations
   *
   * Adds relations between the given partner the given foreign references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtAddForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner whose relations to foreign references to be<br>            replaced.
   *
   * - `foreignRefIdsToBeAdded`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtAddForeignRefRelationsV1Response(params: PartnerMgmtV1Service.PartnerMgmtAddForeignRefRelationsV1Params): __Observable<__StrictHttpResponse<Array<ForeignRefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.foreignRefIdsToBeAdded;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/${encodeURIComponent(params.partnerId)}/foreignrefs/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ForeignRefDto>>;
      })
    );
  }
  /**
   * addForeignRefRelations
   *
   * Adds relations between the given partner the given foreign references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtAddForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner whose relations to foreign references to be<br>            replaced.
   *
   * - `foreignRefIdsToBeAdded`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtAddForeignRefRelationsV1(params: PartnerMgmtV1Service.PartnerMgmtAddForeignRefRelationsV1Params): __Observable<Array<ForeignRefDto>> {
    return this.PartnerMgmtAddForeignRefRelationsV1Response(params).pipe(
      __map(_r => _r.body as Array<ForeignRefDto>)
    );
  }

  /**
   * addUnderpinningContractToPartner
   *
   * Adds a new customer underpinning contract to the partner<br> <p><br> <b>Note:</b> The partner must have a role that suits the underpinning<br> contract type. If type is CUSTOMER than the partner must have a customer<br> partner role. If type is SUPPLIER the partner must have either supplier or<br> internalPartner partner role.<br> </p>
   * @param params The `PartnerMgmtV1Service.PartnerMgmtAddUnderpinningContractToPartnerV1Params` containing the following parameters:
   *
   * - `underpinningContract`: UnderpinningContract to add
   *
   * - `partnerId`: Id of partner
   *
   * @return OK - Returns The added underpinningContract
   */
  PartnerMgmtAddUnderpinningContractToPartnerV1Response(params: PartnerMgmtV1Service.PartnerMgmtAddUnderpinningContractToPartnerV1Params): __Observable<__StrictHttpResponse<UnderpinningContractDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.underpinningContract;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/${encodeURIComponent(params.partnerId)}/underpinning_contract/add`,
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
   * addUnderpinningContractToPartner
   *
   * Adds a new customer underpinning contract to the partner<br> <p><br> <b>Note:</b> The partner must have a role that suits the underpinning<br> contract type. If type is CUSTOMER than the partner must have a customer<br> partner role. If type is SUPPLIER the partner must have either supplier or<br> internalPartner partner role.<br> </p>
   * @param params The `PartnerMgmtV1Service.PartnerMgmtAddUnderpinningContractToPartnerV1Params` containing the following parameters:
   *
   * - `underpinningContract`: UnderpinningContract to add
   *
   * - `partnerId`: Id of partner
   *
   * @return OK - Returns The added underpinningContract
   */
  PartnerMgmtAddUnderpinningContractToPartnerV1(params: PartnerMgmtV1Service.PartnerMgmtAddUnderpinningContractToPartnerV1Params): __Observable<UnderpinningContractDto> {
    return this.PartnerMgmtAddUnderpinningContractToPartnerV1Response(params).pipe(
      __map(_r => _r.body as UnderpinningContractDto)
    );
  }

  /**
   * createPartner2
   *
   * Creates a partner with a partner role, one primary and possible alternate<br> locations<br> <br> <p><br> <b>Note:</b> All entities must not be existing entities on the database and<br> therefore there Id must be NULL.<br> </p><br> <br> <p><br> The customerNumber must unique (within the same tenant) and is mandatory if<br> isCustomer is true<br> </p><br> <br> <p><br> The supplierNumber must unique (within the same tenant) and is mandatory if<br> isSupplier is true<br> </p><br> <br> <p><br> The internalProviderNumber must unique (within the same tenant).<br> </p>
   * @param data <b>alternateLocations</b>: A list of alternate locations. This list may be null or empty.<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response.<br><b>partner</b>: The partner to create. Only the base fields will be used for<br>            creation. Associated entities will be taken from the specific<br>            parameters.<br><b>partnerSegmentIds</b>: A list of partner segment Ids. This list may be null or empty.<br><b>primaryLocation</b>: Default location of the partner. This must not be null.<br>
   * @return OK - Returns the created partner
   */
  PartnerMgmtCreatePartner2V1Response(data: PartnerMgmtController_CreatePartner2RestHolder): __Observable<__StrictHttpResponse<PartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/create2`,
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
   * createPartner2
   *
   * Creates a partner with a partner role, one primary and possible alternate<br> locations<br> <br> <p><br> <b>Note:</b> All entities must not be existing entities on the database and<br> therefore there Id must be NULL.<br> </p><br> <br> <p><br> The customerNumber must unique (within the same tenant) and is mandatory if<br> isCustomer is true<br> </p><br> <br> <p><br> The supplierNumber must unique (within the same tenant) and is mandatory if<br> isSupplier is true<br> </p><br> <br> <p><br> The internalProviderNumber must unique (within the same tenant).<br> </p>
   * @param data <b>alternateLocations</b>: A list of alternate locations. This list may be null or empty.<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response.<br><b>partner</b>: The partner to create. Only the base fields will be used for<br>            creation. Associated entities will be taken from the specific<br>            parameters.<br><b>partnerSegmentIds</b>: A list of partner segment Ids. This list may be null or empty.<br><b>primaryLocation</b>: Default location of the partner. This must not be null.<br>
   * @return OK - Returns the created partner
   */
  PartnerMgmtCreatePartner2V1(data: PartnerMgmtController_CreatePartner2RestHolder): __Observable<PartnerDto> {
    return this.PartnerMgmtCreatePartner2V1Response(data).pipe(
      __map(_r => _r.body as PartnerDto)
    );
  }

  /**
   * getBulkRemoveLimit
   *
   * Returns the maximum number of partners that can be removed at once in<br> removePartnes
   * @return OK - Returns max size of partnerIds for removal
   */
  PartnerMgmtGetBulkRemoveLimitV1Response(): __Observable<__StrictHttpResponse<IntegerHolder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/partners/metadata/bulk_remove_limit`,
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
   * Returns the maximum number of partners that can be removed at once in<br> removePartnes
   * @return OK - Returns max size of partnerIds for removal
   */
  PartnerMgmtGetBulkRemoveLimitV1(): __Observable<IntegerHolder> {
    return this.PartnerMgmtGetBulkRemoveLimitV1Response().pipe(
      __map(_r => _r.body as IntegerHolder)
    );
  }

  /**
   * getBulkSynchronizeLimit
   *
   * Returns the maximum number of partners that can be synchronized at once in<br> synchronizePartnes
   * @return OK - Returns max size of partners for synchronization
   */
  PartnerMgmtGetBulkSynchronizeLimitV1Response(): __Observable<__StrictHttpResponse<IntegerHolder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1/partners/metadata/bulk_synchronize_limit`,
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
   * getBulkSynchronizeLimit
   *
   * Returns the maximum number of partners that can be synchronized at once in<br> synchronizePartnes
   * @return OK - Returns max size of partners for synchronization
   */
  PartnerMgmtGetBulkSynchronizeLimitV1(): __Observable<IntegerHolder> {
    return this.PartnerMgmtGetBulkSynchronizeLimitV1Response().pipe(
      __map(_r => _r.body as IntegerHolder)
    );
  }

  /**
   * removeContactsFromPartner2
   *
   * Removes contacts from the partner
   * @param params The `PartnerMgmtV1Service.PartnerMgmtRemoveContactsFromPartner2V1Params` containing the following parameters:
   *
   * - `partnerId`: Id of partner
   *
   * - `data`: <b>contactIds</b>: List of contact id's to remove<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response<br>
   *
   * @return OK - Returns The updated partner
   */
  PartnerMgmtRemoveContactsFromPartner2V1Response(params: PartnerMgmtV1Service.PartnerMgmtRemoveContactsFromPartner2V1Params): __Observable<__StrictHttpResponse<PartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/${encodeURIComponent(params.partnerId)}/contacts/remove2`,
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
   * removeContactsFromPartner2
   *
   * Removes contacts from the partner
   * @param params The `PartnerMgmtV1Service.PartnerMgmtRemoveContactsFromPartner2V1Params` containing the following parameters:
   *
   * - `partnerId`: Id of partner
   *
   * - `data`: <b>contactIds</b>: List of contact id's to remove<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response<br>
   *
   * @return OK - Returns The updated partner
   */
  PartnerMgmtRemoveContactsFromPartner2V1(params: PartnerMgmtV1Service.PartnerMgmtRemoveContactsFromPartner2V1Params): __Observable<PartnerDto> {
    return this.PartnerMgmtRemoveContactsFromPartner2V1Response(params).pipe(
      __map(_r => _r.body as PartnerDto)
    );
  }

  /**
   * removeExternalPartner
   *
   * Removes a partner by its external reference<br> <br> <p><br> <b>Note:</b> A partner can only be removed if the entity is not connected to<br> another entity, such as customer catalogs, a service provider or a contract.<br> </p>
   * @param externalRef The externalRef of partner to remove
   */
  PartnerMgmtRemoveExternalPartnerV1Response(externalRef: ExternalRefDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = externalRef;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/remove_external`,
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
   * removeExternalPartner
   *
   * Removes a partner by its external reference<br> <br> <p><br> <b>Note:</b> A partner can only be removed if the entity is not connected to<br> another entity, such as customer catalogs, a service provider or a contract.<br> </p>
   * @param externalRef The externalRef of partner to remove
   */
  PartnerMgmtRemoveExternalPartnerV1(externalRef: ExternalRefDto): __Observable<null> {
    return this.PartnerMgmtRemoveExternalPartnerV1Response(externalRef).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * removeForeignRefRelations
   *
   * Removes relations between the given partner the given foreign references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtRemoveForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner from which to remove the relations.
   *
   * - `foreignRefIdsToBeRemoved`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtRemoveForeignRefRelationsV1Response(params: PartnerMgmtV1Service.PartnerMgmtRemoveForeignRefRelationsV1Params): __Observable<__StrictHttpResponse<Array<ForeignRefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.foreignRefIdsToBeRemoved;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/${encodeURIComponent(params.partnerId)}/foreignrefs/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ForeignRefDto>>;
      })
    );
  }
  /**
   * removeForeignRefRelations
   *
   * Removes relations between the given partner the given foreign references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtRemoveForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner from which to remove the relations.
   *
   * - `foreignRefIdsToBeRemoved`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtRemoveForeignRefRelationsV1(params: PartnerMgmtV1Service.PartnerMgmtRemoveForeignRefRelationsV1Params): __Observable<Array<ForeignRefDto>> {
    return this.PartnerMgmtRemoveForeignRefRelationsV1Response(params).pipe(
      __map(_r => _r.body as Array<ForeignRefDto>)
    );
  }

  /**
   * removePartner
   *
   * Removes a partner<br> <br> <p><br> <b>Note:</b> A partner can only be removed if the entity is not connected to<br> another entity, such as customer catalogs, a service provider or a contract.<br> </p>
   * @param partnerId Id of partner to remove
   */
  PartnerMgmtRemovePartnerV1Response(partnerId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/partners/${encodeURIComponent(partnerId)}/remove`,
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
   * removePartner
   *
   * Removes a partner<br> <br> <p><br> <b>Note:</b> A partner can only be removed if the entity is not connected to<br> another entity, such as customer catalogs, a service provider or a contract.<br> </p>
   * @param partnerId Id of partner to remove
   */
  PartnerMgmtRemovePartnerV1(partnerId: number): __Observable<null> {
    return this.PartnerMgmtRemovePartnerV1Response(partnerId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param partnerIds undefined
   * @return OK
   */
  PartnerMgmtRemovePartners2V1Response(partnerIds: Array<number>): __Observable<__StrictHttpResponse<BulkStatusDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = partnerIds;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/remove2`,
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
   * @param partnerIds undefined
   * @return OK
   */
  PartnerMgmtRemovePartners2V1(partnerIds: Array<number>): __Observable<BulkStatusDto> {
    return this.PartnerMgmtRemovePartners2V1Response(partnerIds).pipe(
      __map(_r => _r.body as BulkStatusDto)
    );
  }

  /**
   * removePartners
   *
   * Removes a list of partners<br> <br> <p><br> <b>Note:</b> The same rules as for removePartnes apply<br> </p>
   * @param partnerIds List of ids of partners to remove
   * @return OK - Returns a structure containing information about the outcome of every removal<br>         of partnerIds. If the exception is <i>null</i> the partner was<br>         successfully removed
   */
  PartnerMgmtRemovePartnersV1Response(partnerIds: Array<number>): __Observable<__StrictHttpResponse<BulkStatusDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = partnerIds;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/partners/remove`,
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
   * removePartners
   *
   * Removes a list of partners<br> <br> <p><br> <b>Note:</b> The same rules as for removePartnes apply<br> </p>
   * @param partnerIds List of ids of partners to remove
   * @return OK - Returns a structure containing information about the outcome of every removal<br>         of partnerIds. If the exception is <i>null</i> the partner was<br>         successfully removed
   */
  PartnerMgmtRemovePartnersV1(partnerIds: Array<number>): __Observable<BulkStatusDto> {
    return this.PartnerMgmtRemovePartnersV1Response(partnerIds).pipe(
      __map(_r => _r.body as BulkStatusDto)
    );
  }

  /**
   * removeUnderpinningContractFromPartner
   *
   * Removes the underpinning contract with the given id from the partner
   * @param params The `PartnerMgmtV1Service.PartnerMgmtRemoveUnderpinningContractFromPartnerV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: Id underpinningContract to remove
   *
   * - `partnerId`: Id of partner
   */
  PartnerMgmtRemoveUnderpinningContractFromPartnerV1Response(params: PartnerMgmtV1Service.PartnerMgmtRemoveUnderpinningContractFromPartnerV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.underpinningContractId != null) __params = __params.set('underpinningContractId', params.underpinningContractId.toString());

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1/partners/${encodeURIComponent(params.partnerId)}/underpinning_contract/remove`,
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
   * removeUnderpinningContractFromPartner
   *
   * Removes the underpinning contract with the given id from the partner
   * @param params The `PartnerMgmtV1Service.PartnerMgmtRemoveUnderpinningContractFromPartnerV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: Id underpinningContract to remove
   *
   * - `partnerId`: Id of partner
   */
  PartnerMgmtRemoveUnderpinningContractFromPartnerV1(params: PartnerMgmtV1Service.PartnerMgmtRemoveUnderpinningContractFromPartnerV1Params): __Observable<null> {
    return this.PartnerMgmtRemoveUnderpinningContractFromPartnerV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * replaceForeignRefRelations
   *
   * Replaces all relations of the given partner to foreign references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtReplaceForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner to which to add the relations.
   *
   * - `foreignRefIds`: IDs of the foreignRefs which should be related to the partner<br>            instead of the current ones.
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtReplaceForeignRefRelationsV1Response(params: PartnerMgmtV1Service.PartnerMgmtReplaceForeignRefRelationsV1Params): __Observable<__StrictHttpResponse<Array<ForeignRefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.foreignRefIds;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/${encodeURIComponent(params.partnerId)}/foreignrefs/replace`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ForeignRefDto>>;
      })
    );
  }
  /**
   * replaceForeignRefRelations
   *
   * Replaces all relations of the given partner to foreign references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtReplaceForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `partnerId`: ID of the partner to which to add the relations.
   *
   * - `foreignRefIds`: IDs of the foreignRefs which should be related to the partner<br>            instead of the current ones.
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtReplaceForeignRefRelationsV1(params: PartnerMgmtV1Service.PartnerMgmtReplaceForeignRefRelationsV1Params): __Observable<Array<ForeignRefDto>> {
    return this.PartnerMgmtReplaceForeignRefRelationsV1Response(params).pipe(
      __map(_r => _r.body as Array<ForeignRefDto>)
    );
  }

  /**
   * setLocationStatus
   *
   * * Change a locations status<br><br> <p><br> If the location is already in the requested status nothing is done<br> </p>
   * @param params The `PartnerMgmtV1Service.PartnerMgmtSetLocationStatusV1Params` containing the following parameters:
   *
   * - `newStatus`: A mandatory new status for the location
   *
   * - `locationId`: A mandatory location id
   */
  PartnerMgmtSetLocationStatusV1Response(params: PartnerMgmtV1Service.PartnerMgmtSetLocationStatusV1Params): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.newStatus != null) __params = __params.set('newStatus', params.newStatus.toString());

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/locations/${encodeURIComponent(params.locationId)}/status/update`,
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
   * setLocationStatus
   *
   * * Change a locations status<br><br> <p><br> If the location is already in the requested status nothing is done<br> </p>
   * @param params The `PartnerMgmtV1Service.PartnerMgmtSetLocationStatusV1Params` containing the following parameters:
   *
   * - `newStatus`: A mandatory new status for the location
   *
   * - `locationId`: A mandatory location id
   */
  PartnerMgmtSetLocationStatusV1(params: PartnerMgmtV1Service.PartnerMgmtSetLocationStatusV1Params): __Observable<null> {
    return this.PartnerMgmtSetLocationStatusV1Response(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * synchronizePartners2
   *
   * Creates or updates a list of partners. Partner and primary location must not<br> be empty.<br> <br> <p><br> Modifications of locations which are not in status ACTIVE, will be ignored.<br> The primaryLocation is allowed to be in status INACTIVE only if it is the<br> current primary location of the partner (same ID).<br> </p><br> <br> <p><br> If a partner with the external ref already exists it will be updated<br> otherwise created.<br> </p><br> <p><br> If a null external reference is passed a new partner will be created.<br> </p><br> <br> <p><br> The customerNumber must be unique (within the same tenant) and is mandatory<br> if isCustomer is true<br> </p><br> <br> <p><br> The supplierNumber must be unique (within the same tenant) and is mandatory<br> if isSupplier is true<br> </p><br> <br> <p><br> The internalProviderNumber must be unique (within the same tenant). If<br> isInternalProvider is true, isCustomer and isSupplier must be false.<br> </p>
   * @param partners A list of partners to create/update.
   * @return OK - Returns a structure containing information about the outcome of every<br>         create/update of partners. If the exception is <i>null</i> the<br>         partner was successfully created/updated
   */
  PartnerMgmtSynchronizePartners2V1Response(partners: Array<PartnerAssociationDto>): __Observable<__StrictHttpResponse<BulkStatusDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = partners;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/synchronize2`,
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
   * synchronizePartners2
   *
   * Creates or updates a list of partners. Partner and primary location must not<br> be empty.<br> <br> <p><br> Modifications of locations which are not in status ACTIVE, will be ignored.<br> The primaryLocation is allowed to be in status INACTIVE only if it is the<br> current primary location of the partner (same ID).<br> </p><br> <br> <p><br> If a partner with the external ref already exists it will be updated<br> otherwise created.<br> </p><br> <p><br> If a null external reference is passed a new partner will be created.<br> </p><br> <br> <p><br> The customerNumber must be unique (within the same tenant) and is mandatory<br> if isCustomer is true<br> </p><br> <br> <p><br> The supplierNumber must be unique (within the same tenant) and is mandatory<br> if isSupplier is true<br> </p><br> <br> <p><br> The internalProviderNumber must be unique (within the same tenant). If<br> isInternalProvider is true, isCustomer and isSupplier must be false.<br> </p>
   * @param partners A list of partners to create/update.
   * @return OK - Returns a structure containing information about the outcome of every<br>         create/update of partners. If the exception is <i>null</i> the<br>         partner was successfully created/updated
   */
  PartnerMgmtSynchronizePartners2V1(partners: Array<PartnerAssociationDto>): __Observable<BulkStatusDto> {
    return this.PartnerMgmtSynchronizePartners2V1Response(partners).pipe(
      __map(_r => _r.body as BulkStatusDto)
    );
  }

  /**
   * synchronizePartners
   *
   * Creates or updates a list of partners. Partner and primary location must not<br> be empty.<br> <br> <p><br> Modifications of locations which are not in status ACTIVE, will be ignored.<br> </p><br> <br> <p><br> If a partner with the external ref already exists it will be updated<br> otherwise created.<br> </p><br> <p><br> If a null external reference is passed a new partner will be created.<br> </p><br> <br> <p><br> The customerNumber must be unique (within the same tenant) and is mandatory<br> if isCustomer is true<br> </p><br> <br> <p><br> The supplierNumber must be unique (within the same tenant) and is mandatory<br> if isSupplier is true<br> </p><br> <br> <p><br> The internalProviderNumber must be unique (within the same tenant). If<br> isInternalProvider is true, isCustomer and isSupplier must be false.<br> </p>
   * @param partners A list of partners to create/update.
   * @return OK - Returns a structure containing information about the outcome of every<br>         create/update of partners. If the exception is <i>null</i> the<br>         partner was successfully created/updated
   */
  PartnerMgmtSynchronizePartnersV1Response(partners: Array<PartnerAssociationDto>): __Observable<__StrictHttpResponse<BulkStatusDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = partners;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/synchronize`,
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
   * synchronizePartners
   *
   * Creates or updates a list of partners. Partner and primary location must not<br> be empty.<br> <br> <p><br> Modifications of locations which are not in status ACTIVE, will be ignored.<br> </p><br> <br> <p><br> If a partner with the external ref already exists it will be updated<br> otherwise created.<br> </p><br> <p><br> If a null external reference is passed a new partner will be created.<br> </p><br> <br> <p><br> The customerNumber must be unique (within the same tenant) and is mandatory<br> if isCustomer is true<br> </p><br> <br> <p><br> The supplierNumber must be unique (within the same tenant) and is mandatory<br> if isSupplier is true<br> </p><br> <br> <p><br> The internalProviderNumber must be unique (within the same tenant). If<br> isInternalProvider is true, isCustomer and isSupplier must be false.<br> </p>
   * @param partners A list of partners to create/update.
   * @return OK - Returns a structure containing information about the outcome of every<br>         create/update of partners. If the exception is <i>null</i> the<br>         partner was successfully created/updated
   */
  PartnerMgmtSynchronizePartnersV1(partners: Array<PartnerAssociationDto>): __Observable<BulkStatusDto> {
    return this.PartnerMgmtSynchronizePartnersV1Response(partners).pipe(
      __map(_r => _r.body as BulkStatusDto)
    );
  }

  /**
   * underpinningContractAddForeignRefRelations
   *
   * Adds relations between the given underpinning contract the given foreign<br> references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: ID of the underpinning contract whose relations to foreign<br>            references to be replaced.
   *
   * - `foreignRefIdsToBeAdded`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Response(params: PartnerMgmtV1Service.PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Params): __Observable<__StrictHttpResponse<Array<ForeignRefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.foreignRefIdsToBeAdded;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/underpinning_contract/${encodeURIComponent(params.underpinningContractId)}/foreignrefs/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ForeignRefDto>>;
      })
    );
  }
  /**
   * underpinningContractAddForeignRefRelations
   *
   * Adds relations between the given underpinning contract the given foreign<br> references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: ID of the underpinning contract whose relations to foreign<br>            references to be replaced.
   *
   * - `foreignRefIdsToBeAdded`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtUnderpinningContractAddForeignRefRelationsV1(params: PartnerMgmtV1Service.PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Params): __Observable<Array<ForeignRefDto>> {
    return this.PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Response(params).pipe(
      __map(_r => _r.body as Array<ForeignRefDto>)
    );
  }

  /**
   * underpinningContractRemoveForeignRefRelations
   *
   * Removes relations between the given underpinning contract the given foreign<br> references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: ID of the underpinning contract from which to remove the<br>            relations.
   *
   * - `foreignRefIdsToBeRemoved`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Response(params: PartnerMgmtV1Service.PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Params): __Observable<__StrictHttpResponse<Array<ForeignRefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.foreignRefIdsToBeRemoved;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/underpinning_contract/${encodeURIComponent(params.underpinningContractId)}/foreignrefs/remove`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ForeignRefDto>>;
      })
    );
  }
  /**
   * underpinningContractRemoveForeignRefRelations
   *
   * Removes relations between the given underpinning contract the given foreign<br> references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: ID of the underpinning contract from which to remove the<br>            relations.
   *
   * - `foreignRefIdsToBeRemoved`:
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1(params: PartnerMgmtV1Service.PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Params): __Observable<Array<ForeignRefDto>> {
    return this.PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Response(params).pipe(
      __map(_r => _r.body as Array<ForeignRefDto>)
    );
  }

  /**
   * underpinningContractReplaceForeignRefRelations
   *
   * Replaces all relations of the given underpinning contract to foreign<br> references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: ID of the underpinning contract to which to add the relations.
   *
   * - `foreignRefIds`: IDs of the foreignRefs which should be related to the underpinning<br>            contract instead of the current ones.
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Response(params: PartnerMgmtV1Service.PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Params): __Observable<__StrictHttpResponse<Array<ForeignRefDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.foreignRefIds;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/underpinning_contract/${encodeURIComponent(params.underpinningContractId)}/foreignrefs/replace`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ForeignRefDto>>;
      })
    );
  }
  /**
   * underpinningContractReplaceForeignRefRelations
   *
   * Replaces all relations of the given underpinning contract to foreign<br> references.<br><br> <br><br> For modifying the foreign references themselves use the ForeignRefAppService.
   * @param params The `PartnerMgmtV1Service.PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Params` containing the following parameters:
   *
   * - `underpinningContractId`: ID of the underpinning contract to which to add the relations.
   *
   * - `foreignRefIds`: IDs of the foreignRefs which should be related to the underpinning<br>            contract instead of the current ones.
   *
   * @return OK - Returns the modified list of foreign references
   */
  PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1(params: PartnerMgmtV1Service.PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Params): __Observable<Array<ForeignRefDto>> {
    return this.PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Response(params).pipe(
      __map(_r => _r.body as Array<ForeignRefDto>)
    );
  }

  /**
   * updateLocation
   *
   * Updates a single location. Locations that are owned by an inactive partner<br> may not be updated.
   * @param location A location to update
   * @return OK - Returns the updated location
   */
  PartnerMgmtUpdateLocationV1Response(location: LocationDto): __Observable<__StrictHttpResponse<LocationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = location;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/location/update`,
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
   * updateLocation
   *
   * Updates a single location. Locations that are owned by an inactive partner<br> may not be updated.
   * @param location A location to update
   * @return OK - Returns the updated location
   */
  PartnerMgmtUpdateLocationV1(location: LocationDto): __Observable<LocationDto> {
    return this.PartnerMgmtUpdateLocationV1Response(location).pipe(
      __map(_r => _r.body as LocationDto)
    );
  }

  /**
   * updatePartner2
   *
   * Updates a partner and its associated partner roles. Modifications of<br> locations which are not in status ACTIVE, will be ignored.
   * @param data <b>alternateLocations</b>: A list of alternate locations. This list may be null or empty.<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response.<br><b>partner</b>: A partner with partner role fields. Only the base fields will be<br>            used for update. Associated entities will be taken from the<br>            specific parameters.<br><b>partnerSegmentIds</b>: A list of partner segment Ids. This list may be null or empty. If<br>            the list is empty or <code>null</code>, all partnerSegments are<br>            removed from the partner.<br><b>primaryLocation</b>: Default location of the partner. This must not be null.<br>
   * @return OK - Returns the updated partner
   */
  PartnerMgmtUpdatePartner2V1Response(data: PartnerMgmtController_UpdatePartner2RestHolder): __Observable<__StrictHttpResponse<PartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/update2`,
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
   * updatePartner2
   *
   * Updates a partner and its associated partner roles. Modifications of<br> locations which are not in status ACTIVE, will be ignored.
   * @param data <b>alternateLocations</b>: A list of alternate locations. This list may be null or empty.<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response.<br><b>partner</b>: A partner with partner role fields. Only the base fields will be<br>            used for update. Associated entities will be taken from the<br>            specific parameters.<br><b>partnerSegmentIds</b>: A list of partner segment Ids. This list may be null or empty. If<br>            the list is empty or <code>null</code>, all partnerSegments are<br>            removed from the partner.<br><b>primaryLocation</b>: Default location of the partner. This must not be null.<br>
   * @return OK - Returns the updated partner
   */
  PartnerMgmtUpdatePartner2V1(data: PartnerMgmtController_UpdatePartner2RestHolder): __Observable<PartnerDto> {
    return this.PartnerMgmtUpdatePartner2V1Response(data).pipe(
      __map(_r => _r.body as PartnerDto)
    );
  }

  /**
   * updatePartner3
   *
   * Updates a partner and its associated partner roles. Modifications of<br> locations which are not in status ACTIVE, will be ignored.
   * @param data <b>alternateLocations</b>: A list of alternate locations. This list may be null or empty.<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response.<br><b>partner</b>: A partner with partner role fields. Only the base fields will be<br>            used for update. Associated entities will be taken from the<br>            specific parameters.<br><b>partnerSegmentIds</b>: A list of partner segment Ids. This list may be null or empty. If<br>            the list is empty or <code>null</code>, all partnerSegments are<br>            removed from the partner.<br><b>primaryLocation</b>: Default location of the partner. This must not be null. Allowed to<br>            be in status INACTIVE only if it is the current primary location<br>            of the partner (same ID).<br>
   * @return OK - Returns the updated partner
   */
  PartnerMgmtUpdatePartner3V1Response(data: PartnerMgmtController_UpdatePartner3RestHolder): __Observable<__StrictHttpResponse<PartnerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/update3`,
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
   * updatePartner3
   *
   * Updates a partner and its associated partner roles. Modifications of<br> locations which are not in status ACTIVE, will be ignored.
   * @param data <b>alternateLocations</b>: A list of alternate locations. This list may be null or empty.<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response.<br><b>partner</b>: A partner with partner role fields. Only the base fields will be<br>            used for update. Associated entities will be taken from the<br>            specific parameters.<br><b>partnerSegmentIds</b>: A list of partner segment Ids. This list may be null or empty. If<br>            the list is empty or <code>null</code>, all partnerSegments are<br>            removed from the partner.<br><b>primaryLocation</b>: Default location of the partner. This must not be null. Allowed to<br>            be in status INACTIVE only if it is the current primary location<br>            of the partner (same ID).<br>
   * @return OK - Returns the updated partner
   */
  PartnerMgmtUpdatePartner3V1(data: PartnerMgmtController_UpdatePartner3RestHolder): __Observable<PartnerDto> {
    return this.PartnerMgmtUpdatePartner3V1Response(data).pipe(
      __map(_r => _r.body as PartnerDto)
    );
  }

  /**
   * updateUnderpinningContract
   *
   * Updates an underpinning contract<br> <br> The underpinning contract type must not be changed
   * @param underpinningContract UnderpinningContract to update
   * @return OK - Returns The modified underpinningContract
   */
  PartnerMgmtUpdateUnderpinningContractV1Response(underpinningContract: UnderpinningContractDto): __Observable<__StrictHttpResponse<UnderpinningContractDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = underpinningContract;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1/partners/underpinning_contract/update`,
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
   * updateUnderpinningContract
   *
   * Updates an underpinning contract<br> <br> The underpinning contract type must not be changed
   * @param underpinningContract UnderpinningContract to update
   * @return OK - Returns The modified underpinningContract
   */
  PartnerMgmtUpdateUnderpinningContractV1(underpinningContract: UnderpinningContractDto): __Observable<UnderpinningContractDto> {
    return this.PartnerMgmtUpdateUnderpinningContractV1Response(underpinningContract).pipe(
      __map(_r => _r.body as UnderpinningContractDto)
    );
  }
}

module PartnerMgmtV1Service {

  /**
   * Parameters for PartnerMgmtAddContactsToPartnerV1
   */
  export interface PartnerMgmtAddContactsToPartnerV1Params {

    /**
     * Id of partner
     */
    partnerId: number;

    /**
     * List of contacts to add/update
     */
    contacts: Array<ContactDto>;
  }

  /**
   * Parameters for PartnerMgmtAddForeignRefRelationsV1
   */
  export interface PartnerMgmtAddForeignRefRelationsV1Params {

    /**
     * ID of the partner whose relations to foreign references to be<br>            replaced.
     */
    partnerId: number;
    foreignRefIdsToBeAdded: Array<number>;
  }

  /**
   * Parameters for PartnerMgmtAddUnderpinningContractToPartnerV1
   */
  export interface PartnerMgmtAddUnderpinningContractToPartnerV1Params {

    /**
     * UnderpinningContract to add
     */
    underpinningContract: UnderpinningContractDto;

    /**
     * Id of partner
     */
    partnerId: number;
  }

  /**
   * Parameters for PartnerMgmtRemoveContactsFromPartner2V1
   */
  export interface PartnerMgmtRemoveContactsFromPartner2V1Params {

    /**
     * Id of partner
     */
    partnerId: number;

    /**
     * <b>contactIds</b>: List of contact id's to remove<br><b>dataSelector</b>: Optional dataSelector that specifies which data should be included<br>            in the response<br>
     */
    data: PartnerMgmtController_RemoveContactsFromPartner2RestHolder;
  }

  /**
   * Parameters for PartnerMgmtRemoveForeignRefRelationsV1
   */
  export interface PartnerMgmtRemoveForeignRefRelationsV1Params {

    /**
     * ID of the partner from which to remove the relations.
     */
    partnerId: number;
    foreignRefIdsToBeRemoved: Array<number>;
  }

  /**
   * Parameters for PartnerMgmtRemoveUnderpinningContractFromPartnerV1
   */
  export interface PartnerMgmtRemoveUnderpinningContractFromPartnerV1Params {

    /**
     * Id underpinningContract to remove
     */
    underpinningContractId: number;

    /**
     * Id of partner
     */
    partnerId: number;
  }

  /**
   * Parameters for PartnerMgmtReplaceForeignRefRelationsV1
   */
  export interface PartnerMgmtReplaceForeignRefRelationsV1Params {

    /**
     * ID of the partner to which to add the relations.
     */
    partnerId: number;

    /**
     * IDs of the foreignRefs which should be related to the partner<br>            instead of the current ones.
     */
    foreignRefIds: Array<number>;
  }

  /**
   * Parameters for PartnerMgmtSetLocationStatusV1
   */
  export interface PartnerMgmtSetLocationStatusV1Params {

    /**
     * A mandatory new status for the location
     */
    newStatus: 'ACTIVE' | 'INACTIVE';

    /**
     * A mandatory location id
     */
    locationId: number;
  }

  /**
   * Parameters for PartnerMgmtUnderpinningContractAddForeignRefRelationsV1
   */
  export interface PartnerMgmtUnderpinningContractAddForeignRefRelationsV1Params {

    /**
     * ID of the underpinning contract whose relations to foreign<br>            references to be replaced.
     */
    underpinningContractId: number;
    foreignRefIdsToBeAdded: Array<number>;
  }

  /**
   * Parameters for PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1
   */
  export interface PartnerMgmtUnderpinningContractRemoveForeignRefRelationsV1Params {

    /**
     * ID of the underpinning contract from which to remove the<br>            relations.
     */
    underpinningContractId: number;
    foreignRefIdsToBeRemoved: Array<number>;
  }

  /**
   * Parameters for PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1
   */
  export interface PartnerMgmtUnderpinningContractReplaceForeignRefRelationsV1Params {

    /**
     * ID of the underpinning contract to which to add the relations.
     */
    underpinningContractId: number;

    /**
     * IDs of the foreignRefs which should be related to the underpinning<br>            contract instead of the current ones.
     */
    foreignRefIds: Array<number>;
  }
}

export { PartnerMgmtV1Service }
