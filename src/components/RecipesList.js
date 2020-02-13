import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
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
    let element = this.props.recipesData.map((data, index) => (
      this.state.missingIngredientsAmount === '5+' ?
      <TouchableOpacity
        key={index}
        onPress={() => this.props.goToIndividualRecipe(data.id)}>
        <View
          pointerEvents="box-none"
          style={{
            height: 147,
            flexDirection: "row",
            alignItems: "flex-start",
          }}>
          <Image
            source={{uri: data.image}}
            style={styles.recipeImage}/>
          <View
            style={{
              flex: 1,
            }}/>
          <View
            pointerEvents="box-none"
            style={{
              width: 147,
              height: 127,
              marginTop: 3,
              alignItems: "flex-end",
            }}>
            <View
              pointerEvents="box-none"
              style={{
                width: 110,
                height: 17,
              }}>
              <View
                style={styles.rectangle21View}/>
              <Text
                style={styles.missingIngredientsText}>Missing Ingredients: {data.missedIngredientCount}
              </Text>
            </View>
            <Text
              style={styles.recipeTitleText}>{data.title}</Text>
          </View>
        </View>
        <Image
          source={require("./../../assets/images/path-9.png")}
          style={styles.path9Image}/>
      </TouchableOpacity> :
          data.missedIngredientCount <= this.state.missingIngredientsAmount ?
          <TouchableOpacity
            key={index}
            onPress={() => this.props.goToIndividualRecipe(data.id)}>
            <View
              pointerEvents="box-none"
              style={{
                height: 147,
                flexDirection: "row",
                alignItems: "flex-start",
              }}>
              <Image
                source={{uri: data.image}}
                style={styles.recipeImage}/>
              <View
                style={{
                  flex: 1,
                }}/>
              <View
                pointerEvents="box-none"
                style={{
                  width: 147,
                  height: 127,
                  marginTop: 3,
                  alignItems: "flex-end",
                }}>
                <View
                  pointerEvents="box-none"
                  style={{
                    width: 110,
                    height: 17,
                  }}>
                  <View
                    style={styles.rectangle21View}/>
                  <Text
                    style={styles.missingIngredientsText}>Missing Ingredients: {data.missedIngredientCount}
                  </Text>
                </View>
                <Text
                  style={styles.recipeTitleText}>{data.title}</Text>
              </View>
            </View>
            <Image
              source={require("./../../assets/images/path-9.png")}
              style={styles.path9Image}/>
          </TouchableOpacity> : null
        ));
    return (
      <View
        style={styles.viewView}>
        <ScrollView
          contentContainerStyle={styles.viewScrollView}>
          <View
            pointerEvents="box-none"
            style={{
              alignSelf: "stretch",
              height: 55,
            }}>
            <View
              style={styles.rectangle20View}/>
              <TouchableOpacity
  							onPress={() => this.props.goToPage("ingredients")}
  							style={styles.group9Button}>
  							<Image
  								source={require("./../../assets/images/arrow.png")}
  								style={styles.group9ButtonImage}/>
  						</TouchableOpacity>
          </View>
          <Dropdown
						containerStyle={styles.dropdownView}
            label='Filter By Missing Ingredients'
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
          <View>
            {element}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: "white",
    flex: 1,
  },
  viewScrollView: {
    backgroundColor: "transparent",
    alignItems: "center",
  },
  rectangle20View: {
    backgroundColor: "rgb(38, 41, 56)",
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 55,
  },
  group9Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 17,
		width: 33,
		top: 12,
		height: 32,
	},
	group9ButtonImage: {
		resizeMode: "contain",
	},
  dropdownView: {
		// backgroundColor: "transparent",
		// opacity: 0.62,
		width: "80%",
    fontFamily: "AdobeArabicRegular",
    fontSize: 14,
		// height: 27,
		// marginTop: 5,

	},
  viewTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 324,
		top: 0,
		height: 157,
		flexDirection: "row",
		alignItems: "flex-start",
	},
  recipeImage: {
    resizeMode: "contain",
    backgroundColor: "transparent",
    width: 165,
    height: 147,
  },
  rectangle21View: {
		backgroundColor: "rgb(211, 199, 193)",
		borderRadius: 8.5,
		position: "absolute",
		right: 0,
		width: 129,
		top: 9,
		height: 20,
	},
  missingIngredientsText: {
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		right: 14,
		width: 100,
		top: 10,
	},
  recipeTitleText: {
    color: "black",
    fontFamily: "AdobeArabicRegular",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 134,
    marginRight: 0,
    marginTop: 17,
    overflow: "scroll",
  },
  path9Image: {
    resizeMode: "cover",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    width: 311,
    height: 3,
    marginTop: 10,
  },
})
