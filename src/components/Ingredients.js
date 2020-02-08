import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import {API_KEY} from '../utils/RapidApiSpoonacularApiKey';
export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ingredientsData: [],
      ingredients: [],
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

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView>
          {this.state.ingredientsData.map((val, key) => (
            <Text> {val.annotation} </Text>
          ))}
        </ScrollView>
      );
    }
  }
}
