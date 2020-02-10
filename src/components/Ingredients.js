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
            <Text key={key}> {ingredient} </Text>
          ))}
          <Button
            title="See Recipes"
            onPress={ () => this.props.goToPage("recipes_list") }
          />
        </ScrollView>
      );
  }
}
