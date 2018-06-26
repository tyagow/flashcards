import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { DeckDetail } from './DeckDetail'

describe('DeckDetail', () => {
  const deck = { title: 'Deck One', id: '1' }
  it('should match snapshot', () => {
    const wrapper = shallow(<DeckDetail deck={deck} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render deck Title', () => {
    const wrapper = renderer.create(<DeckDetail deck={deck} />).toJSON()
    expect(wrapper.children[0].children[2]).toEqual('Deck One')
  })
})
