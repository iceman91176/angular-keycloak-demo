/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://localhost:8443/serviceplanet/remote/service';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
