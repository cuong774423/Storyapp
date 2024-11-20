import * as React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity,ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';

const FirstRoute =  () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => {
                navigation.navigate('cardstory');
            }}>
                <View style={(styles.cardStory)}>
                    <View>
                        <Image source={require('../../assets/images/diddytime.jpg')} style={styles.image} />
                    </View>
                    <View style={(styles.cardText)}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.nameStory)}> It's Diddy Time Babe!!!!!!!</Text>
                        <View style={(styles.timeAuthor)}>
                            <Text style={(styles.text)}>1 giờ trước </Text>
                            <Text style={(styles.text)}>• Diddy</Text>
                        </View>
                        <Text style={(styles.text)}>69 chương</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.text)}>Sẽ gầy • Da den • Gangbang • Ấu dâm • BDSM dfsaffafshjfaskjhfshj</Text>
                    </View>
                </View>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => {
                navigation.navigate('login');
            }}>
                <View style={(styles.cardStory)}>
                    <View>
                        <Image source={require('../../assets/images/diddytime.jpg')} style={styles.image} />
                    </View>
                    <View style={(styles.cardText)}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.nameStory)}> It's Diddy Time Babe!!!!!!!</Text>
                        <View style={(styles.timeAuthor)}>
                            <Text style={(styles.text)}>1 giờ trước </Text>
                            <Text style={(styles.text)}>• Diddy</Text>
                        </View>
                        <Text style={(styles.text)}>69 chương</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.text)}>Sẽ gầy • Da den • Gangbang • Ấu dâm • BDSM dfsaffafshjfaskjhfshj</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Yêu Thích');
            }}>
                <View style={(styles.cardStory)}>
                    <View>
                        <Image source={require('../../assets/images/diddytime.jpg')} style={styles.image} />
                    </View>
                    <View style={(styles.cardText)}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.nameStory)}> It's Diddy Time Babe!!!!!!!</Text>
                        <View style={(styles.timeAuthor)}>
                            <Text style={(styles.text)}>1 giờ trước </Text>
                            <Text style={(styles.text)}>• Diddy</Text>
                        </View>
                        <Text style={(styles.text)}>69 chương</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.text)}>Sẽ gầy • Da den • Gangbang • Ấu dâm • BDSM dfsaffafshjfaskjhfshj</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Yêu Thích');
            }}>
                <View style={(styles.cardStory)}>
                    <View>
                        <Image source={require('../../assets/images/diddytime.jpg')} style={styles.image} />
                    </View>
                    <View style={(styles.cardText)}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.nameStory)}> It's Diddy Time Babe!!!!!!!</Text>
                        <View style={(styles.timeAuthor)}>
                            <Text style={(styles.text)}>1 giờ trước </Text>
                            <Text style={(styles.text)}>• Diddy</Text>
                        </View>
                        <Text style={(styles.text)}>69 chương</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.text)}>Sẽ gầy • Da den • Gangbang • Ấu dâm • BDSM dfsaffafshjfaskjhfshj</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Yêu Thích');
            }}>
                <View style={(styles.cardStory)}>
                    <View>
                        <Image source={require('../../assets/images/diddytime.jpg')} style={styles.image} />
                    </View>
                    <View style={(styles.cardText)}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.nameStory)}> It's Diddy Time Babe!!!!!!!</Text>
                        <View style={(styles.timeAuthor)}>
                            <Text style={(styles.text)}>1 giờ trước </Text>
                            <Text style={(styles.text)}>• Diddy</Text>
                        </View>
                        <Text style={(styles.text)}>69 chương</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.text)}>Sẽ gầy • Da den • Gangbang • Ấu dâm • BDSM dfsaffafshjfaskjhfshj</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Yêu Thích');
            }}>
                <View style={(styles.cardStory)}>
                    <View>
                        <Image source={require('../../assets/images/anh1.jpeg')} style={styles.image} />
                    </View>
                    <View style={(styles.cardText)}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.nameStory)}> It's Diddy Time Babe!!!!!!!</Text>
                        <View style={(styles.timeAuthor)}>
                            <Text style={(styles.text)}>1 giờ trước </Text>
                            <Text style={(styles.text)}>• Diddy</Text>
                        </View>
                        <Text style={(styles.text)}>69 chương</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(styles.text)}>Sẽ gầy • Da den • Gangbang • Ấu dâm • BDSM dfsaffafshjfaskjhfshj</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
        )
}


const SecondRoute =  () => {
    return (
        <View style={[styles.scene, {backgroundColor: 'blue'}]}>
            <Text>Second Route</Text>
        </View>
    )
}
const ThreeRoute =  () => {
    return (
        <View style={[styles.scene, {backgroundColor: 'yellow'}]}>
            <Text>Three Route</Text>
        </View>
    )
}
  

const ThreeRoute1 =  () => {
    return (
        <View style={[styles.scene, {backgroundColor: 'yellow'}]}>
            <Text>Three Route</Text>
        </View>
    )
}
  

const ThreeRoute2 =  () => {
    return (
        <View style={[styles.scene, {backgroundColor: 'yellow'}]}>
            <Text>Yêu thích</Text>
        </View>
    )
}
  

const ThreeRoute3 =  () => {
    return (
        <View style={[styles.scene, {backgroundColor: 'yellow'}]}>
            <Text>Three Route</Text>
        </View>
    )
}
  
const HomeTabView = () => {
    const initialLayout = {width: Dimensions.get('window').width}
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'Mới nhất'},
        {key: 'second', title: 'Mới cập nhật'},
        {key: 'shiet', title: 'Full '},
        {key: 'first2', title: 'Đánh giá'},
        {key: 'second2', title: 'Yêu thích'},
        {key: 'shiet2', title: 'Xem nhiều '}
        
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        shiet: ThreeRoute,
        first2: ThreeRoute1,
        second2: ThreeRoute2,
        shiet2: ThreeRoute3,
    })
    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout} 
            renderTabBar={props => (
                <TabBar
                    {...props}
                    style={{height: 50, justifyContent: 'space-around', backgroundColor: '#fff'}}
                    scrollEnabled={true}
                    tabStyle={{ width: 'auto' }}
                    labelStyle={{ fontSize: 14, textAlign: 'center',}} 
                    activeColor="black"
                    inactiveColor="rgba(0,0,0,0.6)" 
                    indicatorStyle={{ backgroundColor: 'blue', height: 2 }}
                />
            )}
        />
    )
}

export default  HomeTabView;

const styles = StyleSheet.create({
    cardStory: {
        height: 90,
        width: '100%',
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        height: 80,
        width: 60,
        objectFit: 'cover',
        borderRadius: 8,
        marginRight: 15,
    },
    nameStory: {
        marginBottom: 5,
    },
    timeAuthor: {
        flexDirection: 'row',
    },
    text : {
        color: 'rgba(0,0,0,0.7)',
    }
})