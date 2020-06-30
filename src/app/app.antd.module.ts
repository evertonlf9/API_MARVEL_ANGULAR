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
  NzPaginationModule,
  NzDescriptionsModule   
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
    NzPaginationModule,
    NzDescriptionsModule
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
    NzPaginationModule,
    NzDescriptionsModule
  ],
  providers: []
})
export class AntModule { }
