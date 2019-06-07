import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReviewPage from './ReviewPage'

describe(`ReviewPage Component`, () => {
  const props = {
    match: {
      params: {
        albumId: 1
      }
    }
  }
  it(`renders the ReviewPage component`, () => {
    const wrapper = shallow(<ReviewPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})