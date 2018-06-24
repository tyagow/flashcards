import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Home } from './Home'

describe('Home Screen', () => {
  it('should render a label', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()
  })

  // tit('should render all decks passed by props', () => {
  //   const decks = [{ title: 'Deck One' }, { title: 'Deck Two' }]
  //   const wrapper = renderer.create(<Home decks={decks} />).toJSON()
  //   expect(wrapper.length).toBe(1)
  // })
})
