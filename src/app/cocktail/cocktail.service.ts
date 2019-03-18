import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailByName(name: string): Promise<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {s: name}
    }).toPromise();
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
