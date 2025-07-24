import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: WeatherComponent } // this makes WeatherComponent your homepage
    ]),
    provideHttpClient(),
    importProvidersFrom(FormsModule)
  ]
};
