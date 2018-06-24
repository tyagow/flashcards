import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"

const DeckRowTitle = styled.Text`
  text-align: center;
  font-size: 22;
  color: #555;
  margin-left: 40;
  margin-right: 40;
  margin-vertical: 10;
`
const DeckRowContainer = styled.TouchableHighlight`
  padding: 25px;
  borderbottomcolor: #452533;
  borderbottomwidth: 1;
`
export const DeckRow = props => (
  <DeckRowContainer onPress={props.onPress}>
    <DeckRowTitle>{props.deck.title}</DeckRowTitle>
  </DeckRowContainer>
)
DeckRow.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
}

export default DeckRow
