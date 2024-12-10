import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoggerService } from './services/logger/logger.service';
import { TimedLoggerService } from './services/logger/timed-logger.service';



import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {provide: LoggerService, useClass: TimedLoggerService}]
};
