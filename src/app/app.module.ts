import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InputModule, RadioButtonModule, ButtonModule } from 'roleden-component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { LookupComponent } from './lookup/lookup.component';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCocktailComponent,
    LookupComponent,
    CocktailCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputModule, RadioButtonModule, ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
