import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylest from '../styles/globalStyles';


function DetailsScreen ({navigation}) {
    return (
      
      <View style={styles.container}>
        <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/> 
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 60,
    objectFit: 'cover',
  }
});
  export default DetailsScreen;
