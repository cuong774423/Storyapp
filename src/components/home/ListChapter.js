import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import stylest from "../../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome"

function ListChapter({navigation}) {
    return(
        <View style={{flex: 1}}>
            <View style={stylest.headerCard}>
                <View style={stylest.item}>
                    <TouchableOpacity onPress={() => navigation.navigate('readchapter')}>
                    <Icon name="close" size={24} color="rgba(0,0,0,0.5)" />
                    </TouchableOpacity>
                </View>
                <Text numberOfLines={1} ellipsizeMode="tail" style={[stylest.headerTitle, stylest.nameStory]}>Tình Thế Dầu Ăn Tình </Text>
                <TouchableOpacity style={stylest.item2} onPress={() => navigation.navigate('Cá Nhân')}>
                    <Icon name="repeat" size={20} color="rgba(0,0,0,0.5)" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.chapterItem}>
                        <Text style={styles.item1}>Chương 1</Text>
                        <Text style={styles.item2}>7 th 11, 2024</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chapterItem}>
                        <Text style={styles.item1}>Chương 2</Text>
                        <Text style={styles.item2}>7 th 11, 2024</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chapterItem}> 
                        <Text style={styles.item1}>Chương 3</Text>
                        <Text style={styles.item2}>7 th 11, 2024</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
    },
    chapterItem: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item1: {
        fontSize: 14,
    },
    item2: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
    }
})
export default ListChapter;