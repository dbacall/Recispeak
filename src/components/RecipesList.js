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
import { Dropdown } from 'react-native-material-dropdown';

export default class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      missingIngredientsAmount: 6 
    }
  }
  render() {
    return (
      <ScrollView>
        <Button title="Back" onPress={() => this.props.goToPage('ingredients')} />
        <Dropdown
          label='Filter Missing Ingredients'
          data={[{
            value: 1,
          }, {
            value: 2,
          }, {
            value: 3,
          }, {
            value: 4,
          }, {
            value: '5+',
          }]}
          onChangeText={ (value) => { this.setState({missingIngredientsAmount: value })}}
        />
        {this.props.recipesData.map((data, index) => (
          this.state.missingIngredientsAmount === '5+' ?
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
            </TouchableOpacity> :
          data.missedIngredientCount <= this.state.missingIngredientsAmount ?
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
          </TouchableOpacity> : null 
        ))}
      </ScrollView>
    );
  }
}
