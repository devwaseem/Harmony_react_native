import { StyleSheet } from 'react-native';

export const IncrementStepper = StyleSheet.create({
    container:{
        height:29,
        width:115,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    stepper:{
        height:32,
        width:32,
        backgroundColor:"#EFF0F6",
        borderRadius:16,
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        fontSize:16,
        color:'black'
    },
    textDisabled:{
       
        color:'#A0A3BD'
    },
    btnPress: {
        borderColor: '#394867',
        borderWidth: 2,
        height:32,
        width:32,
        borderRadius:16,
        justifyContent:'center',
        alignItems: 'center',
        
    },
    btndisabled:{
        color:'#A0A3BD',
        
        height:32,
        width:32,
        borderRadius:16,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#EFF0F7'
    }

})