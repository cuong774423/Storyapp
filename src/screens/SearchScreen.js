import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';
import stylest from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

function SearchScreen ({navigation}) {

  const [query, setQuery] = useState('');
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={stylest.headerCard}>
          <View style={stylest.item}>
            <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
              <Icon name="search" size={20} color="rgba(0,0,0,0.5)" />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder='Nhập tên truyện hoặc tác giả...' 
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={query}
            onChangeText={setQuery}/>
            <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
              <Icon name="close" size={20} color="rgba(0,0,0,0.5)" />
            </TouchableOpacity>
          </View>
        </View>
        <Text>search</Text>
      </View>
    )
  }

const styles = StyleSheet.create({

})
export default SearchScreen;