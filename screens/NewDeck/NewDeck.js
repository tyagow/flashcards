import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { PropTypes } from 'prop-types'

import { createDeck } from '../../actions/deckActions'
import { StyledButtonText } from '../../styles/button'
import { textSecondary } from '../../utils/colors'
import { TextTitle, TextInputField } from '../../styles/text'


const Wrapper = styled.View`
  padding: 20px;
`


export class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }
  newDeck = () => {
    this.setState({ title: '' })
    this.props.navigation.navigate('Home')
    this.props.createDeck({ ...this.state })
  }
  render() {
    return (
      <Wrapper>
        <TextTitle>What`s the title of your new deck?</TextTitle>
        <TextInputField
          value={this.state.title}
          placeholder="Deck title"
          onChangeText={title => this.setState({ title })}
        />
        <TouchableOpacity onPress={this.newDeck}>
          <StyledButtonText style={{ marginTop: 30 }}>Create new deck</StyledButtonText>
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
