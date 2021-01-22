import { ApiConfiguration } from '@splapi/api-configuration';
import { AppConfigService } from '@core/services';

export function initializeSMDB(config: ApiConfiguration,configService:AppConfigService): Function {
  return () => {
    config.rootUrl = configService.apiConfig.smdbApi;
  };
}