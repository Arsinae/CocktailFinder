import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoledenComponentModule } from 'roleden-component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { LookupComponent } from './lookup/lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCocktailComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RoledenComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
