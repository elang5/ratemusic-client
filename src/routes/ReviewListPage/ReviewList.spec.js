import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReviewListPage from './ReviewListPage'

describe(`ReviewListPage Component`, () => {
  it(`renders the ReviewListPage component`, () => {
    const wrapper = shallow(<ReviewListPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})