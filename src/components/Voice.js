import React from 'react';
import {StyleSheet, Text, View, Button, AppRegistry} from 'react-native';
import Voice from 'react-native-voice';
import Ingredients from './Ingredients';

export default class VoiceNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: '',
      results: [],
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
    this.setState({
      results: e.value,
    });
  }

  async _startRecognition() {
    this.setState({
      started: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return this.state.results.length ? (
      <Ingredients ingredients={this.state.results} />
    ) : (
      <View>
        <Text style={styles.transcript}>Transcript</Text>
        {this.state.results.map((result, index) => (
          <Text key={result + index} style={styles.transcript}>
            {result}
          </Text>
        ))}
        <Button
          style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"
        />
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
