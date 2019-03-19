import { CocktailService } from './../cocktail/cocktail.service';
import { Component, OnInit } from '@angular/core';
import { ListElementDirective } from 'roleden-component';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.scss']
})
export class SearchCocktailComponent implements OnInit {

  public search = '';
  public cocktailList = [];

  public advanced = false;
  public categoriesList: Array<string> = [];
  public chosenCategory = '';

  constructor(private searchService: CocktailService) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.searchService.getCategoryList().then(list => {
      this.categoriesList = list;
    });
  }

  getValue(val) {
    if (val.length > 3) {
      this.searchCocktail();
    }
  }

  searchCocktail() {
    this.searchService.getCocktailByName(this.search).then(res => {
      console.log(res);
      this.cocktailList = res;
    });
  }

  chooseCategory(choose) {
    if (choose !== this.chosenCategory) {
      this.chosenCategory = choose;
    }
  }

  getMatchingName() {
    const search = this.search.toLowerCase();
    const matchingCocktail = [];
    for (const drink of this.cocktailList) {
      if (this.matchingCategory(drink)) {
        matchingCocktail.push({
          title: drink.strDrink,
          author: drink.strCategory,
          color: 'blue',
          file: drink.idDrink,
          icon: 'fas fa-glass-martini-alt'
        });
      }
    }
    return matchingCocktail;
  }

  matchingCategory(drink): boolean {
    if (drink.strCategory.match(this.chosenCategory)) {
      return true;
    } else {
      return false;
    }
  }
}
