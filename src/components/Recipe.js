import React, {Component} from 'react';
// import {SPOONACULAR_API_KEY} from '../utils/RapidApiSpoonacularApiKey';
import {ScrollView, Text, View, Image, Button} from 'react-native';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let recipe = this.props.individualRecipeData;
    let ingredientsList = this.props.individualRecipeData.extendedIngredients;
    let instructions = this.props.individualRecipeData.analyzedInstructions;

    return (
      <ScrollView>
        <View>
          <Button title="Back" onPress={() => this.props.goToPage('recipes_list')} />
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
