import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  Navigator,
} from 'react-native';

export default class VoiceNative extends React.Component {
  render() {
    return(
      <View>
          <Text style={styles.transcript}>
              Transcript
          </Text>
          {console.log(this.state.results)}
          {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
          )}
          
        </View>
    )
  }
}
