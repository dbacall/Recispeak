import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import RecipesList from './RecipesList';
import {SPOONACULAR_API_KEY} from '../utils/RapidApiSpoonacularApiKey';

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      transcript: [],
      ingredients: [],
      apiKey: '',
    };
  }

  componentDidMount() {
    if (this.props.transcript?.length) {
      let parameter = this.deleteWordDuplicates(this.props.transcript).join(
        ' ',
      );
      let body = 'text=' + parameter;
      this.fetchIngredients(body);
    }
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

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView>
          {this.state.ingredients.map((ingredient, key) => (
            <Text key={key}> {ingredient} </Text>
          ))}
        </ScrollView>
      );
    }
  }
}
