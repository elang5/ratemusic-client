import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AlbumStarRating from './AlbumStarRating'

describe(`AlbumStarRating Component`, () => {

  it(`renders the AlbumStarRating component`, () => {
    const wrapper = shallow(<AlbumStarRating />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})