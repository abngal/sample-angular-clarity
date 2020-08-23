import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonClassesModule } from './common/common-classes.module';
import { ClarityMainComponent } from './layout/clarity-main/clarity-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ClarityMainComponent, // skeleton layout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    CommonClassesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
