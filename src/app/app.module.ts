import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { TelephoneComponent } from './telephone/telephone.component';
import { TelephoneService } from './telephone/services/telephone.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TelephoneComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    TelephoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
