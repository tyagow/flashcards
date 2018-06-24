import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import DeckDetail from './DeckDetail'

describe('DeckDetail', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<DeckDetail />)
    expect(wrapper).toMatchSnapshot()
  })
  // it('should render deck Title', () => {
  //   const deck = { title: 'Deck One' }
  //   const wrapper = renderer.create(<DeckDetail deck={deck} />).toJSON()
  //   expect(wrapper.children[0].children[0]).toEqual('Deck One')
  // })
})
