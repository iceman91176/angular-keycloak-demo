
import {  NgxLoggerLevel } from 'ngx-logger';
let LOGGER_CONFIG = {
    //serverLoggingUrl: '/api/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.OFF
};
export const environment = {
  production: true,
  loggerConfig:LOGGER_CONFIG
};
