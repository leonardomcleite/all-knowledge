import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './core/components/homepage/homepage.module';
import { getDutchPaginatorIntl } from './core/helpers/mat-paginatator-labels';
import { CustomHttpEventObserverService } from './core/services/base-service/custom-http-event-observer.service';
import { HandleErrorService } from './core/services/base-service/handle-error.service';
import { RestClient } from './core/services/base-service/rest-client.service';
import { InternationalizationService } from './core/services/internationalization/internationalization.service';
import { MenuModule } from './shared/components/menu/menu.module';
import { NavHeaderModule } from './shared/components/nav-header/nav-header.module';
import { NotificationModule } from './shared/components/notification/notifiction.module';
import { SingletonModule } from './singleton/singleton.module';
import { TesteDrawerComponent } from './teste-drawer/teste-drawer.component';

@NgModule({
  imports: [
    // Angular Core
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // Ngx Translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    // App
    HomepageModule,
    MenuModule,
    NavHeaderModule,
    NotificationModule,
    SingletonModule,

    // Angular Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressBarModule,
  ],
  declarations: [
    AppComponent,
    TesteDrawerComponent
  ],
  exports: [
    TesteDrawerComponent
  ],
  entryComponents: [
    TesteDrawerComponent
  ],
  providers: [
    InternationalizationService,
    RestClient,
    CustomHttpEventObserverService,
    HandleErrorService,
    {
      provide: MatPaginatorIntl,
      useFactory: getDutchPaginatorIntl,
      deps: [InternationalizationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
