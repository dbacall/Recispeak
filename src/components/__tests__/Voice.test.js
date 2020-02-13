import 'react-native';
import React from 'react';
import VoiceNative from '../Voice';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Button} from 'react-native';
import 'jest-enzyme';
import renderer from 'react-test-renderer';

describe('Voice component should work as expected', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    configure({adapter: new Adapter()});
    wrapper = shallow(<VoiceNative />);
    component = wrapper.instance();
  });

  test('pressing start recording button calls _startRecognition', () => {
    console.log(require('../../assets/images/0deb274c700ff6d8ea6439fb62861546.png'))
    const spy = jest.spyOn(component, '_startRecognition');
    component.forceUpdate();
    wrapper
      .find(Button)
      .first()
      .props()
      .onPress();

    expect(spy).toHaveBeenCalled();
  });

  // test('voice page should render correctly', () => {
  //   const voice = renderer.create(<VoiceNative />).toJSON();
  //   expect(voice).toMatchSnapshot();
  // });
});
