import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';
import {Guest} from '../modele/user/Guest';
import {Observable} from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from '../_directives';

@NgModule({
  declarations: [GuestDetailComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GuestModule {

}
