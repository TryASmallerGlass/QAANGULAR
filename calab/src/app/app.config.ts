import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoggerService } from './services/logger/logger.service';
import { TimedLoggerService } from './services/logger/timed-logger.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpEvent, HttpHandlerFn, HttpRequest, withInterceptors } from '@angular/common/http';
import { Observable } from 'rxjs';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([loggingInterceptor])), {provide: LoggerService, useClass: TimedLoggerService}] };
  

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log(`Request URL is: ${req.url}`);
  return next(req);
}
