import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, View, FlatList, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import DeckRow from '../../components/DeckRow'
import { selectDeck, FETCH_DATA } from '../../actions/deckActions'
import { StyledButtonText } from '../../styles/button'
import { setLocalNotification } from '../../utils/helpers'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 2000)
    setLocalNotification()
    this.props.loadData()
  }

  onPressItem = (deck) => {
    // send action DECK_SELECTED
    this.props.selectDeck(deck)
    // navigate to DeckDetail
    this.props.navigation.navigate('DeckDetail', { deckTitle: deck.title })
  }

  keyExtractor = (item, index) => `${item.title}-${index}`

  renderItem = ({ item }) => (
    <DeckRow id={item.title} onPress={() => this.onPressItem(item)} deck={item} />
  )
  renderNoEntry = () => {
    if (this.props.decks.length === 0 && !this.state.isLoading) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('newDeck')}>
          <StyledButtonText>Create new deck</StyledButtonText>
        </TouchableOpacity>
      )
    }
  }
  render() {
    return (
      <View>
        {this.renderNoEntry()}
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
  loadData: () => dispatch({ type: FETCH_DATA }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
