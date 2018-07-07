import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Home } from './Home'

describe('Home Screen', () => {
  it('should render a label', () => {
    const wrapper = shallow(<Home decks={[]} loadData={jest.fn()} selectDeck={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })
})
