import { Cocktail } from './cocktail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailsByName(name: string): Promise<Array<Cocktail>> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {s: name}
    }).toPromise().then(res => {
      if (res['drinks']) {
        const drinks = [];
        for (const drink of res['drinks']) {
          drinks.push(new Cocktail(drink));
        }
        return drinks;
      } else {
        return [];
      }
    });
  }

  getCocktail(id: string): Promise<Cocktail> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
      params: {i: id}
    }).toPromise().then(res => {
      if (res['drinks'] && res['drinks'].length > 0) {
        return new Cocktail(res['drinks'][0]);
      }
    });
  }

  getCategoryList(): Promise<Array<string>> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').toPromise().then(res => {
      const categories = [];
      if (res) {
        for (const category of res['drinks']) {
          categories.push(category.strCategory);
        }
      }
      return categories;
    });
  }
}
