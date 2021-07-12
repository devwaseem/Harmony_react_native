import { StyleSheet } from 'react-native';

export const HarmonyRadiostyle = StyleSheet.create({
container:{
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin : 5
},

circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#394867', 
    alignItems: 'center',
    justifyContent: 'center',
},
checkedCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
},
})