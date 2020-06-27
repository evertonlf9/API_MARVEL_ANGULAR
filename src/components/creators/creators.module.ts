import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../app/shared.module';
import { SharedService } from '../../app/shared.service';
import { CreatorsComponent } from './creators.component'

@NgModule({
  declarations: [CreatorsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [SharedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [CreatorsComponent]
})
export class CreatorsModule { }
