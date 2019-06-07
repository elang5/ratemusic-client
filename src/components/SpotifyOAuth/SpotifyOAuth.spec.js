import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SpotifyOAuth from './SpotifyOAuth'

describe(`SpotifyOAuth Component`, () => {

  it(`renders the SpotifyOAuth component`, () => {
    const wrapper = shallow(<SpotifyOAuth />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})