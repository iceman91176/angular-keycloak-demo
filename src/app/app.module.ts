import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER,Provider } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


import { AuthGuard } from '@app/core/guards/app.authguard';

import { environment } from '@env/environment';
import { AlertModule } from '@full-fledged/alerts';
import { LoggerModule } from 'ngx-logger';

//config 
import { ApiConfiguration } from '@splapi/api-configuration';
import { initSMDBApiConfiguration } from './config/smdb-init';
import { initializeKeycloak } from './config/keycloak-init';

//Shared Stuff
import { AppMaterialModule } from '@app/shared/app-material.module';
import { SharedModule } from '@app/shared/shared.module';

//Features
import {ProductsModule} from '@app/features/products/products.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    SharedModule,
    ProductsModule,
    LoggerModule.forRoot(environment.loggerConfig),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'})
  ],
  providers: [SMDB_PROVIDER,KEYCLOAK_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
