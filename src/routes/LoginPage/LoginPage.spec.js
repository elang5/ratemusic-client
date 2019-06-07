import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginPage from './LoginPage'

describe(`LoginPage Component`, () => {
  it(`renders the LoginPage component`, () => {
    const wrapper = shallow(<LoginPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})