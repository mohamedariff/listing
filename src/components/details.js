import React, { PureComponent } from 'react'
import { View, StyleSheet, Text, Modal, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image'

export default class Details extends PureComponent {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    isModal: false,
    isReadMore: false,
  }
  componentDidMount() {
    this.setState({ isModal: true })
  }
  componentWillUnmount() {
    this.setState({ isModal: false })
  }
  _readMore = () => {
    this.setState({ isReadMore: !this.state.isReadMore })
  }


  render() {
    const { location, price, address, bed, bathroom, imageUrl, details, isLike } = this.props.navigation.state.params
    const { isReadMore } = this.state

    return (
      <>
        <View style={{ backgroundColor: 'yellow', flex: 0.48, flexDirection: 'row' }}>
          <FastImage style={{ flex: 1 }} source={{ uri: imageUrl }} resizeMode={'cover'} />
        </View>
        <View style={{ backgroundColor: 'grey', flex: 0.52, flexDirection: 'row', justifyContent: 'center', }}>
        </View>


        <Modal animationType="slide" transparent={true} visible={this.state.isModal} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
          <TouchableOpacity onPress={() => this.setState({ isModal: false }, () => this.props.navigation.goBack())} style={{ position: 'absolute', top: '5%', left: '5%' }}>
            <Icon name={'arrow-left'} size={30} color="white" style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>
          <View style={[{ backgroundColor: 'white', flex: 1, alignItems: 'center', borderRadius: 20, marginTop: 350, marginBottom: 250, marginHorizontal: 30, }, isReadMore && { marginBottom: 100 }]}>
            <View style={[{ flex: 1, width: '100%', borderRadius: 20, padding: 10 }]}>

              <View style={styles.cardRow1}>
                <Text style={styles.locationText}>{location}</Text>
                <Text style={styles.priceText}>{`RM ${price}`}</Text>
              </View>

              <View style={[styles.cardRow2, { flex: 1, padding: 15 }]}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                  <Text style={styles.addressText}>{address}</Text>
                  <Icon name={'heart'} size={30} color={isLike ? "#900" : 'grey'} onPress={() => this._like()} style={{ marginHorizontal: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', marginTop: 20 }}>
                  <Text numberOfLines={isReadMore ? null : 3}	>
                    {details}
                  </Text>
                </View>
              </View>
              <Button title={isReadMore ? 'Show Less' : 'Read More'} onPress={() => this._readMore()} />

              <View style={{ height: 1, width: "100%", backgroundColor: "#000" }}
              />
              <View style={[styles.cardRow3, { flex: 0.3 }]}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.roomText}>{`${bed} bed`}</Text>
                  <Text style={styles.roomText}>{`${bathroom} bathroom`}</Text>
                </View>
              </View>

            </View>
          </View>
        </Modal>


      </>
    )
  }
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },

  cardRow1: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  locationText: {
    marginHorizontal: 5,
    backgroundColor: 'green',
    color: 'white',
    padding: 8,
    borderRadius: 20,
    fontWeight: '500'
  },
  priceText: {
    fontWeight: 'bold',
    marginHorizontal: 5,
    fontSize: 24
  },
  cardrow2: {
    flex: 0.8,
    justifyContent: 'center'
  },
  addressText: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  cardRow3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  roomText: {
    margin: 10,
    color: 'grey'
  },
  bookmarkView: {
    position: 'absolute',
    top: '5%',
    right: '5%'
  }
});