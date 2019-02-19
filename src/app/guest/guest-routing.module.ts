import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestDetailComponent} from './guest-detail/guest-detail.component';

const routes: Routes = [
  {path: 'guest/ouvrir-un-compte', component: GuestDetailComponent},
  {path: 'guest/:id', component: GuestDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
