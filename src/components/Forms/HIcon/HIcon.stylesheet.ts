import { StyleSheet } from 'react-native';

export const HarmonyIconStyle = StyleSheet.create({
    //TODO: ADD STYLES HERE
    container:{
        width: '100%', 
        display : 'flex',
        alignItems : 'center'
    },
    primary:{
        color: 'white',
    },
    secondary:{
        color: 'black',
    },
    subtle:{
        color: 'black',
    },
    text:{
        color: 'black',
    },
    primarystates:{
        borderRadius: 50 ,
        backgroundColor:'#394867',
        height:54,
        width:54,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    primarydisabled:{
        borderRadius: 50 ,
        backgroundColor:'#394867',
        height:54,
        width:54,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        opacity : 0.5
    },
   
    secstates:{
        borderRadius: 50,
        backgroundColor:'#ffffff',
        borderWidth: 2,
        borderColor:'#394867',
        height:54,
        width:54,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    secondarydisabled:{
        borderRadius: 50 ,
        backgroundColor:'#394867',
        height:54,
        width:54,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        opacity : 0.5
    },
})
