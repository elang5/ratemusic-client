import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Nav from './Nav'

describe(`Nav Component`, () => {

  it(`renders the Nav component`, () => {
    const wrapper = shallow(<Nav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})