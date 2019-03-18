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
  public cocktailList: Array<ListElementDirective> = [];

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
      this.cocktailList = [];
      if (res && res['drinks']) {
        for (const drink of res['drinks']) {
          this.cocktailList.push({
            title: drink.strDrink,
            author: drink.strCategory,
            color: 'blue',
            file: drink.idDrink,
            icon: 'fas fa-glass-martini-alt'
          });
        }
      }
    });
  }

  chooseCategory(choose) {
    console.log(choose);
  }
}
