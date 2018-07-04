import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import getQuizQuestions from '../../selectors/questionSelector'

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

export class Quiz extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, id, questions } = this.props.deck
    return (
      <View>
        <Text>
          {id} - {title}
        </Text>
        <Text>Total Questions: {questions && questions.length}</Text>
        <TouchableOpacity onPress={this.addQuestion}>
          <StyledButtonText>Add Question</StyledButtonText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <StyledButtonText>Play</StyledButtonText>
        </TouchableOpacity>
      </View>
    )
  }
}
Quiz.propTypes = {
  deck: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({ questions: getQuizQuestions(state) })

export default connect(mapStateToProps)(Quiz)
