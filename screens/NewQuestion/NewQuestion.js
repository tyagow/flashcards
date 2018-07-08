import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { PropTypes } from 'prop-types'

import { createQuestion } from '../../actions/questionActions'
import { StyledButtonText } from '../../styles/button'
import { ViewContainer } from '../../styles/views'
import { TextTitle, TextInputField } from '../../styles/text'


const Wrapper = styled.View`
  padding: 20px;
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
      <ViewContainer>
        <Wrapper>
          <TextTitle>What`s the question?</TextTitle>
          <TextInputField
            value={this.state.title}
            placeholder="type question here"
            onChangeText={title => this.setState({ title })}
          />
          <TextTitle>What`s the answer?</TextTitle>
          <TextInputField
            value={this.state.answer}
            placeholder="type answer here"
            onChangeText={answer => this.setState({ answer })}
          />
          <TouchableOpacity onPress={this.newQuestion} data-test="create-question">
            <StyledButtonText>Create new question</StyledButtonText>
          </TouchableOpacity>
        </Wrapper>
      </ViewContainer>
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
