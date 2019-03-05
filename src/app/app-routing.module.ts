import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {F2lComponent} from './f2l/f2l.component';

const routes: Routes = [
  { path: '', redirectTo: '/f2l', pathMatch: 'full' },
  { path: 'f2l', component: F2lComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
