import 'react-native';
import React from 'react';
import Speakipe from '../../Speakipe';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'react-native';

import 'jest-enzyme';

describe('Speakipe should work as expected', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    configure({adapter: new Adapter()});
    wrapper = shallow(<Speakipe />);
    component = wrapper.instance();
  });

  test('should render voice component when app is opened', () => {
    expect(wrapper.find("VoiceNative")).toHaveLength(1)
  });

  test('should render ingredients component when view changed to ingredients', () => {
    component.setState({view: "ingredients"})
    expect(wrapper.find("Ingredients")).toHaveLength(1)
  });

  test('should render recipes list component when view changed to recipes_list', () => {
    component.setState({view: "recipes_list"})
    expect(wrapper.find("RecipesList")).toHaveLength(1)
  });

  test('should render individual recipe component when view changed to recipe', () => {
    component.setState({view: "recipe"})
    expect(wrapper.find("Recipe")).toHaveLength(1)
  });

  test('should render individual recipe component when view changed to recipe', () => {
    component.setState({view: "recipe"})
    expect(wrapper.find("Recipe")).toHaveLength(1)
  });

  test('should delete word duplicates', () => {
    expect(component.deleteWordDuplicates(['hello', 'hello'])).toEqual([
      'hello',
    ]);
  });

  test('pressing start recording button calls _startRecognition', () => {
    const spy = jest.spyOn(component, 'fetchIngredients').mockImplementation(() => Promise.resolve());

    component.forceUpdate();
    component.setState({transcript: ['Original']})
    component.setState({transcript: ['Changed']})

    expect(spy).toHaveBeenCalled();
  });

  // test('voice page should render correctly', () => {
  //   const voice = renderer.create(<VoiceNative />).toJSON();
  //   expect(voice).toMatchSnapshot();
  // });


  // component.setState({view: "ingredients"})
  // expect(wrapper.find("Text").toHaveLength(2))
  // expect(wrapper.find("View").toHaveLength(2))
  // Expect not to find the other stuff
});
