import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import { UnauthHomeComponent } from './unauth-home/unauth-home.component';
import {UnauthLeftComponent} from './unauth-home/unauth-left/unauth-left.component';
import {UnauthRightComponent} from './unauth-home/unauth-right/unauth-right.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginFormComponent,
      UnauthHomeComponent,
      UnauthLeftComponent,
      UnauthRightComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
