/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { PartnerMgmtV1Service } from './services/partner-mgmt-v1.service';
import { PartnerRetrievalV2Service } from './services/partner-retrieval-v2.service';
import { PrimaryAttributeV1Service } from './services/primary-attribute-v1.service';
import { ProductAttributeV1Service } from './services/product-attribute-v1.service';
import { ProductCatalogV1Service } from './services/product-catalog-v1.service';
import { ProductSearchV1Service } from './services/product-search-v1.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    PartnerMgmtV1Service,
    PartnerRetrievalV2Service,
    PrimaryAttributeV1Service,
    ProductAttributeV1Service,
    ProductCatalogV1Service,
    ProductSearchV1Service
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
