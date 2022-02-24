import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pagina/header/header.component';
import { AboutForMyComponent } from './pagina/about-for-my/about-for-my.component';
import { LoginComponent } from './login/login.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './models/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutForMyComponent,
    LoginComponent,
    PorfolioComponent,
    RegisterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
