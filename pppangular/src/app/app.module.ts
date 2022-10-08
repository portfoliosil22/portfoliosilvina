import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AplogoComponent } from './components/aplogo/aplogo.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './modals/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AcercaDeComponent,
    AplogoComponent,
    BannerComponent,
    HeaderComponent,
    CarruselComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
