import { StyleSheet, Text, View, TextInput,TouchableOpacity, ScrollView } from 'react-native';
import stylest from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

function SearchScreen ({navigation}) {

  const [query, setQuery] = useState('');
    return (
      <View>
        <View style={styles.headerCard}>

            <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
              <Icon name="search" size={20} color="rgba(0,0,0,0.5)" />
            </TouchableOpacity>

          <TextInput style={styles.input} placeholder='Nhập tên truyện hoặc tác giả...' 
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={query}
            onChangeText={setQuery}/>
      
          <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
            <Icon name="close" size={25} color="rgba(0,0,0,0.5)" />
          </TouchableOpacity>

        </View>
        <ScrollView>
        <View style={styles.container}>

          <Text>Đầu cặc</Text>

        </View> 
        </ScrollView>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    zIndex: 1, 
    paddingHorizontal: 20,
},
  input: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(0,0,0,0.5)'
  }
})
export default SearchScreen;