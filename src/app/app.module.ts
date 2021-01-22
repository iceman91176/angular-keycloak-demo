import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER,Provider,InjectionToken  } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from '@app/core/guards/app.authguard';

import { environment } from '@env/environment';
import { AlertModule,AlertService } from '@full-fledged/alerts';
import { LoggerModule, LoggerConfig, NGXLogger, NgxLoggerLevel } from 'ngx-logger';

//core
import {CoreModule} from '@core/core.module'

//config

import { ApiConfiguration } from '@splapi/api-configuration';
import { ApplicationConfig,initializeSMDB,initializeKeycloak } from '@core/utils';
import {AppConfigService} from '@core/services/app-config.service';

//Shared Stuff
import { AppMaterialModule } from '@app/shared/app-material.module';
import { SharedModule } from '@app/shared/shared.module';

//Features
import {ProductsModule} from '@app/features/products/products.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//application config
export const LOGGER_CONFIG = {
  //serverLoggingUrl: '/api/logs',
  level: NgxLoggerLevel.DEBUG,
  serverLogLevel: NgxLoggerLevel.OFF
};


export const ConfigDeps = new InjectionToken<(() => Function)[]>('configDeps');

export const CONFIG_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: ApplicationConfig,
  multi: true,
  deps: [AppConfigService, AlertService, ConfigDeps]
};

export function dependencyFactory(
  kcService: KeycloakService,
  config: AppConfigService,
  apiConfigService: ApiConfiguration): any {
  return [
    initializeKeycloak(kcService, config),
    initializeSMDB(apiConfigService, config)
  ];
}

export const CONFIG_DEPENDENCIES: Provider = {
  provide: ConfigDeps,
  useFactory: dependencyFactory,
  deps: [KeycloakService, AppConfigService, ApiConfiguration, AlertService]
}


/*
export const KEYCLOAK_PROVIDER: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
};

export const SMDB_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initSMDBApiConfiguration,
  deps: [ApiConfiguration],
  multi: true
};
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    AppMaterialModule,
    CoreModule,
    SharedModule,
    ProductsModule,
    LoggerModule.forRoot(environment.loggerConfig),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'})
  ],
  providers: [CONFIG_PROVIDER, CONFIG_DEPENDENCIES],
  bootstrap: [AppComponent]
})
export class AppModule { }
