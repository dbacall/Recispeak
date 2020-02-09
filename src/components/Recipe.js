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
    let id =  this.state.id;
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
    console.log(responseJson)
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
    // console.log(this.state.recipeData)
    if(this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator/>
        </View>
      )
    }else {
      return (
        <ScrollView>
          {this.state.recipeData.map((element, index) =>
            <View key={index}>
              <Image source={{ uri: element.image}} style={{width: 400, height: 400}}/>
              <Text>
                 <Text> {element.title} </Text>
                <Text> {'\n'}{element.readyInMinutes} </Text>
                <Text> {'\n'}{element.servings} </Text>
                {element.extendedIngredients.map((item) =>
                  <Text> {'\n'}{item.original} </Text>
                )}
              </Text>
            </View>
          )}
          {this.state.instructionsData.map((step) =>
            <View>
              <Text>
              {step.name.length > 0 &&
                <Text> {step.name} </Text>}
              {step.map((instruction) =>
                <Text>
                  <Text> {'\n'}{instruction.number} </Text> 
                  <Text> {'\n'}{instruction.step} </Text> 
                </Text>
              )}
              </Text>
            </View>
            )}
          // ! LOOK INTO IF ANY IDs DON'T COME WITH INSTRUCTIONS !
        </ScrollView>
      )
    }
  }
}