import { Observable } from 'rxjs';
import { AppConfigService } from '@core/services';
import { AlertService } from '@full-fledged/alerts';
import { NGXLogger } from 'ngx-logger';


export function ApplicationConfig(
  config: AppConfigService,
  alertService: AlertService,
  configDeps: (() => Function)[]
): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
        
        config.loadAppConfig().then(data =>{
          
          return Promise.all(configDeps.map(dep => dep()));
        })
        .then(() => {
          // Once configuration dependencies are resolved, then resolve factory
          resolve();
        })
        .catch((data) => {
          
          alertService.danger("Applikation konnte nicht initialisiert werden !!");
          resolve(data);
        });
    });
  };
}