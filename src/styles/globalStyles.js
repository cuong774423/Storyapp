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
      }
  });
  
  export default stylest;