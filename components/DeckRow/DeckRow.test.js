import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import DeckRow from './DeckRow'

describe('DeckRow', () => {
  it('DeckRow should match snapshot', () => {
    const wrapper = shallow(<DeckRow deck={{ title: 'Deck One' }} />)
    expect(wrapper).toMatchSnapshot()
  })
})
