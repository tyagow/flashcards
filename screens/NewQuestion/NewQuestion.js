import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { PropTypes } from 'prop-types'

import { createQuestion } from '../../actions/questionActions'


const TextInputField = styled.TextInput`
  margin: 20px;
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
  margin-vertical: 10;
`

const NewQuestionAnswer = styled.Text`
  text-align: center;
  font-size: 22;
  color: #555;
  margin-left: 40;
  margin-right: 40;
  margin-vertical: 10;
`
const StyledButtonText = styled.Text`
  background-color: #000;
  text-align: center;
  font-size: 22;
  color: #fff;
  margin: 30px;
  height: 50;
  padding-top: 10;
  padding-bottom: 15;
  margin-vertical: 10;
`

export class NewQuestion extends Component {
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
      <Wrapper >
        <NewQuestionTitle>What`s the title of the Question?</NewQuestionTitle>
        <TextInputField value={this.state.title} placeholder="Question title" onChangeText={title => this.setState({ title })} />
        <NewQuestionAnswer>What`s the title of the Question?</NewQuestionAnswer>
        <TextInputField value={this.state.answer} placeholder="Question title" onChangeText={answer => this.setState({ answer })} />
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

export default connect(undefined, mapDispatchToProps)(NewQuestion)

