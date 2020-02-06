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
import { API_KEY } from './utils/RapidApiSpoonacularApiKey';

export default class IngredientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ingredientsData: [],
    };
  }

  componentDidMount() {
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
    		'x-rapidapi-key': API_KEY,
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
      let lists = this.state.ingredientsData.map(object => {
        return <ScrollView>
        <Text>{object["annotation"]}</Text>
      </ScrollView>
      })
    }
  }

}
