import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from './../cocktail/cocktail.service';
import { Cocktail } from '../cocktail/cocktail';
@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  public cocktail: Cocktail;

  constructor(private route: ActivatedRoute, private cocktailService: CocktailService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cocktailService.getCocktail(params.id).then(res => {
        this.cocktail = res;
      });
    });
  }

}
