import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebardService, SharedService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    SettingsService,
    SidebardService,
    SharedService
  ]
})
export class ServicesModule { }
