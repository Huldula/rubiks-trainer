import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { F2lComponent } from './f2l/f2l.component';
import { OllComponent } from './oll/oll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    F2lComponent,
    OllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
