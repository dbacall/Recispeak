import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Button,
  Navigator,
  ActivityIndicator,
} from 'react-native';

import { API_KEY } from '../utils/SpoonacularApiKey';

export default class RecipesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recipesData: [],
      ingredients: ['chicken', 'mint', 'avocado', 'lettuce'],
      ignorePantry: false
    };
  }

  componentDidMount() {
    let body = 'https://api.spoonacular.com/recipes/findByIngredients?ranking=1&number=2';
    let parameter = '&ingredients=' + this.state.ingredients.join(',');
    let ignorePantry = '&ignorePantry=' + this.state.ignorePantry.toString();
    let apiKey = '&apiKey=' + API_KEY;
    let url = body + parameter + ignorePantry + apiKey;
    this.fetchRecipes(url)
  }

  fetchRecipes(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({
        // recipesData: responseJson,
        recipesData: Object.keys(responseJson).map(i => responseJson[i]),
        isLoading: false,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator/>
        </View>
      )
    }else {
      return (
        <ScrollView>
          {this.state.recipesData.map((val, index) =>
            <View key={index}>
              <Text>{val}</Text>
              <Image source={{uri: val['image']}}/>
              <Text>{val['title']}</Text>
              {val['missedIngredientCount'] > 0 &&
              <Text>{val['missedIngredientCount']} missing ingredients</Text>}
            </View>
          )}
        </ScrollView>
      )
    }
  }
}

