import React, {Component} from 'react';
import {ScrollView, Text, View, Button, ActivityIndicator} from 'react-native';
import RecipesList from './RecipesList';

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <ScrollView>
          {this.props.ingredients.map((ingredient, key) => (
            <Button
            title={ingredient}
            key={key}
            onPress={ () => this.props.deleteIngredient(ingredient) }
          />
          ))}
          <Button
            title="See Recipes"
            onPress={ () => this.props.goToRecipes() }
          />
        </ScrollView>
      );
  }
}
