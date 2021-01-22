import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER,Provider } from '@angular/core';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './app.authguard';
import { initializeKeycloak,keycloakInitializer } from './config/keycloak-init';
import { environment } from '../environments/environment';
import { AlertModule } from '@full-fledged/alerts';
import { LoggerModule } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const KEYCLOAK_PROVIDER: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    LoggerModule.forRoot(environment.loggerConfig),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'})
  ],
  providers: [KEYCLOAK_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
