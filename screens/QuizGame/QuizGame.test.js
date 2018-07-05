import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { QuizGame } from './QuizGame'

import renderer from 'react-test-renderer'

describe('QuizGame', () => {
  const questions = [
    { title: 'Question One', id: 1, answer: 'Answer One' },
    { title: 'Question Two', id: 2, answer: 'Answer Two' },
  ]
  xit('should match snapshot', () => {
    const wrapper = shallow(<QuizGame questions={questions} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Question Title', () => {
    const wrapper = renderer.create(<QuizGame questions={questions} />).toJSON()
    expect(wrapper.find('Question One')).toContain('Question One')
  })
})
