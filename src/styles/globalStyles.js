import {StyleSheet } from 'react-native';

const stylest = StyleSheet.create({
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
        elevation: 5,
        flex: 1,
    },
    itemLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    itemRight: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    headerTitle: {
        marginLeft: 10, 
        fontSize: 20,
        fontWeight: '500',
    },
    nameStory: {
        width: '70%',
    },
    icon:{
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.5)',
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
});
  
  export default stylest;