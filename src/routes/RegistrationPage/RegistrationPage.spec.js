import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegistrationPage from './RegistrationPage'

describe(`RegistrationPage Component`, () => {
  it(`renders the RegistrationPage component`, () => {
    const wrapper = shallow(<RegistrationPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})