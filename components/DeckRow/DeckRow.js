import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { primary, deckRowBackground, textPrimary, textSecondary } from '../../utils/colors'

const DeckRowTitle = styled.Text`
  text-align: center;
  font-size: 22;
  font-weight: bold;
  color: ${textSecondary};
  margin-left: 40;
  margin-right: 40;
`
export const DeckCards = styled.Text`
  text-align: center;
  font-size: 18;
  color: #888;
  margin-left: 40;
  margin-right: 40;
  margin-top: 10;
`
const DeckRowContainer = styled.TouchableHighlight`
  padding: 25px;
  border-bottom-color: #452533;
  background-color: ${deckRowBackground};
  border-bottom-width: 1;
`
export const DeckRow = props => (
  <DeckRowContainer onPress={props.onPress}>
    <View>
      <DeckRowTitle>📒  {props.deck.title}</DeckRowTitle>
      <DeckCards>{props.deck.questions && props.deck.questions.length} Cards</DeckCards>
    </View>
  </DeckRowContainer>
)
DeckRow.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.array,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
}

export default DeckRow
