import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import getQuizQuestions from '../../selectors/questionSelector'
import getCurrentQuestion from '../../selectors/questionGameSelector'

const StyledButtonText = styled.Text`
  background-color: #000;
  text-align: center;
  font-size: 22;
  color: #fff;
  margin: 30px;
  height: 50;
  padding-top: 10;
  padding-bottom: 15;
  margin-top: 10;
`

export class QuizGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answered: [],
    }
  }

  render() {
    const { title, id, answer } = getCurrentQuestion(this.state, this.props)
    return (
      <View>
        <Text>
          {id} - {title}
        </Text>
        {/* <TouchableOpacity onPress={this.addQuestion}> */}
        {/* <StyledButtonText>Add Question</StyledButtonText> */}
        {/* </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <StyledButtonText>Play</StyledButtonText>
        </TouchableOpacity> */}
      </View>
    )
  }
}
QuizGame.propTypes = {
  questions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ questions: getQuizQuestions(state) })

export default connect(mapStateToProps)(QuizGame)
