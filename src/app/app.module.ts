import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from './icons-provider.module';
import { HomeModule } from './pages/home/home.module';
// import * as MOCKDATA from '../assets/_mock';
let MOCKDATA;
// import('../assets/_mock').then((module) => {
//   MOCKDATA = module;
// });

(async () => {
  console.log('1');
  MOCKDATA = await import('../assets/_mock');
  console.log('2');
  console.log('MOCKDATA', MOCKDATA);
})();

(async () => {
  console.log('3');
})();

console.log(MOCKDATA);

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    HomeModule,
    MOCKDATA
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule { }
