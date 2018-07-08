import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { PropTypes } from 'prop-types'

import { createDeck } from '../../actions/deckActions'
import { StyledButtonText } from '../../styles/button'

const TextInputField = styled.TextInput`
  margin: 20px;
`
const Wrapper = styled.View`
  padding: 20px;
`

const NewDeckTitle = styled.Text`
  text-align: center;
  font-size: 22;
  color: #555;
  margin-left: 40;
  margin-right: 40;
`

export class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }
  newDeck = () => {
    this.props.navigation.navigate('Home')
    this.setState({ title: '' })
    this.props.createDeck({ ...this.state })
  }
  render() {
    return (
      <Wrapper>
        <NewDeckTitle>What`s the title of your new deck?</NewDeckTitle>
        <TextInputField
          value={this.state.title}
          placeholder="Deck title"
          onChangeText={title => this.setState({ title })}
        />
        <TouchableOpacity onPress={this.newDeck}>
          <StyledButtonText>Create new deck</StyledButtonText>
        </TouchableOpacity>
      </Wrapper>
    )
  }
}

NewDeck.propTypes = {
  createDeck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}
const mapDispatchToProps = dispatch => ({
  createDeck: title => dispatch(createDeck(title)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(NewDeck)
