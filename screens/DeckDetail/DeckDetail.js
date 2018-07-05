import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyledButtonText } from '../../styles/button'


export class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deckTitle}`,
  })
  addQuestion = () => {
    this.props.navigation.navigate('NewQuestion')
  }
  render() {
    const { title, id, questions } = this.props.deck
    return (
      <View>
        <Text>{id} - {title}</Text>
        <Text>Total Questions: {questions && questions.length}</Text>
        <TouchableOpacity onPress={this.addQuestion}>
          <StyledButtonText>Add Question</StyledButtonText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('QuizGame') }}>
          <StyledButtonText>Play</StyledButtonText>
        </TouchableOpacity>
      </View>
    )
  }
}
DeckDetail.propTypes = {
  deck: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    questions: PropTypes.array,
  }).isRequired,
}
const mapStateToProps = state => ({ deck: state.decks.item })

export default connect(mapStateToProps)(DeckDetail)

