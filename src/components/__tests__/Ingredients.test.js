import 'react-native';
import React from 'react';
import Ingredients from '../Ingredients';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'react-native';
import 'jest-enzyme';
import renderer from 'react-test-renderer';

describe('Ingredients component should work as expected', () => {
  let wrapper;
  let component;
  let props;
  let props2;
  let component2;
  let wrapper2;

  beforeEach(() => {
    props = {
      deleteIngredient: jest.fn(),
      ingredients: ['banana', 'apple'],
      goToPage: jest.fn(),
      goToRecipes: jest.fn()
    };
    configure({adapter: new Adapter()});
    wrapper = shallow(<Ingredients {...props}/>);
    component = wrapper.instance();
    component.setState({ingredientsLoaded: true})
  });

  // test('ingredients page should render differently with no props', async () => {
  //   setTimeout(() => {
  //     const noProps = renderer.create(<Ingredients ingredients={['banana', 'apple']}/>).toJSON();
  //     expect(noProps.toMatchSnapshot());
  //     done();
  //   }, 1000);
  // });

  test('delete button calls delete props function', () => {
    wrapper.find(Button).at(1).props().onPress()
    expect(props.deleteIngredient).toHaveBeenCalled();
  });

  test('pressing add button calls addIngredient function', () => {
    const addIngredient = jest.spyOn(component, 'addIngredient').mockImplementation(() => Promise.resolve());
    component.forceUpdate();
    wrapper.find(Button).at(2).props().onPress()

    expect(addIngredient).toHaveBeenCalled();
  });

  test('see recipes button calls goToRecipes props function', () => {
    wrapper.find(Button).at(3).props().onPress()
    expect(props.goToRecipes).toHaveBeenCalled();
  });

  test('back button calls goToPage function', () => {
    wrapper.find(Button).at(4).props().onPress()
    expect(props.goToPage).toHaveBeenCalledWith('record');
  });

  test('no ingredients renders try again', () => {
    props2 = {
      deleteIngredient: jest.fn(),
      ingredients: [],
      goToPage: jest.fn(),
      goToRecipes: jest.fn(),
      ingredientsLoaded: true
    };

    wrapper2 = shallow(<Ingredients {...props2}/>);
    component2 = wrapper2.instance();
    component2.setState({ingredientsLoaded: true})

    expect(wrapper2.find('Text')).toHaveLength(1);
    expect(wrapper2.find('Button')).toHaveLength(1);
  });
});
