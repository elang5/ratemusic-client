import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginForm from './LoginForm'

describe(`LoginForm Component`, () => {

  it(`renders the LoginForm component`, () => {
    const wrapper = shallow(<LoginForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})