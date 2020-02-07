import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  Navigator,
} from 'react-native';
import Voice from 'react-native-voice';
// import Ingredients from './Ingredients'

export default class VoiceNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // recognized: '',
      started: '',
      // ended: '',
      results: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    // Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    // Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  };
// onSpeechRecognized(e) {
//     this.setState({
//       recognized: '√',
//     });
//   };
// onSpeechEnd(e) {
//   setTimeout(function(){this.setState({
//     ended: '√',
//   })
//   }, 3000);
// };
onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }

async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      ended: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    if (this.state.results.length == 0) {
      return (
        <View>
          <Text style={styles.transcript}>
              Transcript
          </Text>
          {console.log(this.state.results)}
          {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
          )}
          <Button style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"></Button>
        </View>
      );
    } else
    <Navigator>
      {this.props.navigator.push({
        component: Ingredients,
        passProps: {ingredients: this.state.results},
      })}
    </Navigator>
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    top: '400%',
  },
});
AppRegistry.registerComponent('VoiceNative', () => VoiceNative);
