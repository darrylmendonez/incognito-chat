import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { LoggingService } from './app/logging.service';
import { HTTP_PROVIDERS } from '@angular/http';

@NgModule({
  imports: [
    HttpModule
  ]
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
