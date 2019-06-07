import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchForm from './SearchForm'

describe(`SearchForm Component`, () => {

  it(`renders the SearchForm component`, () => {
    const props = {
      name: 'Test',
      albums: []
    }
    const wrapper = shallow(<SearchForm {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})