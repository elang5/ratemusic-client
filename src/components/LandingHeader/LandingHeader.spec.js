import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LandingHeader from './LandingHeader'

describe(`LandingHeader Component`, () => {

  it(`renders the LandingHeader component`, () => {
    const wrapper = shallow(<LandingHeader />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})