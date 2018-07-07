import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyledButtonText } from '../../styles/button'
import styled from 'styled-components/native'
import { DeckCards } from '../../styles/text'

const DeckTitle = styled.Text`
  text-align: center;
  font-size: 22;
  color: #555;
  margin-left: 40;
  margin-right: 40;
  margin-top: 40;
`

export class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deckTitle}`,
  })
  addQuestion = () => {
    this.props.navigation.navigate('NewQuestion', { deckTitle: this.props.deck.title })
  }
  render() {
    const { title, id, questions } = this.props.deck
    return (
      <View>
        <DeckTitle>{title}</DeckTitle>
        <DeckCards>{questions && questions.length} Cards</DeckCards>
        <TouchableOpacity onPress={this.addQuestion}>
          <StyledButtonText>Add Question</StyledButtonText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('QuizGame')
          }}
        >
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
