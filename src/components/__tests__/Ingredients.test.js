import 'react-native';
import React from 'react';
import Ingredients from '../Ingredients';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'jest-enzyme'

describe('Ingredients component should work as expected', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    configure({adapter: new Adapter()});
    wrapper = shallow(<Ingredients ingredients={[]} />);
    component = wrapper.instance();
  });

  test('should delete word duplicates', () => {
    expect(component.deleteWordDuplicates(['hello', 'hello'])).toEqual([
      'hello',
    ]);
  });
});
