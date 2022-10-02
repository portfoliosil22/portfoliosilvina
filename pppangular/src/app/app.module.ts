import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SocialComponent } from './components/social/social.component';
import { AplogoComponent } from './components/aplogo/aplogo.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AcercaDeComponent,
    SocialComponent,
    AplogoComponent,
    BannerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
