import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  Alert,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {inlineStyles} from 'react-native-svg';

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = { newIngredient: '' }
  }

  addIngredient(newIngredient) {
    this.setState({
      ingredients: this.props.ingredients.push(newIngredient),
    })
    this.textInput.clear()
  }

  render() {
    if (this.props.ingredients.length !== 0 && this.props.ingredientsLoaded) {
      return (
        <ScrollView>
          {this.props.ingredients.map((ingredient, key) => (
            <View style={styles.containerMain}>
              <Text style={styles.button}> {ingredient} </Text>
              <Button
                title="D"
                style={styles.deleteButton}
                activeOpacity={0.6}
                onPress={() => this.props.deleteIngredient(ingredient)}
              />
            </View>
          ))}
          <TextInput
            style={styles.textInput}
            placeholder="Type ingredient here..."
            onChangeText={(newIngredient) => this.setState({newIngredient})}
            ref={input => { this.textInput = input }}
          />
          <Button title="Add" onPress={() => this.addIngredient(this.state.newIngredient)} />
          <Button title="See Recipes" onPress={() => this.props.goToRecipes()} />
          <Button title="Back" onPress={() => this.props.goToPage('record')} />
        </ScrollView>
      );
    } else if (this.props.ingredients.length === 0 && this.props.ingredientsLoaded) {
      return (
        <ScrollView>
              <Text> No ingredients detected! </Text>             
          <Button title="Try again" onPress={() => this.props.goToPage('record')} />
        </ScrollView>
      ) 
    } else {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
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

  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  }
});
