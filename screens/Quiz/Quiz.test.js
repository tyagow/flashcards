import React from 'react'
import { shallow } from 'enzyme'
import { Quiz } from './Quiz'

describe('Quiz', () => {
  const deck = { title: 'Deck One', id: '1' }
  it('should match snapshot', () => {
    const wrapper = shallow(<Quiz deck={deck} />)
    expect(wrapper).toMatchSnapshot()
  })
  // it('should render Question Title', () => {
  //   const wrapper = renderer.create(<Quiz deck={deck} />).toJSON()
  //   expect(wrapper.children[0].children[2]).toEqual('Deck One')
  // })
})
