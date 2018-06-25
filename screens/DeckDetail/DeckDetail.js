import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'


export class DeckDetail extends Component {
  render() {
    const { title } = this.props.deck
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}
DeckDetail.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
}

export default DeckDetail
