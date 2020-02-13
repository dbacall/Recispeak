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
  Image,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = { newIngredient: '' }
  }
  addIngredient(newIngredient) {
    if(this.state.newIngredient.length > 0) {
      this.setState({
          ingredients: this.props.ingredients.push(newIngredient.toLowerCase()),
        })
    }
    this.textInput.clear()
  }
  render() {
    if (this.props.ingredients.length !== 0 && this.props.ingredientsLoaded) {
      return (
        <DismissKeyboard>
        <View
      style={styles.viewView}>
      <View
        pointerEvents="box-none"
        style={{
          alignSelf: "stretch",
          height: 210,
        }}>
        <Image
          source={require("./../../assets/images/8fc08fd48cd8eda6dfca9ef25047c865.png")}
          style={styles.backgroundImage}/>
          <TouchableOpacity
  						onPress={() => this.props.goToPage("record")}
  						style={styles.goBackButton}>
  						<Image
  							source={require("./../../assets/images/arrow.png")}
  							style={styles.goBackButtonImage}/>
  				</TouchableOpacity>
      </View>
      <Text
        style={styles.titleText}>Ingredients</Text>
      <ScrollView
        style={styles.placeScrollView}>
        {this.props.ingredients.map((ingredient, key) => (
        <View
          style={styles.ingredientView}
          key={key}>
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 7,
              bottom: 0,
            }}>
            <Text
              style={styles.avocadoText}>{ingredient}</Text>
            <View
              style={{
                flex: 1,
              }}/>
            <Image
              source={require("./../../assets/images/path-3.png")}
              style={styles.path3Image}/>
          </View>
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              justifyContent: "center",
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => this.props.deleteIngredient(ingredient)}
              style={styles.deleteTrashVectoButton}>
              <Image
                source={require("./../../assets/images/delete-trash-vector-design-512.png")}
                style={styles.deleteTrashVectoButtonImage}/>
            </TouchableOpacity>
          </View>
        </View>
        ))}
      </ScrollView>
      <View
        style={{
          flex: 1,
        }}/>
      <View
        style={styles.viewTwoView}>
        <Image
          source={require("./../../assets/images/path-3.png")}
          style={styles.path3TwoImage}/>
        <View
          style={{
            flex: 1,
          }}/>
        <View
          pointerEvents="box-none"
          style={{
            height: 51,
          }}>
          <View
            style={styles.rectangle32View}/>
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              left: 19,
              right: 15,
              bottom: 9,
              height: 33,
              flexDirection: "row",
              alignItems: "flex-end",
            }}>
            <TextInput
              autoCorrect={false}
              placeholder="Type ingredient"
              onChangeText={(newIngredient) => this.setState({newIngredient})}
              ref={input => { this.textInput = input }}
              style={styles.typeIngredientsTextInput}
              />
            <View
              style={{
                flex: 1,
              }}/>
            <TouchableOpacity
              onPress={() => this.addIngredient(this.state.newIngredient)}
              style={styles.plusButton}>
              <Image
                source={require("./../../assets/images/plus.png")}
                style={styles.plusButtonImage}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
					onPress={() => this.props.goToRecipes()}
					style={styles.seeRecipesButton}>
					<Text
						style={styles.seeRecipesButtonText}>See Recipes</Text>
				</TouchableOpacity>
    </View>
    </DismissKeyboard>
      );
    } else if (this.props.ingredients.length === 0 && this.props.ingredientsLoaded) {
      return (
        <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 210,
					}}>
					<Image
						source={require("./../../assets/images/8fc08fd48cd8eda6dfca9ef25047c865.png")}
						style={styles.fc08fd48cd8eda6dfcaImage}/>
					<Image
						source={require("./../../assets/images/arrow.png")}
						style={styles.ellipse1Image}/>
					<Text
						style={styles.textText}>{"<"}</Text>
				</View>
				<Text
					style={styles.noIngredientsFoundText}>No ingredients found</Text>
				<Image
					source={require("./../../assets/images/path-3.png")}
					style={styles.path3Image}/>
				<TouchableOpacity
					onPress={() => this.props.goToPage('record')}
					style={styles.group1Button}>
					<Text
						style={styles.group1ButtonText}>Try Again</Text>
				</TouchableOpacity>
			</View>
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
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
    // height: 140,
	},
	goBackImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 14,
		width: 33,
		top: 119,
		height: 32,
	},
	titleText: {
		backgroundColor: "transparent",
    color: "black",
    fontFamily: "ModernNo20",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		marginRight: 80,
    marginTop: -100,
	},
	placeScrollView: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "transparent",
		borderStyle: "solid",
		width: 291,
		height: 238,
		marginTop: 31,
	},
	ingredientView: {
		backgroundColor: "transparent",
		height: 46,
		marginTop: 6,
	},
	avocadoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 29,
	},
	path3Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 3,
	},
	deleteTrashVectoButtonText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	deleteTrashVectoButtonImage: {
		resizeMode: "contain",
	},
	deleteTrashVectoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 24,
		height: 24,
		marginRight: 22,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		width: 290,
		height: 51,
		marginBottom: 32,
	},
	path3TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 291,
		height: 3,
	},
	rectangle32View: {
		backgroundColor: "rgb(223, 216, 214)",
		opacity: 0.34,
		position: "absolute",
		alignSelf: "center",
		width: 290,
		bottom: 0,
		height: 51,
	},
	typeIngredientsTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(116, 114, 114)",
		fontFamily: "AdobeArabicRegular",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 210,
		height: 33,
	},
	plusButtonText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22,
		height: 22,
		marginBottom: 5,
    marginRight: 9,
	},
	plusButtonImage: {
		resizeMode: "contain",
	},
  seeRecipesButtonText: {
		color: "white",
		fontFamily: "AdobeArabicRegular",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	seeRecipesButton: {
		backgroundColor: "rgb(38, 41, 56)",
		borderRadius: 17,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 141,
		height: 33,
		marginBottom: 66,
	},
	seeRecipesButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
  goBackButtonImage: {
		resizeMode: "contain",
	},
	goBackButton: {
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
  noIngredientsFoundText: {
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 100,
  },
  path3Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 230,
		height: 3,
		marginTop: 8,
  },
  group1ButtonText: {
		color: "white",
		fontFamily: "AdobeArabicRegular",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group1Button: {
		backgroundColor: "rgb(38, 41, 56)",
		borderRadius: 11,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 141,
		height: 33,
		marginRight: 104,
		marginTop: 61,
	},
	group1ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
