import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import List from './list'
import { filterLocation } from '../redux/actions/index'

const Home = ({ navigation }) => {

  useEffect(() => {
    navigationOptions = {
      title: '',
      headerTransparent: true,
      headerStyle: { borderBottomWidth: 0 }
    };
  }, [])

  const dispatch = useDispatch();
  const listing = useSelector(state => state.property.listing);
  const newListing = useSelector(state => state.property.newListing);

  const [search, searchName] = React.useState('');
  const [price, searchPrice] = React.useState('');
  const [isModalVisible, modalVisible] = React.useState(false);

  const isNewListing = newListing === undefined

  return (
    <>
      <SafeAreaView style={styles.safeareaView}>
        <View style={{ flex: 0.2 }}>
          <TextInput style={styles.textInput} onChangeText={text => { searchName(text); return dispatch(filterLocation(text)) }} value={search} placeholder={'Filter by Location, Ex: Ipoh'} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* <TextInput style={[styles.textInput, { width: '39%' }]} onChangeText={text => searchPrice(text)} value={price} />
            <TouchableOpacity onPress={() => modalVisible(true)} style={{ justifyContent: "center", alignItems: 'center', border: 1, borderColor: 'gray', width: '29%' }}>
              <Text>Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => modalVisible(true)} style={{ justifyContent: "center", alignItems: 'center', border: 1, borderColor: 'gray', width: '29%' }}>
              <Text>Modal</Text>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{ flex: 1, }}>
          <FlatList
            data={!isNewListing ? newListing : listing}
            renderItem={list => <List data={list} navigation={navigation} />}
            keyExtractor={item => item.location}
            ItemSeparatorComponent={() => <View style={{ marginTop: 30 }} />}
          />
        </View>

        <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
          <View style={{ backgroundColor: 'pink', width: 300, height: 400, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello World!</Text>
            <TouchableOpacity
              onPress={() => { modalVisible(!isModalVisible) }}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeareaView: {
    flex: 1, margin: 30
  },
  container: {
    flex: 1,
    margin: 30
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
  },
});

export default Home;
