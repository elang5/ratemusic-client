import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReviewItem from './ReviewItem'

describe(`ReviewItem Component`, () => {

  it(`renders the ReviewItem component`, () => {
    const props = {
      review: {
        album_id: 1,
        title: 'Test',
        rating: 8,
        user_name: 'tester',
        date_created: '222'
      }
    }
    const wrapper = shallow(<ReviewItem {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})