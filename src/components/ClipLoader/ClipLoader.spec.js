import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ClipLoader from './ClipLoader'

describe(`ClipLoader Component`, () => {

  it(`renders the ClipLoader component`, () => {
    const wrapper = shallow(<ClipLoader />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})