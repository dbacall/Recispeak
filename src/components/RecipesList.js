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
      this.setState({
        recipesData: responseJson,
        isLoading: false,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator/>
        </View>
      )
    } else {
        return (
          <ScrollView>
            {this.state.recipesData.map((data, index) =>
              <View key={index}>
                <Image source={{uri: data.image}} style={{width: 400, height: 400}} />
                <Text>
                  <Text> {data.title} </Text>
                  <Text> {'\n'}Missing ingredients: {data.missedIngredientCount} </Text>
                </Text>
                </View>
            )}
          </ScrollView>
        )
    }
  }
}
