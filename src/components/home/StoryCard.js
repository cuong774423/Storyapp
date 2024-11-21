import { ScrollView, TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

const CardStory = () => {

    const [isFilled, setIsFilled] = useState(false);
    const navigation = useNavigation();

    const handlePress = () => {
        setIsFilled(!isFilled); 
      };
    return (
        <View>
            <View style={styles.headerCard}>
                <View style={styles.item}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name="close" size={24} color='rgba(0,0,0,0.5)' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Truyện</Text>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity>
                        <Icon name="flag" size={20}  color='rgba(0,0,0,0.5)'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="share-alt" size={20}  color='rgba(0,0,0,0.5)' style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    
                    <View style={styles.bodyhead}>
                        <View style={styles.boxImage}>
                            <Image source={require('../../../assets/images/diddytime.jpg')} style={styles.image}/>
                        </View>
                        <View style={styles.bodytext}>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.name}>Ngũ Hổ Vồ Xôi La Hán Đẩy Xe Bò</Text>
                            <Text style={styles.author}>Thục Kỷ </Text>
                            <Text style={styles.status}>Đang ra • 42 phút trước</Text>
                            <Text>135 Chương • Đang xem: 134</Text>
                            <View style={styles.view}>
                                <Icon name='heart' size={14} color='red'/>
                                <Text style={styles.heartNumber}>10</Text>
                                <Icon name ='eye' size={14} />
                                <Text style={styles.viewNumber}>99</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contentCategory}>
                        <TouchableOpacity>
                            <Text style={styles.category}>Tiên Hiệp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.category}>Huyền Huyễn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.category}>Xuyên Không</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.category}>Trọng Sinh</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.options}>
                        <TouchableOpacity style={styles.optionsButton}>
                            <Icon  style={styles.optionsIcon} name="list-ul"/>
                        </TouchableOpacity >
                        <TouchableOpacity  style={styles.optionsButton}>
                            <Icon  style={styles.optionsIcon}  name="thumbs-o-up"/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.optionsButton}>
                            <Icon  style={styles.optionsIcon}  name="bookmark-o"/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userContent}>
                        <TouchableOpacity style={styles.user}>
                            <Image source={require('../../../assets/images/anh1.jpeg')} style={styles.userImage}/>
                            <View style={styles.userContent}>
                                <Text style={styles.userName}>Diddy</Text>
                                <Text>2 giờ trước</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.chapContent}>
                        <Text style={styles.chapTitle}>Các chương mới nhất</Text>
                        <View style={styles.chapList}>
                            <TouchableOpacity style={styles.chapButton}>
                                <Text style={styles.chapNumber}>69</Text>
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.chapButton}>
                                <Text style={styles.chapNumber}>68</Text>
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.chapButton}>
                                <Text style={styles.chapNumber}>67</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.chapButton}>
                                <Text style={styles.chapNumber}>66</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.chapButton}>
                                <Text style={styles.chapNumber}>65</Text>
                            </TouchableOpacity>       
                        </View>
                    </View>

                    <View style={styles.descriptionContent}>
                        <Text>
                            Tình thế dầu ăn, Trạng thái miễn sướng là được, Cái thế giăng mùng, Tình thế biển đẹp sóng mơ, Mang bao đúng lúc, quá là blebleblenle sát thương!!!!
                        </Text>
                        <Text>
                            Tình thế dầu ăn, Trạng thái miễn sướng là được, Cái thế giăng mùng, Tình thế biển đẹp sóng mơ, Mang bao đúng lúc, quá là blebleblenle sát thương!!!!
                        </Text>
                        <Text>
                            Tình thế dầu ăn, Trạng thái miễn sướng là được, Cái thế giăng mùng, Tình thế biển đẹp sóng mơ, Mang bao đúng lúc, quá là blebleblenle sát thương!!!!
                        </Text>
                    </View>
                
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('readchapter')}>
                    <Text style={styles.read}>Đọc truyện</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress} style={styles.addFavourite}>
                    <Icon  name={isFilled ? 'heart' : 'heart-o'} size={20} color='#4285F4'/>
                    <Text style={styles.textFavourite}>Yêu Thích</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CardStory;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1, 
    },
    container: {
        flex: 1,
        position: 'relative',
        marginTop: 50, 
        padding: 10,
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
        paddingHorizontal: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 20,
    },
    bodyhead: {
        flexDirection: 'row',
        width: '100%',
    },
    image: {
        height: 100,
        width: 90,
        objectFit: 'cover',
        borderRadius: 8,
        marginRight: 15,
    },
    bodytext: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    author: {
        color: '#4285F4',
        fontWeight: '500',
    },
    status: {
        paddingVertical: 5,
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },  
    heartNumber: {
        marginLeft: 4,
        marginRight: 15,
    },
    viewNumber: {
        marginLeft: 4,
    },
    contentCategory: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    category: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginRight: 8,
        marginVertical: 5,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.05)',
        color: 'rgba(0,0,0,0.5)',
    },
    options: {
        flexDirection: 'row',
        marginVertical: 5   ,
    },
    optionsButton: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#4285F4',
        marginRight: 10,
    },
    optionsIcon: {
        fontSize: 24,
        paddingVertical: 5,
        paddingHorizontal: 5,
        color: '#4285F4',
    },
    user: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
        objectFit: 'cover',
        marginRight: 10,
    },
    userContent: {
        flex: 1,
    },
    userName: {
        flexWrap: 'wrap',
    },
    chapContent: {
        marginVertical: 5,
    },
    chapTitle: {
        marginVertical: 5,
    },
    chapList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    chapNumber: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 20,
        marginRight: 10,
        marginVertical: 5,
        color: 'rgba(0,0,0,0.5)',
    },
    descriptionContent: {
        marginVertical: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        width: '100',
        justifyContent: 'space-around',
        height: 50, 
        backgroundColor: '#fff',
        alignItems: 'center',
        zIndex: 2, 
    },
    read: {
        borderWidth: 0.7,
        borderColor: '#4285F4',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        textTransform: 'uppercase',
        color: '#4285F4',
    },
    addFavourite: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textFavourite: {
        color: '#4285F4',
    },
    icon: {
        marginLeft: 20,
    }
});
