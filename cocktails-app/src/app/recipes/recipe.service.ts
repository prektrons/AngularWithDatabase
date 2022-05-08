import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];

    // private recipes: Recipe[] = [
    //     new Recipe('Mojito', 
    //     'Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste.', 
    //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg?quality=90&webp=true&resize=300,272',
    //     [
    //         new Ingredient('Gin', 1),
    //         new Ingredient('Tonic', 1),
    //         new Ingredient('Lime', 2),
    //         new Ingredient('Mint', 5)
    //     ]),
    //     new Recipe('Rhubarb gin', 
    //     'Use seasonal rhubarb to make this G&T-with-a-difference, or top the finished gin with soda water for a refreshing and gloriously pink summertime drink', 
    //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/rhubarb-gin-93e56de.jpg?quality=90&webp=true&resize=300,272', 
    //     [
    //         new Ingredient('Gin', 1),
    //         new Ingredient('Orange', 1),
    //         new Ingredient('Rhubarb', 1),
    //         new Ingredient('Soda water', 1)
    //     ]),
    //     new Recipe('Easy sangria', 
    //     'Embrace balmy summer days with a jug of sangria. With red wine, Spanish brandy, sparkling water, cinnamon and chopped fruit, it\'s a lovely sharing cocktail', 
    //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sangria-new-crop-8fbb7a1.jpg?quality=90&webp=true&resize=300,272', 
    //     [
    //         new Ingredient('Red wine', 1),
    //         new Ingredient('Spanish brandy', 1),
    //         new Ingredient('Sparkling water', 1),
    //         new Ingredient('Cinnamon', 1),
    //         new Ingredient('Orange', 1)
    //     ]), 
    //     new Recipe('Hurricane cocktail', 
    //     'Our tropical, rum-based hurricane cocktail is easy to make and sure to get your party started. Garnish with orange and cocktail cherries for a kitsch touch', 
    //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hurricane-62b2c43.jpg?quality=90&webp=true&resize=300,272', 
    //     [
    //         new Ingredient('Orange', 1),
    //         new Ingredient('Cherries', 3),
    //         new Ingredient('Dark rum', 1),
    //         new Ingredient('White rum', 1)
    //     ]),
    //     new Recipe('Salted caramel pecan sour', 
    //     'A modern version of the classic sour cocktail, this is the ultimate Christmas drink. Salted caramel and Icelandic vodka make an irresistible mix', 
    //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salted-caramel-pecan-sours-7a078e5.jpg?quality=90&webp=true&resize=300,272', 
    //     [
    //         new Ingredient('Pecans', 5),
    //         new Ingredient('Vodka', 1),
    //         new Ingredient('Egg whites', 2),
    //     ])
    // ];

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        //a new array exactly as the one in service
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}