import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import stylest from "../../styles/globalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

function ListFavourite({navigation}) {
    return(
        <View style={{flex: 1}}>
            <View style={[stylest.headerCard,styles.headerCard]}>
                <TouchableOpacity onPress={() => navigation.navigate('Yêu Thích')}>
                <Icon name="close" size={24} color="rgba(0,0,0,0.5)" />
                </TouchableOpacity>

                <Text numberOfLines={1} ellipsizeMode="tail" style={[stylest.headerTitle, stylest.nameStory]}>Đang Đọc - Thiết Bị</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
                    <Icon name="search" size={20} color="rgba(0,0,0,0.5)" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.container}>

                    <TouchableOpacity style={styles.favouriteWrapper}>
                        <View style={styles.favouriteItem}>
                            <Image source={require('../../../assets/images/diddytime.jpg')} style={styles.img}/>
                            <View style={styles.favourItemText}>
                                <Text numberOfLines={1} ellipsizeMode="tail">It's Diddy Time Babe!!!!!!! It's Diddy Time Babe!!!!!!!</Text>
                                <Text style={styles.text}>Diddy</Text>
                                <Text style={styles.text}>17 Chương</Text>
                            </View>
                        </View>
                        <Icon name='close' style={stylest.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.favouriteWrapper}>
                        <View style={styles.favouriteItem}>
                            <Image source={require('../../../assets/images/diddytime.jpg')} style={styles.img}/>
                            <View style={styles.favourItemText}>
                                <Text numberOfLines={1} ellipsizeMode="tail">It's Diddy Time Babe!!!!!!! dầu ăn tới chơi</Text>
                                <Text style={styles.text}>Diddy</Text>
                                <Text style={styles.text}>17 Chương</Text>
                            </View>
                        </View>
                        <Icon name='close' style={stylest.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.favouriteWrapper}>
                        <View style={styles.favouriteItem}>
                            <Image source={require('../../../assets/images/diddytime.jpg')} style={styles.img}/>
                            <View style={styles.favourItemText}>
                                <Text numberOfLines={1} ellipsizeMode="tail">It's Diddy Time Babe!!!!!!! dầu ăn tới chơi</Text>
                                <Text style={styles.text}>Diddy</Text>
                                <Text style={styles.text}>17 Chương</Text>
                            </View>
                        </View>
                        <Icon name='close' style={stylest.icon}/>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCard: {
        paddingHorizontal: 20,
    },
    container: {
        paddingTop: 60,
    },
    favouriteWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        flex: 1,
    },
    favouriteItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 60,
        objectFit: 'cover'
    },
    favourItemText: {
        marginLeft: 15,
        width: 200,
    },
    text: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 14,
    }
})

export default ListFavourite;