import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AntModule } from '../../app/app.antd.module';
import { SharedModule } from '../../app/shared.module';
import { SharedService } from '../../app/shared.service';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    AntModule,
    SharedModule,
    FormsModule
  ],
  providers: [SharedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [DetailsComponent]
})
export class DetailsModule { }
