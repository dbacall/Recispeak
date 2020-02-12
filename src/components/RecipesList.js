import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Recipe } from '../Helpers';

export default class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      missingIngredientsAmount: '5+'
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
            <Recipe data={data} /> :
          data.missedIngredientCount <= this.state.missingIngredientsAmount ?
            <Recipe data={data} /> : null 
        ))}
      </ScrollView>
    );
  }
}
