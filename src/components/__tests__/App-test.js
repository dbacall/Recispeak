/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../../../App';
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


beforeEach(() => {
  configure({ adapter: new Adapter() })
  wrapper = shallow(<VoiceNative/>)
  component = wrapper.instance()
})

it('renders correctly', () => {
  renderer.create(<App />);
});

