import React, {Component} from 'react';
import {ScrollView, Text, View, Button, ActivityIndicator} from 'react-native';
import RecipesList from './components/RecipesList';
import VoiceNative from './components/Voice';
import Recipe from './components/Recipe'
import Ingredients from './components/Ingredients'
import Voice from 'react-native-voice';
import {API_KEY} from './utils/RapidApiSpoonacularApiKey';

export default class Speakipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "record",
      transcript: [],
      ingredients: [],
      recipesData: []
    };
  }

  deleteWordDuplicates(transcript) {
    let wordsArray = transcript.join(' ').split(' ');
    return wordsArray.filter((a, b) => wordsArray.indexOf(a) === b);
  }

  fetchIngredients(
    body,
    url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/detect',
  ) {
    if (SPOONACULAR_API_KEY == null) {
      this.state.apiKey = System.getenv('SPOONACULAR_API_KEY');
    } else {
      this.state.apiKey = SPOONACULAR_API_KEY;
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
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.transcript !== prevState.transcript && this.state.transcript?.length) {
      let parameter = this.deleteWordDuplicates(this.state.transcript).join(
        ' ',
      );
      let body = 'text=' + parameter;
      this.fetchIngredients(body);
    }
  }

  callRecipeAPI(pantry) {
    let body =
      'https://api.spoonacular.com/recipes/findByIngredients?ranking=1&number=2';
    let parameter = '&ingredients=' + this.state.ingredients.join(',');
    let ignorePantry = '&ignorePantry=' + pantry.toString();
    let apiKey
    {console.log(apiKey)}
    if (API_KEY == null) {
      apiKey = '&apiKey=' + System.getenv('API_KEY');
    } else {
      apiKey = '&apiKey=' + API_KEY;
    }
    let url = body + parameter + ignorePantry + apiKey;
    this.fetchRecipes(url);
  }

  fetchRecipes(url) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          recipesData: responseJson,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderView() {
    switch(this.state.view) {
      case "record":
        return <VoiceNative
        benny={"benny"}
        results={this.state.transcript}
        setTranscript={(results) => this.setState({transcript: results})}
        goToPage={(page) => this.setState({view: page})} />
      case "ingredients":
        return <Ingredients ingredients={this.state.ingredients} goToPage={(page) => this.setState({view: page})} />
      case "recipes_list":
        callRecipeAPI(false)
        return <RecipesList recipesData={this.state.recipesData} goToPage={(page) => this.setState({view: page})}/>
      case "recipe":
          return <Recipe />
      default:
          return (
            <View>
              <ActivityIndicator />
            </View>
          )
    }
  }

  render() {
    return this.renderView()
  }
}
