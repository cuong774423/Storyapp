import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import stylest from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';


function FavouriteScreen () {
  return (
    <View style={styles.container}>

      <View style={stylest.headerCard}>
        <Text style={styles.headerCardText}>Truyện Trên Thiết Bị - Offline</Text>
      </View>
      
      <TouchableOpacity style={styles.readList}>
        <Text style={styles.readedText}>Đọc Gần Đây</Text>
        <Icon style={stylest.icon} name='arrow-right' />
      </TouchableOpacity>

      <View style={styles.readContainer}>
        <TouchableOpacity style={styles.readBox}>
          <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.readBoxText}>It's Diddy Time Babe!!!!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readBox}>
          <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.readBoxText}>It's Diddy Time Babe!!!!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readBox}>
          <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.readBoxText}>It's Diddy Time Babe!!!!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readBox}>
          <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.readBoxText}>It's Diddy Time Babe!!!!!!!</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.readList}>
        <Text style={styles.readedText}>Yêu Thích Gần Đây</Text>
        <Icon style={stylest.icon} name='arrow-right' />
      </TouchableOpacity>

      <View style={styles.readContainer}>
        <TouchableOpacity style={styles.readBox}>
          <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.readBoxText}>It's Diddy Time Babe!!!!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.readBox}>
          <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.readBoxText}>It's Diddy Time Babe!!!!!!!</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.readList}>
        <Text style={styles.readedText}>Tải Gần Đây - Đọc Offline</Text>
        <Icon style={stylest.icon} name='arrow-right' />
      </TouchableOpacity>

      <View style={styles.readContainer}>
        <TouchableOpacity style={styles.readBox}>
          <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.readBoxText}>It's Diddy Time Babe!!!!!!!</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60,

  },
  headerCardText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500'
  },
  readList: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  readedText: {
    fontWeight: '500',
  },
  readContainer: {
    flexDirection: 'row',
  },
  readBox: {
    paddingRight: 10,
    paddingVertical: 10,
  },
  readBoxText: {
    width: 80,
    color: 'rgba(0,0,0,0.5)'
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
})
  export default FavouriteScreen;