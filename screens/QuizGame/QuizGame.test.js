import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { QuizGame } from './QuizGame'
import getCurrentQuestion from '../../selectors/questionGameSelector'


describe('QuizGame', () => {
  const questions = [
    { title: 'Question One', id: 1, answer: 'Answer One' },
    { title: 'Question Two', id: 2, answer: 'Answer Two' },
  ]
  xit('should match snapshot', () => {
    const wrapper = shallow(<QuizGame questions={questions} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('toggleAnswer should toggle state.isAnswering', () => {
    const wrapper = renderer.create(<QuizGame questions={questions} />).getInstance()
    expect(wrapper.state.isAnswering).toBeFalsy()
    wrapper.toggleAnswer()
    expect(wrapper.state.isAnswering).toBeTruthy()
    wrapper.toggleAnswer()
    expect(wrapper.state.isAnswering).toBeFalsy()
  })
  it('answerQuestion should put actual question id to state.answered and increase the state.score', () => {
    const wrapper = renderer.create(<QuizGame questions={questions} />).getInstance()
    wrapper.answerQuestion(questions[0], true)
    expect(wrapper.state.answered).toContain(1)
    expect(wrapper.state.score).toBe(1)
  })
  it('should display second question after first is answered', () => {
    const wrapper = renderer.create(<QuizGame questions={questions} />).getInstance()
    wrapper.answerQuestion(questions[0], true)

    const question = getCurrentQuestion(wrapper.state, wrapper.props)
    expect(question.id).toBe(2)
  })
})
