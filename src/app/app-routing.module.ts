import { LookupComponent } from './lookup/lookup.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchCocktailComponent, data: {animation: 'search'}},
  {path: 'lookup/:id', component: LookupComponent, data: {animation: 'lookup'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
