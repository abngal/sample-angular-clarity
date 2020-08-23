import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { DatatableComponent } from './components/datatable.component';


@NgModule({
  declarations: [
    DatatableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DatatableComponent,
  ]
})
export class CommonClassesModule { }
