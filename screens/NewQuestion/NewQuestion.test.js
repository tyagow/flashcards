import React from 'react'
import { shallow } from 'enzyme'

import { NewQuestion } from './NewQuestion'

describe('NewQuestion Screen', () => {
  it('should render a label', () => {
    const wrapper = shallow(<NewQuestion navigation={{}} createQuestion={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should have an input component', () => {
    const wrapper = shallow(<NewQuestion navigation={{}} createQuestion={jest.fn()} />)
    expect(wrapper.find('Styled(TextInput)').length > 0).toBe(true)
  })
  // it('should call createQuestion when button Create Question is clicked', () => {
  //   const mockCreate = jest.fn()
  //   const wrapper = shallow(<NewQuestion navigation={{}} createQuestion={mockCreate} />)
  //   const button = wrapper.find("[data-test='create-question']")
  //   button.simulate('click')
  //   expect(mockCreate).toBeCalled()
  // })
})
