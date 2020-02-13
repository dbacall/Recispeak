import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text, AppRegistry} from 'react-native';
import Voice from 'react-native-voice';

export default class VoiceNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: '',
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
  onSpeechStart() {
    this.setState({
      started: '√',
    });
  }
  onSpeechResults(e) {
    this.props.setTranscript(e.value);
    this.props.goToPage('ingredients');
  }
  async _startRecognition() {
    this.props.setTranscript([]);
    this.setState({
      started: '',
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    console.log(this.props)
    return (
      <View
    			style={styles.viewView}>
    			<Image
    				source={require("../../assets/images/0deb274c700ff6d8ea6439fb62861546.png")}
    				style={styles.backgroundImage}/>
    			<View
    				pointerEvents="box-none"
    				style={{
    					position: "absolute",
    					alignSelf: "center",
    					width: 196,
    					top: 56,
    					bottom: 102,
    					alignItems: "center",
    				}}>
    				<View
    					style={styles.titleView}>
    					<Image
    						source={require("../../assets/images/path-4.png")}
    						style={styles.path4Image}/>
    					<Text
    						style={styles.recispeakText}>Recispeak</Text>
    				</View>
    				<View
    					style={{
    						flex: 1,
    					}}/>
    				<TouchableOpacity
              onPress={this._startRecognition.bind(this)}
    					style={styles.viewTwoView}>
    					<View
    						pointerEvents="box-none"
    						style={{
    							position: "absolute",
    							left: 0,
    							right: 0,
    							top: 0,
    							bottom: 0,
    							justifyContent: "center",
    						}}>
    						<View
    							style={styles.rectangle12Button}/>
    					</View>
    					<View
    						pointerEvents="box-none"
    						style={{
    							position: "absolute",
    							left: 58,
    							right: 22,
    							bottom: 8,
    							height: 35,
    							flexDirection: "row",
    							alignItems: "flex-end",
    						}}>
    						<Text
    							style={styles.startText}>Start </Text>
    						<View
    							style={{
    								flex: 1,
    							}}/>
    						<Image
    							source={require("../../assets/images/mic-copy.png")}
    							style={styles.micCopyImage}/>
    					</View>
    				</TouchableOpacity>
    			</View>
    		</View>
    );
  }
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		right: -46,
		bottom: -34,
	},
	titleView: {
		backgroundColor: "transparent",
		width: 196,
		height: 86,
	},
	path4Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 196,
		top: 0,
		height: 86,
	},
	recispeakText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ModernNo20",
		fontSize: 46,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		alignSelf: "center",
		top: 14,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		width: 180,
		height: 64,
	},
	rectangle12ButtonText: {
		color: "black",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangle12Button: {
		backgroundColor: "white",
		opacity: 0.8,
		borderRadius: 11,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 53,
	},
	rectangle12ButtonImage: {
		resizeMode: "contain",
	},
	startText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "AdobeArabicRegular",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	micCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22,
		height: 22,
		marginBottom: 13,
	},
})
AppRegistry.registerComponent('VoiceNative', () => VoiceNative);
