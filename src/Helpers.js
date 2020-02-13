import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

export function ApiKeyChooser(key) {
  // console.log(apiKey)
  if (key == null) {
    this.state.apiKey = System.getenv(`${key}`);
  } else {
    this.state.apiKey = key;
  }
}

export const Recipe = ({data}) => (
  <TouchableOpacity onPress={() => this.props.goToIndividualRecipe(data.id)}>
    <Image source={{uri: data.image}} style={{width: 400, height: 400}} />
    <Text>
      <Text>{data.title}</Text>
      <Text>
        {' '}
        {'\n'}Missing ingredients: {data.missedIngredientCount}{' '}
      </Text>
    </Text>
  </TouchableOpacity>
);
