import React, {Component} from 'react';
import {ScrollView, Text, Alert, View, TouchableOpacity, Button, StyleSheet, Animated} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { inlineStyles } from 'react-native-svg';

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <ScrollView>
          {this.props.ingredients.map((ingredient, key) => (
            <View style={styles.containerMain}>
              <TouchableOpacity
              style={styles.button}
              title={ingredient}
              activeOpacity={1}
              key={key}
              >
              <Text style={styles.TextStyle}> {ingredient} </Text>  
              </TouchableOpacity><FontAwesomeIcon 
                style={styles.deleteButton}
                activeOpacity={0.6}
                icon={ faTrashAlt } 
                onPress={() => this.props.deleteIngredient(ingredient)}
              />
            </View>
          ))}
          <Button
            title="See Recipes"
            onPress={ () => this.props.goToRecipes() }
          />
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
 
  button: {
    width: '70%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#EE5407',
  },
  
  deleteButton: {
    fontSize: 10,
    // display: 'flex',
    width: '60%',
    height: 40,
    padding: 20,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'green',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
