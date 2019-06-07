import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AlbumListPage from './AlbumListPage'

describe(`AlbumListPage Component`, () => {

  it(`renders the AlbumListPage component`, () => {
    const wrapper = shallow(<AlbumListPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})