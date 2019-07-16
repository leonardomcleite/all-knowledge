import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './core/components/homepage/homepage.module';
import { InternationalizationService } from './core/services/internationalization/internationalization.service';
import { DrawerModule } from './shared/components/drawer/drawer.module';
import { DrawerService } from './shared/components/drawer/drawer.service';
import { MenuModule } from './shared/components/menu/menu.module';
import { NavHeaderModule } from './shared/components/nav-header/nav-header.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // App
    HomepageModule,
    MenuModule,
    NavHeaderModule,
    DrawerModule,

    // Angular Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    InternationalizationService,
    DrawerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/');
}
