import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { HttpClientModule } from '@angular/common/http';
import { GuestModule } from './guest/guest.module';
import {UserModule} from './user.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {AlertComponent, AlertModel} from './alert';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    GuestModule,
    UserModule,
    HttpClientModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  exports: [

  ],
  providers: [],
  entryComponents: [
    AlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
