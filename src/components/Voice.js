import React from 'react';
import {StyleSheet, Text, View, Button, AppRegistry} from 'react-native';
import Voice from 'react-native-voice';
import Ingredients from './Ingredients';

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
    return (
      <View>
        <Button
          id="start-recording"
          style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"
        />
        <Text>Press start to begin recording</Text>
      </View>
    );
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
