import { Right } from 'native-base';
import { StyleSheet } from 'react-native';

export const HarmonyTextInputStyle = StyleSheet.create({
    //TODO: ADD STYLES HERE
    container:{
        width: '100%', 
        alignItems : 'center'
    },
    input:{
        flexDirection:'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        borderRadius: 16,
        height:64,
        width:325,  
        paddingHorizontal: 15 
    },
    inputinitial:{
        backgroundColor: "#E8E8E8",
    },
    inputactive:{
        backgroundColor: "#FCFCFC",
        borderWidth : 2,
        borderColor : '#14142B'
    },
    inputdisabled:{
        backgroundColor: "#E8E8E8",
        opacity: 0.5
    },
    lefthalf:{
        flexDirection : 'row',
        alignItems : 'center',
    },
    icon:{
        justifyContent : 'center'
    },
    text:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 28,
        display : 'flex',
        alignItems : 'center',
        letterSpacing: 0.75,
        width : 230
    }


     
})


