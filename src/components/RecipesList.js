import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Recipe from './Recipe';
// import {API_KEY} from '../utils/RapidApiSpoonacularApiKey';

export default class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recipesData: [],
      ignorePantry: false,
      showRecipe: false,
      selectedID: 0,
    };
  }

  componentDidMount() {
    let body =
      'https://api.spoonacular.com/recipes/findByIngredients?ranking=1&number=2';
    let parameter = '&ingredients=' + this.props.ingredients.join(',');
    let ignorePantry = '&ignorePantry=' + this.state.ignorePantry.toString();

    let apiKey;
    if (API_KEY == null) {
      apiKey = '&apiKey=' + System.getenv('API_KEY');
    } else {
      apiKey = '&apiKey=' + API_KEY;
    }

    let url = body + parameter + ignorePantry + apiKey;
    this.fetchRecipes(url);
  }

  fetchRecipes(url) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          recipesData: responseJson,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  setShowRecipeState(selectedID) {
    this.setState({
      showRecipe: true,
      selectedID: selectedID,
    });
  }

  render() {
    console.log(this.state.recipesData);
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else if (!this.state.isLoading && !this.state.showRecipe) {
      return (
        <ScrollView>
          {this.state.recipesData.map((data, index) => (
            <TouchableOpacity onPress={() => this.setShowRecipeState(data.id)}>
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
    } else {
      return <Recipe id={this.state.selectedID} />;
    }
  }
}
