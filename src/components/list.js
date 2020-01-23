import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import { updateLike, updateBookmarked } from '../redux/actions/index'
const List = ({ navigation, data: { item: { id, location, price, address, bed, bathroom, imageUrl, details } } }) => {
  const openListing = () => {
    navigation.navigate('Details', { location, price, address, bed, bathroom, imageUrl, details, isLike, isBookmarked });
  }
  const [isBookmarked, pressBookmarkIcon] = React.useState(false);
  const [isLike, pressLikeIcon] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={[styles.container]} onPress={() => openListing()}>
      <FastImage style={styles.backgroundImage} source={{ uri: imageUrl }} resizeMode={'cover'}>
        <View style={styles.bookmarkView}>
          <Icon name={'bookmark'} size={30} color={isBookmarked ? "#900" : 'grey'} onPress={() => { pressBookmarkIcon(!isBookmarked); dispatch(updateBookmarked(id, isBookmarked)) }} />
        </View>
        <View style={styles.card}>
          <View style={styles.insideCard}>
            <View style={styles.cardRow1}>
              <Text style={styles.locationText}>{location}</Text>
              <Text style={styles.priceText}>{`RM ${price}`}</Text>
            </View>
            <View style={styles.cardRow2}>
              <Text style={styles.addressText}>{address}r</Text>
            </View>
            <View style={styles.cardRow3}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.roomText}>{`${bed} bed`}</Text>
                <Text style={styles.roomText}>{`${bathroom} bathroom`}</Text>
              </View>
              <Icon name={'heart'} size={30} color={isLike ? "#900" : 'grey'} onPress={() => { pressLikeIcon(!isLike); dispatch(updateLike(id, isLike)) }} style={{ marginHorizontal: 10 }} />
            </View>
          </View>
        </View>
      </FastImage>
    </TouchableOpacity >
  )
}




const styles = StyleSheet.create({
  shadow: {
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  container: { flex: 1 / 3, aspectRatio: 1 },
  backgroundImage: { borderRadius: 20, flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' },
  card: {
    backgroundColor: 'white', width: '90%', height: 130, borderRadius: 15, marginBottom: 10
  },
  insideCard: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  },
  cardRow1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  locationText: {
    marginHorizontal: 15,
    backgroundColor: 'green',
    color: 'white',
    padding: 8,
    borderRadius: 20,
    fontWeight: '500'
  },
  priceText: {
    fontWeight: 'bold',
    marginHorizontal: 15,
    fontSize: 24
  },
  cardrow2: {
    flex: 1,
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

export default List