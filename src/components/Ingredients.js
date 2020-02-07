import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  Navigator,
  ActivityIndicator,
} from 'react-native';
import { API_KEY } from '../utils/RapidApiSpoonacularApiKey';

export default class IngredientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ingredientsData: [],
    };
  }

  componentDidMount() {
    let transcript = ['pizza', 'ketchup', 'happy banana', 'nice to meet rice']
    let parameter = this.deleteWordDuplicates(transcript).join(' ');
    let body = 'text=' + parameter;
    this.fetchIngredients(body)
  }

  deleteWordDuplicates(transcript) {
    let wordsArray = transcript.join(' ').split(' ');
    return wordsArray.filter((a, b) => wordsArray.indexOf(a) === b);
  }

  fetchIngredients(body) {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/detect', {
    	method: 'POST',
    	headers: {
    		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    		'x-rapidapi-key': 'f0f1e14400msh41f43d9a29ab709p109febjsnb78b9a739bfa',
        Accept: 'application/json',
    		'content-type': 'application/x-www-form-urlencoded',
    	},
    	body: body,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        ingredientsData: responseJson.annotations,
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
          { this.state.ingredientsData.map((val, key) =>
          <Text> {val["annotation"]} </Text> )}
      </ScrollView>
    )
      }
    }

}
