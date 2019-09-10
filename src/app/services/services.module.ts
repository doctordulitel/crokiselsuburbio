
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { SettingsService, SidebardService, SharedService, UsuarioService, LoginGuardGuard } from './service.index';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    SettingsService,
    SidebardService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServicesModule { }
