import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

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

export class DeckDetail extends Component {
  render() {
    const { title, id } = this.props.deck
    return (
      <View>
        <Text>{id} - {title}</Text>
        <TouchableOpacity onPress={this.newDeck}>
          <StyledButtonText>Add Question</StyledButtonText>
        </TouchableOpacity>
      </View>
    )
  }
}
DeckDetail.propTypes = {
  deck: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}
const mapStateToProps = state => ({ deck: state.decks.item })

export default connect(mapStateToProps)(DeckDetail)

