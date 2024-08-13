import { ApplicationConfig, isDevMode } from '@angular/core';

import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { authReducer, keyAuth } from '../app/auth/components/store/reducers';
import { provideHttpClient } from '@angular/common/http';

import * as fromEffects from '../app/auth/components/store/effects'
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode, autoPause: true, trace: false, traceLimit: 75 }),
    provideState(keyAuth, authReducer),
    provideHttpClient(),
    provideEffects(fromEffects.AuthEffects),
  ],
}


