import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientDetailComponent} from './client-detail/client-detail.component';

const routes: Routes = [
  {path: 'client', component: ClientListComponent},
  {path: 'client/create', component: ClientDetailComponent},
  {path: 'client/edit/:id', component: ClientDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
