import React, {Component} from 'react';
import {SPOONACULAR_API_KEY} from '../utils/RapidApiSpoonacularApiKey';
import {ScrollView, Text, View, Image, ActivityIndicator} from 'react-native';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recipeData: [],
      instructionsData: [],
      id: 0,
    };
  }

  componentDidMount() {
    let body = 'https://api.spoonacular.com/recipes/';
    let id = this.props.individualRecipeID;
    let end = '/information?includeNutrition=true&';
    let apiKey = 'apiKey=' + SPOONACULAR_API_KEY;
    let url = body + id + end + apiKey;
    this.fetchRecipe(url);
  }

  fetchRecipe(url) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          recipeData: responseJson,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let recipe = this.state.recipeData;
    let ingredientsList = this.state.recipeData.extendedIngredients;
    let instructions = this.state.recipeData.analyzedInstructions;

      return (
        <ScrollView>
          <View>
            <Image
              source={{uri: recipe.image}}
              style={{width: 400, height: 400}}
            />
            <Text>
              <Text>{recipe.title} </Text>
              <Text>
                {' '}
                {'\n'}
                {recipe.readyInMinutes} minutes
              </Text>
              <Text>
                {' '}
                {'\n'}
                {recipe.servings} servings
              </Text>
              {ingredientsList.map((j, k) => (
                <Text>
                  {' '}
                  {'\n'}
                  {ingredientsList[k].original}{' '}
                </Text>
              ))}
            </Text>
          </View>

          <View>
            {instructions.map((item, key) => (
              <Text>
                {instructions[key].name.length > 0 && (
                  <Text>{instructions[key].name}</Text>
                )}
                {instructions[key].steps.map((i, k) => (
                  <Text>
                    <Text>
                      {'\n'}
                      {instructions[key].steps[k].number}
                    </Text>
                    <Text>
                      {'\n'}
                      {instructions[key].steps[k].step}
                    </Text>
                  </Text>
                ))}
              </Text>
            ))}
          </View>
        </ScrollView>
      );
  }
}
