import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//servicios
import { SettingsService } from './services/settings/settings.service';

import { ServicesModule } from './services/services.module';

// TEMPORALLLLL
import { FormsModule } from '@angular/forms';

// RUTAS
import { APP_ROUTES } from './app.routes';


// MODULOS
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
