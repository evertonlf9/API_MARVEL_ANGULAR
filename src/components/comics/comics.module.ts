import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../app/shared.module';
import { SharedService } from '../../app/shared.service';
import { ComicsComponent } from './comics.component';

@NgModule({
  declarations: [ComicsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [SharedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [ComicsComponent]
})
export class ComicsModule { }
