import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeaderComponent} from'./components/header/header.components';
import {MainComponent} from'./components/main/main.components';
import {FooterComponent} from'./components/footer/footer.components';
import {AboutComponent} from'./components/about/about.components';
import { appRouting } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,appRouting],
  declarations: [ AppComponent,HeaderComponent,MainComponent,FooterComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
