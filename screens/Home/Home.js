import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DeckRow from '../../components/DeckRow'
import { selectDeck } from '../../actions/deckActions'


export class Home extends Component {
  onPressItem = (deck) => {
    // console.log(`id = ${this.props.navigation.navigate}`)
    // send action DECK_SELECTED
    this.props.selectDeck(deck)
    // navigate to DeckDetail
    this.props.navigation.navigate('DeckDetail')
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
  selectDeck: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ decks: state.decks.items })

const mapDispatchToProps = dispatch => ({
  selectDeck: deck => dispatch(selectDeck(deck)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

