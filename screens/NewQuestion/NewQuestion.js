import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { PropTypes } from 'prop-types'

import { createQuestion } from '../../actions/questionActions'
import { StyledButtonText } from '../../styles/button'

const TextInputField = styled.TextInput`
  margin: 20px;
  margin-bottom: 40;
`
const Wrapper = styled.View`
  padding: 20px;
`

const NewQuestionTitle = styled.Text`
  text-align: center;
  font-size: 22;
  color: #555;
  margin-left: 40;
  margin-right: 40;
  margin-top: 20;
`

const NewQuestionAnswer = styled.Text`
  text-align: center;
  font-size: 22;
  color: #555;
  margin-left: 40;
  margin-right: 40;
`

export class NewQuestion extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deckTitle} - New Question`,
  })
  constructor(props) {
    super(props)
    this.state = { title: '', answer: '' }
  }
  newQuestion = () => {
    this.props.createQuestion({ ...this.state })
    this.props.navigation.goBack()
  }
  render() {
    return (
      <Wrapper>
        <NewQuestionTitle>What`s the question?</NewQuestionTitle>
        <TextInputField
          value={this.state.title}
          placeholder="type question here"
          onChangeText={title => this.setState({ title })}
        />
        <NewQuestionAnswer>What`s the answer?</NewQuestionAnswer>
        <TextInputField
          value={this.state.answer}
          placeholder="type answer here"
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity onPress={this.newQuestion} data-test="create-question">
          <StyledButtonText>Create new question</StyledButtonText>
        </TouchableOpacity>
      </Wrapper>
    )
  }
}

NewQuestion.propTypes = {
  createQuestion: PropTypes.func.isRequired,
  // navigation: PropTypes.object.isRequired,
}
const mapDispatchToProps = dispatch => ({
  createQuestion: question => dispatch(createQuestion(question)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(NewQuestion)
