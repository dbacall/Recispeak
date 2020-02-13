import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import RecipesList from './components/RecipesList';
import VoiceNative from './components/Voice';
import Recipe from './components/Recipe';
import Ingredients from './components/Ingredients';
import {
  RAPID_API_KEY,
  SPOONACULAR_API_KEY,
} from './utils/RapidApiSpoonacularApiKey';

export default class Speakipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'record',
      transcript: [],
      ingredients: [],
      ingredientsLoaded: false,
      recipesData: [],
      individualRecipeData: [],
    };
  }

  deleteWordDuplicates(transcript) {
    let wordsArray = transcript.join(' ').split(' ');
    return wordsArray.filter((a, b) => wordsArray.indexOf(a) === b);
  }

  // Food detection API
  fetchIngredients(
    body,
    url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/detect',
  ) {
    if (RAPID_API_KEY == null) {
      this.state.apiKey = System.getenv('RAPID_API_KEY');
    } else {
      this.state.apiKey = RAPID_API_KEY;
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': this.state.apiKey,
        Accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })
      .then(response => response.json())
      .then(responseJson => {
        let array = [];
        responseJson.annotations.map(val => array.push(val.annotation));
        this.setState({
          ingredients: array,
          ingredientsLoaded: true,
          isLoading: false,
          ingredientsLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.transcript !== prevState.transcript &&
      this.state.transcript?.length
    ) {
      let parameter = this.deleteWordDuplicates(this.state.transcript).join(
        ' ',
      );
      let body = 'text=' + parameter;
      this.fetchIngredients(body);
    }
    if (this.state.individualRecipeID !== prevState.individualRecipeID) {
      this.setState({
        view: 'recipe',
      });
    }
    if (this.state.view !== prevState.view && this.state.view === 'record') {
      this.setState({
        ingredientsLoaded: false,
      });
    }
  }

  // URL for Recipes List
  makeURL(pantry = false) {
    let body =
      'https://api.spoonacular.com/recipes/findByIngredients?ranking=1&number=2';
    let parameter = '&ingredients=' + this.state.ingredients.join(',');
    let ignorePantry = '&ignorePantry=' + pantry.toString();

    let apiKey;
    if (SPOONACULAR_API_KEY == null) {
      apiKey = '&apiKey=' + System.getenv('SPOONACULAR_API_KEY');
    } else {
      apiKey = '&apiKey=' + SPOONACULAR_API_KEY;
    }

    return body + parameter + ignorePantry + apiKey;
  }

  // Recipes List API
  getRecipes() {
    const url = this.makeURL();
    return fetch(url)
      .then(response => response.json())
      .then(recipes_list => {
        this.setState({
          recipesData: recipes_list,
          view: 'recipes_list',
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Individual Recipe API
  getIndividualRecipe(id) {
    let body = 'https://api.spoonacular.com/recipes/';
    let end = '/information?includeNutrition=true&';
    let apiKey = 'apiKey=' + SPOONACULAR_API_KEY;
    let url = body + id + end + apiKey;

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          individualRecipeData: responseJson,
          view: 'recipe',
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderView() {
    switch (this.state.view) {
      case 'record':
        return (
          <VoiceNative
            ingredientsLoaded={this.state.ingredientsLoaded}
            results={this.state.transcript}
            setTranscript={results => this.setState({transcript: results})}
            goToPage={page => this.setState({view: page})}
          />
        );
      case 'ingredients':
        return (
          <Ingredients
            deleteIngredient={ingredient =>
              this.setState({
                ingredients: this.state.ingredients.filter(
                  e => e !== ingredient,
                ),
              })
            }
            ingredients={this.state.ingredients}
            ingredientsLoaded={this.state.ingredientsLoaded}
            goToRecipes={() => this.getRecipes()}
            goToPage={page => this.setState({view: page})}
          />
        );
      case 'recipes_list':
        return (
          <RecipesList
            recipesData={this.state.recipesData}
            goToPage={page => this.setState({view: page})}
            goToIndividualRecipe={(id) => this.getIndividualRecipe(id)}
          />
        );
      case 'recipe':
        return (
          <Recipe
            goToPage={page => this.setState({view: page})}
            individualRecipeData={this.state.individualRecipeData}
          />
        );
      default:
        return (
          <View>
            <ActivityIndicator />
          </View>
        );
    }
  }

  render() {
    return this.renderView();
  }
}
