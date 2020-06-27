import { NgModule} from '@angular/core';
import { 
  NzEmptyModule,
  NzCardModule,
  NzToolTipModule, 
  NzLayoutModule, 
  NzMenuModule,
  NzDropDownModule,
  NzInputModule,
  NzSpinModule,
  NzIconModule,
  NzButtonModule,
  NzPaginationModule  
} from 'ng-zorro-antd';

@NgModule({
  imports: [
    NzEmptyModule,
    NzToolTipModule,
    NzCardModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzInputModule,
    NzSpinModule,
    NzIconModule,
    NzButtonModule,
    NzPaginationModule
  ],
  exports: [
    NzEmptyModule,
    NzToolTipModule,
    NzCardModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzInputModule,
    NzSpinModule,
    NzIconModule,
    NzButtonModule,
    NzPaginationModule
  ],
  providers: []
})
export class AntModule { }
