import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: environment.keycloak,
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      }, 
      //bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['https://nominatim.openstreetmap.org/search']
    });
}




