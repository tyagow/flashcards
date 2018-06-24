import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DeckRow from '../../components/DeckRow'


export class Home extends Component {
  onPressItem = (deck) => {
    console.log(`id = ${this.props.navigation.navigate}`)
    // send action DECK_SELECTED with
    // navigate to DeckDetail
  };

  keyExtractor = (item, index) => `${item.title}-${index}`

  renderItem = ({ item }) => (
    <DeckRow
      id={item.title}
      onPress={() => this.onPressItem(item)}
      deck={item}
    />
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.props.decks}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
Home.propTypes = {
  decks: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ decks: [...state.decks.items] })
export default connect(mapStateToProps)(Home)

