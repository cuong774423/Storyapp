import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylest from '../styles/globalStyles';


function DetailsScreen ({navigation}) {
    return (
      <View>
        <View style={stylest.headerCard}>
          <Text style={stylest.headerTitle}>Cá nhân</Text>
        </View>
     
        <ScrollView>
          <View style={styles.container}>

            <TouchableOpacity style={styles.boxUser} onPress={() => navigation.navigate('login')}>
              <View style={styles.boxUserItem}>
                <Image source={require('../../assets/images/diddytime.jpg')} style={styles.img}/> 
                <Text style={styles.boxUserText}>Đăng nhập</Text>    
              </View>
              <Icon style={stylest.icon} name='angle-right' />
            </TouchableOpacity>

            <View style={styles.profileBox}>
              <Text style={styles.profileBoxTitle}>Diddy Writer</Text>
              <TouchableOpacity activeOpacity={.6}c style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="plus"/>
                <Text style={styles.profileBoxItemText}>Tạo truyện mới</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="book"/>
                <Text style={styles.profileBoxItemText}>Truyện của tôi</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.profileBox}>
              <Text style={styles.profileBoxTitle}>Thông Báo</Text>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="bell"/>
                <Text style={styles.profileBoxItemText}>Thông báo của tôi</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.profileBox}>
              <Text style={styles.profileBoxTitle}>Gói Dịch Vụ</Text>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="diamond" />
                <Text style={styles.profileBoxItemText}>White Party</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.profileBox}>
              <Text style={styles.profileBoxTitle}>Danh Sách Truyện</Text>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="list-alt" />
                <Text style={styles.profileBoxItemText}>Bộ sưu tập của tôi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="heart" />
                <Text style={styles.profileBoxItemText}>Bộ sưu tập yêu thích</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="users" />
                <Text style={styles.profileBoxItemText}>Bộ sưu tập công đồng Diddy</Text>
              </TouchableOpacity>
            </View>
              
            <View style={styles.profileBox}>
              <Text style={styles.profileBoxTitle}>Đánh Giá Truyện</Text>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="thumbs-up"/>
                <Text style={styles.profileBoxItemText}>Nhận xét của tôi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="comments"/>
                <Text style={styles.profileBoxItemText}>Cộng đồng truyện</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.profileBox}>
              <Text style={styles.profileBoxTitle}>Cài Đặt</Text>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="font"/>
                <Text style={styles.profileBoxItemText}>Giao diện đọc truyện</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="adjust"/>
                <Text style={styles.profileBoxItemText}>Giao diện ứng dụng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="navicon"/>
                <Text style={styles.profileBoxItemText}>Thể loại</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.profileBox}>
              <Text style={styles.profileBoxTitle}>Thông Tin</Text>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="comment"/>
                <Text style={styles.profileBoxItemText}>Góp ý, đánh giá ứng dụng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="envelope"/>
                <Text style={styles.profileBoxItemText}>Gửi mail cho Diddy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="phone"/>
                <Text style={styles.profileBoxItemText}>Liên hệ Diddy qua Facebook Page</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="share-alt"/>
                <Text style={styles.profileBoxItemText}>Chia sẻ ứng dụng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileBoxItem}>
                <Icon style={stylest.icon} name="lock"/>
                <Text style={styles.profileBoxItemText}>Chính sách bảo mật</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex:1, 
    flexDirection: 'column',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  boxUser: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  boxUserItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 60,
    objectFit: 'cover',
  },
  boxUserText: {
    fontWeight: '500',
    paddingLeft: 20,
  },
  profileBox: {

  },
  profileBoxTitle: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  profileBoxItem: {
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileBoxItemText: {
    marginLeft: 10,
  }
});
  export default DetailsScreen;
