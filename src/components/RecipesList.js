import React, {Component} from 'react';
import {ScrollView, Text, View, Image, ActivityIndicator} from 'react-native';
// import {API_KEY} from '../utils/RapidApiSpoonacularApiKey';

export default class RecipesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.recipesData.length) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView>
          {this.props.recipesData.map((data, index) => (
            <View key={index}>
              <Image
                source={{uri: data.image}}
                style={{width: 400, height: 400}}
              />
              <Text>
                <Text> {data.title} </Text>
                <Text>
                  {' '}
                  {'\n'}Missing ingredients: {data.missedIngredientCount}{' '}
                </Text>
              </Text>
            </View>
          ))}
          <Button
            title="Go Back"
            onPress={ () => this.props.goToPage("ingredients") }
          />
        </ScrollView>
      );
    }
  }
}
