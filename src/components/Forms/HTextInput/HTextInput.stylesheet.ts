import styled, { css } from 'styled-components/native';
import { StyleSheet } from 'react-native';
interface PlaceholderLabelProps {
    isFocused: boolean;
    isFilled: boolean;
   }
export const HarmonyTextInputStyle = StyleSheet.create({
    //TODO: ADD STYLES HERE
    container:{
        width: '100%', 
        alignItems : 'center',
        marginTop : 100
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
    inputtyping:{
        backgroundColor: "#E8E8E8",
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
        width : 230,
        margin : 0
    },
    
})

export const PlaceholderLabel = styled.Text<PlaceholderLabelProps>`
 position: absolute;
 left: 5px;
 color: black;
 top : 0;
 
 ${(props) =>
  props.isFocused || props.isFilled 
   ? css`
    transform: translateY(-10px);
    font-size: 15px;
   ` : css`
    transform: translateY(+10px);
    font-size: 18px;
 `}
`;


