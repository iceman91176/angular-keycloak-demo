import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
//import { environment } from '../../environments/environment';
import { AppConfigService } from '@core/services';

export function initializeKeycloak(keycloak: KeycloakService,configService:AppConfigService) {
  return () =>
    keycloak.init({
      config: configService.keycloakConfig,
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      }, 
      bearerExcludedUrls: ['https://nominatim.openstreetmap.org/search']
    });
}




