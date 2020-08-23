import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { ClarityMainComponent } from './layout/clarity-main/clarity-main.component';




@NgModule({
  declarations: [
    ClarityMainComponent,
    DatatableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatatableComponent,
    ClarityMainComponent,
  ]
})
export class CommonClassesModule { }
