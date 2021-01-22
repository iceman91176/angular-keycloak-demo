
import {  NgxLoggerLevel } from 'ngx-logger';
import {KeycloakConfig} from 'keycloak-js'

let LOGGER_CONFIG = {
    //serverLoggingUrl: '/api/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.OFF
};

// Add here your keycloak setup infos

let keycloakConfig: KeycloakConfig = {
  url: "https://auth.dev.witcom.services/auth",
  realm: "witcom",
  clientId: "angular-keycloak-demo"
};

let smdbConfig = {
    url: 'https://apis.dev.witcom.services/smdb'
}

export const environment = {
  production: false,
  apiUrl:'https://apis.dev.witcom.services',
  keycloak: keycloakConfig,
  smdbConfig: smdbConfig,
  loggerConfig: LOGGER_CONFIG

};

