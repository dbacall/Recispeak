import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';

export default class RecipesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Button title="Back" onPress={() => this.props.goToPage('ingredients')} />
        {this.props.recipesData.map((data, index) => (
          <TouchableOpacity
            onPress={() => this.props.goToIndividualRecipe(data.id)}>
            <Image
              source={{uri: data.image}}
              style={{width: 400, height: 400}}
            />
            <Text>
              <Text>{data.title}</Text>
              <Text>
                {' '}
                {'\n'}Missing ingredients: {data.missedIngredientCount}{' '}
              </Text>
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
