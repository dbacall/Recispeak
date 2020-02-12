import React, {Component} from 'react';
import {SPOONACULAR_API_KEY} from '../utils/RapidApiSpoonacularApiKey';
import {StyleSheet, ScrollView, TouchableOpacity, Text, View, Image, ActivityIndicator} from 'react-native';
export default class Recipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let recipe = this.props.individualRecipeData;
    let ingredientsList = this.props.individualRecipeData.extendedIngredients;
    let instructions = this.props.individualRecipeData.analyzedInstructions;

    return (
      <View
				style={styles.viewView}>
				<ScrollView
					contentContainerStyle={styles.viewScrollView}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 354,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: 291,
							}}>
							<Image
								source={{uri: recipe.image}}
								style={styles.recipeImage}/>
							<Text
								style={styles.recipeTitle}>{recipe.title}</Text>
						</View>
						<TouchableOpacity
							onPress={() => this.props.goToPage('ingredients')}
							style={styles.group6Button}>
							<Image
								source={require("./../../assets/images/group-6.png")}
								style={styles.group6ButtonImage}/>
						</TouchableOpacity>
						<View
							style={styles.viewTwoView}>
							<View
								style={styles.rectangle30View}/>
							<Text
								style={styles.servingsText}>  {recipe.servings}{"\n"}Servings</Text>
							<Image
								source={require("./../../assets/images/user.png")}
								style={styles.userImage}/>
						</View>
						<View
							style={styles.viewThreeView}>
							<View
								style={styles.rectangle29View}/>
							<Text
								style={styles.minutesText}>  {recipe.readyInMinutes}{"\n"}Minutes</Text>
							<Image
								source={require("./../../assets/images/stopwatch.png")}
								style={styles.stopwatchImage}/>
						</View>
					</View>
					<View
						style={styles.viewFourView}>
						<Text
							style={styles.ingredientsText}>Ingredients</Text>
						<Image
							source={require("./../../assets/images/path-12.png")}
							style={styles.path12Image}/>
					</View>
					<Text style={styles.ingredientText}>
          {ingredientsList.map((j, k) => (
            <Text>{ingredientsList[k].original}{"\n"}</Text>
          ))}
          </Text>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							width: 289,
							marginRight: 35,
							marginTop: 16,
							marginBottom: 110,
						}}>
						<View
							style={styles.viewFiveView}>
							<Text
								style={styles.methodText}>Method</Text>
							<Image
								source={require("./../../assets/images/path-12.png")}
								style={styles.path13Image}/>
						</View>
            {instructions.map((item, key) => (
						<Text style={styles.stepText}>
              {instructions[key].name.length > 0 && (
                <Text style={styles.stepSubHeadingText}>
                  {instructions[key].name}{"\n"}{"\n"}
                </Text>
              )}
              {instructions[key].steps.map((i, k) => (
              <Text>{instructions[key].steps[k].number}.  {instructions[key].steps[k].step}{"\n"}{"\n"}</Text>
              ))}
            </Text>
            ))}
					</View>
				</ScrollView>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewScrollView: {
		backgroundColor: "transparent",
		alignItems: "flex-end",
	},
	recipeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 193,
	},
	recipeTitle: {
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 38,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 311,
		marginTop: 16,
	},
	group6ButtonImage: {
		resizeMode: "contain",
	},
	group6Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 13,
		width: 33,
		top: 10,
		height: 32,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 13,
		width: 289,
		top: 10,
		height: 344,
	},
	rectangle30View: {
		backgroundColor: "rgb(211, 199, 193)",
		opacity: 0.76,
		borderRadius: 11,
		position: "absolute",
		right: 0,
		width: 110,
		top: 284,
		height: 60,
	},
	servingsText: {
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		paddingTop: 8,
		backgroundColor: "transparent",
		position: "absolute",
		right: 10,
		width: 90,
		top: 293,
	},
	userImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 59,
		width: 14,
		top: 298,
		height: 14,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 56,
		width: 110,
		top: 294,
		height: 60,
	},
	rectangle29View: {
		backgroundColor: "rgb(211, 199, 193)",
		opacity: 0.76,
		borderRadius: 11,
		position: "absolute",
		left: 0,
		width: 110,
		top: 0,
		height: 60,
	},
	minutesText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		paddingTop: 8,
		position: "absolute",
		left: 12,
		width: 90,
		top: 9,
	},
	stopwatchImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 34,
		width: 15,
		top: 14,
		height: 15,
	},
	viewFourView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 289,
		height: 35,
		marginTop: 26,
	},
  stepSubHeadingText: {
    fontWeight: 'bold'
  },
	ingredientsText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 6,
		width: 166,
		top: 0,
	},
	path12Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		alignSelf: "center",
		width: 289,
		top: 35,
		height: 3,
	},
	ingredientText: {
		color: "rgb(62, 60, 60)",
		fontFamily: "AdobeArabicRegular",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 23,
		paddingTop: 7,
		backgroundColor: "transparent",
		width: 281,
		marginRight: 35,
		marginTop: 3,
	},
	viewFiveView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 289,
		top: -20,
		height: 35,
	},
	methodText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 6,
		width: 166,
		top: 0,
	},
	path13Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		alignSelf: "center",
		width: 289,
		top: 35,
		height: 3,
	},
	stepText: {
		backgroundColor: "transparent",
		color: "rgb(62, 60, 60)",
		fontFamily: "AdobeArabicRegular",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		paddingTop: 7,
		right: 2,
		width: 281,
		bottom: 12,
	},
})
