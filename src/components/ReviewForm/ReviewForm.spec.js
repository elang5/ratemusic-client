import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReviewForm from './ReviewForm'

describe(`ReviewForm Component`, () => {

  it(`renders the ReviewForm component`, () => {
    const props = {
      match: {
        params: 1
      }
    }
    const wrapper = shallow(<ReviewForm {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})