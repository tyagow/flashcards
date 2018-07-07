import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Notifications } from 'expo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import getQuizQuestions from '../../selectors/questionSelector'
import getCurrentQuestion from '../../selectors/questionGameSelector'
import { TextTitle, TextHighlight } from '../../styles/text'
import { StyledButtonText } from '../../styles/button'
import { setLocalNotification } from '../../utils/helpers'

export class QuizGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answered: [],
      isAnswering: false,
      score: 0,
    }
  }
  componentDidMount = () => {
    Notifications.cancelAllScheduledNotificationsAsync()
    setLocalNotification()
  }

  answerQuestion = (question, answerCorrect) => {
    if (answerCorrect) {
      const { score } = this.state
      this.setState({ score: score + 1 })
    }
    this.setState(state => ({ answered: [...state.answered, question.id] }))
    this.toggleAnswer()
  }

  toggleAnswer = () => {
    this.setState(state => ({ isAnswering: !state.isAnswering }))
  }

  renderHeader = (question) => {
    if (!this.state.isAnswering) {
      return this.renderQuestionCard(question)
    }
    return this.renderAnswerCard(question)
  }

  renderAnswerCard(question) {
    return (
      <View>
        <TextTitle>{question.answer}</TextTitle>
        <TouchableOpacity
          onPress={() => {
            this.answerQuestion(question, true)
          }}
        >
          <StyledButtonText>Correct 👍</StyledButtonText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.answerQuestion(question, false)
          }}
        >
          <StyledButtonText>Wrong 👎</StyledButtonText>
        </TouchableOpacity>
      </View>
    )
  }

  renderQuestionCard(question) {
    return (
      <View>
        <TextTitle>{question.title}</TextTitle>
        <TouchableOpacity onPress={this.toggleAnswer}>
          <TextHighlight>Answer</TextHighlight>
        </TouchableOpacity>
      </View>
    )
  }

  renderScore() {
    return (
      <View>
        <TextTitle>Your score</TextTitle>
        <TextTitle>
          {this.state.score} / {this.props.questions.length}
        </TextTitle>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        >
          <StyledButtonText>Back Home</StyledButtonText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ answered: [], isAnswering: false, score: 0 })
          }}
        >
          <StyledButtonText>Restart Deck</StyledButtonText>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const question = getCurrentQuestion(this.state, this.props)
    if (question.id) {
      return this.renderHeader(question)
    }
    return this.renderScore()
  }
}

QuizGame.propTypes = {
  questions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ questions: getQuizQuestions(state) })

export default connect(mapStateToProps)(QuizGame)
