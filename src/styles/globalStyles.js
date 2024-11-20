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
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    headerTitle: {
        marginLeft: 10, 
        fontSize: 20,
        fontWeight: '500',
    },
    icon:{
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.5)',
    },
});
  
  export default stylest;