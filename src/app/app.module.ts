import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { AntModule } from './app.antd.module';

import { HomeModule } from '../components/home/home.module';
import { CharactersModule } from '../components/characters/characters.module';
import { ComicsModule } from '../components/comics/comics.module';
import { SeriesModule } from '../components/series/series.module';
import { CreatorsModule } from '../components/creators/creators.module';
import { EventsModule } from '../components/events/events.module';
import { DetailsModule } from '../components/details/details.module';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    HomeModule,
    CharactersModule,
    ComicsModule,
    SeriesModule,
    CreatorsModule,
    EventsModule,
    DetailsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
