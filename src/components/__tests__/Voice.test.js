import 'react-native';
import React from 'react';
import VoiceNative from '../../Voice';
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { isTSAnyKeyword } from '@babel/types';


describe('Voice app should work as expected', () => {
  let wrapper 
  let component

  beforeEach(() => {
    configure({ adapter: new Adapter() })
    wrapper = shallow(<VoiceNative/>)
    component = wrapper.instance()
  })

  it('should return a string ')
})
