import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {F2lComponent} from './f2l/f2l.component';
import {OllComponent} from './oll/oll.component';

const routes: Routes = [
  { path: '', redirectTo: '/f2l', pathMatch: 'full' },
  { path: 'f2l', component: F2lComponent },
  { path: 'oll', component: OllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
