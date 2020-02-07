import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Navigator,
  ActivityIndicator,
} from 'react-native';

import { API_KEY } from '../utils/SpoonacularApiKey';

export default class Recipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recipeData: [],
      instructionsData: [],
      id: 324694,
    };
  }

  componentDidMount() {
    let body = 'https://api.spoonacular.com/recipes/';
    let id =  this.state.id.toString();
    let end = '/information?includeNutrition=true&';
    let apiKey = 'apiKey=' + API_KEY;
    let url = body + id + end + apiKey
    this.fetchRecipe(url)

    let bodyTwo = 'https://api.spoonacular.com/recipes/'
    let endTwo = '/analyzedInstructions?'
    let urlTwo = bodyTwo + id + endTwo + apiKey
    this.fetchInstructions(urlTwo)
  }

  fetchRecipe(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        recipeData: responseJson,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  fetchInstructions(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        instructionsData: responseJson,
        isLoading: false,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    console.log(this.state.instructionsData)
    if(this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator/>
        </View>
      )
    }else {
      // Iteration to follow
      return (
        <ScrollView>
          <Image source={{ uri: element.image }}/>
          <Text> {element.title} </Text>
          <Text> {element.readyInMinutes} </Text>
          <Text> {element.servings} </Text>
          // iterate over: element.extendedIngredients.map(item) => ...
          <Text> {item.original} </Text>
          // close iteration

          // iterate over: this.state.instructionsData.map(step) => ...
            step.name.length > 0 &&  // don't show step name if it is nil
              <Text> {step.name} </Text> // name of the set of steps
            }
              // step.map(instruction) =>
                <Text> {instruction.number} </Text> // this number of the step
                <Text> {instruction.step} </Text> // this is the step itself
              // close iteration
          // close iteration

          // ! LOOK INTO IF ANY IDs DON'T COME WITH INSTRUCTIONS !
        </ScrollView>
      )
  }
}
