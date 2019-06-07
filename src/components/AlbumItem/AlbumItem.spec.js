import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AlbumItem from './AlbumItem'

describe(`AlbumItem Component`, () => {
  const props = {
    album: '#',
    name: 'test',
    album_id: '12345',
    rating: 8
  }

  it(`renders the AlbumItem component`, () => {
    const wrapper = shallow(<AlbumItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it(`renders the AlbumItem component given props`, () => {
    const wrapper = shallow(<AlbumItem {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})