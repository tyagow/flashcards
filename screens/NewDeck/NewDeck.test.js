import React from 'react'
import { shallow } from 'enzyme'

import { NewDeck } from './NewDeck'

describe('NewDeck Screen', () => {
  it('should render a label', () => {
    const wrapper = shallow(<NewDeck createDeck={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should have an input component', () => {
    const wrapper = shallow(<NewDeck createDeck={() => {}} />)
    expect(wrapper.find('Styled(TextInput)').length).toBe(1)
  })
})
