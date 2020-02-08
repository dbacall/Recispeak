import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ingredientsData: [],
      ingredients: [],
      apiKey: SPOONACULAR_API_KEY,
    };
  }

  componentDidMount() {
    if (this.props.ingredients?.length) {
      let transcript = this.props.ingredients;
      let parameter = this.deleteWordDuplicates(transcript).join(' ');
      let body = 'text=' + parameter;
      this.fetchIngredients(body);
    }
  }
  deleteWordDuplicates(transcript) {
    let wordsArray = transcript.join(' ').split(' ');
    return wordsArray.filter((a, b) => wordsArray.indexOf(a) === b);
  }
  fetchIngredients(body, url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/detect') {
    if (SPOONACULAR_API_KEY == null) {
      this.state.apiKey = System.getenv("SPOONACULAR_API_KEY")
    } else {
      this.state.apiKey = SPOONACULAR_API_KEY
    }
    fetch(url, {
    	method: 'POST',
    	headers: {
    		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    		'x-rapidapi-key': this.state.apiKey,
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
