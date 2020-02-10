import 'react-native';
import React from 'react';
import Speakipe from '../../Speakipe';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import 'jest-enzyme'

describe('Ingredients component should work as expected', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    configure({adapter: new Adapter()});
    wrapper = shallow(<Speakipe />);
    component = wrapper.instance();
  });

  test('should delete word duplicates', () => {
    expect(component.deleteWordDuplicates(['hello', 'hello'])).toEqual([
      'hello',
    ]);

    component.setState({view: "ingredients"})
    expect(wrapper.find("Text").toHaveLength(2))
    expect(wrapper.find("View").toHaveLength(2))
    // Expect not to find the other stuff
  });
});
