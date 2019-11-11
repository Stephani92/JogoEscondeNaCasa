import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { StartComponent } from './start/start.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
   declarations: [
      AppComponent,
      CarouselComponent,
      StartComponent
   ],
   imports: [
      NgbModule,
      BrowserModule,
      AppRoutingModule,
      AlertModule.forRoot(),
      ModalModule.forRoot(),
      BsDropdownModule.forRoot(),
      ButtonsModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
