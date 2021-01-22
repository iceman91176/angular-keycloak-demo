import { environment } from '@env/environment';
import { ApiConfiguration } from '@splapi/api-configuration';

export function initSMDBApiConfiguration(config: ApiConfiguration): Function {
  return () => {
    config.rootUrl = environment.smdbConfig.url;
  };
}