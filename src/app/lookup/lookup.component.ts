import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from './../cocktail/cocktail.service';
import { Cocktail } from '../cocktail/cocktail';
import { NutritionalService } from '../nutritional/nutritional.service';
@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  public cocktail: Cocktail;
  public related: Array<{id: string, name: string, image: string, ref: number}> = [];
  public calories = 0;

  constructor(private route: ActivatedRoute, private cocktailService: CocktailService,
    private router: Router, private nutritional: NutritionalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cocktailService.getCocktail(params.id).then(res => {
        this.cocktail = res;
        this.cocktailService.getRelatedCocktails(this.cocktail).then(related => {
          this.related = related;
        });
        this.nutritional.getNutrientsInfo(this.cocktail.ingredients).then(nutrients => {
          console.log(nutrients);
          if (nutrients['foods']) {
            for (const nutrient of nutrients['foods']) {
              this.calories += nutrient['nf_calories'];
            }
            console.log(this.calories);
          }
        });
      });
    });
  }

  navigateToCocktail(cocktailId) {
    this.router.navigate(['/lookup', cocktailId]);
  }
}
