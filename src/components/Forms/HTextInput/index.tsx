import React, {useState} from 'react';
import {
  Button,
  View,
  TextInput,    
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HarmonyTextInputStyle } from './HTextInput.stylesheet'

export enum HTextInputStyle {
    standard,
    searchIcon    
}
export enum HTextInputState {
    initial,
    active,
    disabled,
    caption,
    success,
    error,
    typing
}

export interface HTextInputProps {
    type: HTextInputStyle
    state: HTextInputState
    placeholder: string
    onPress?: ()=>void
    caption?: string
}

const HTextInput = (props: HTextInputProps)=> {

    
    const textFunction = () => {
        const [value, onChangeText] = React.useState('');
        if (props.state === HTextInputState.initial || props.state === HTextInputState.caption)
        {
        return (
            <View>
              <View style={{...HarmonyTextInputStyle.input,...HarmonyTextInputStyle.inputinitial}}>
                <View style={HarmonyTextInputStyle.lefthalf}>
                  { props.type === HTextInputStyle.searchIcon ?(  
                    <MaterialIcons name='search' size={30} color = '#14142B' style = {HarmonyTextInputStyle.icon}/>
                  ):(
                    <View></View>
                  )}

                  <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor="#A0A3BD"
                    autoCapitalize="sentences"
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style = {HarmonyTextInputStyle.text}
                    // onFocus = {style}
                  />
                </View>
              </View>
              {props.state === HTextInputState.caption ?(
                <Text>
                  {props.caption}
                </Text>
              ):(
                <View></View>
              )} 
            </View>
        );
        }
        // ----------- active ------------
        
        else if (props.state === HTextInputState.active)
        {
        return (
            <View style={{...HarmonyTextInputStyle.input,...HarmonyTextInputStyle.inputactive}}>
              <View style={HarmonyTextInputStyle.lefthalf}>
                { props.type === HTextInputStyle.searchIcon ?(  
                  <MaterialIcons name='search' size={30} color = '#14142B' style = {HarmonyTextInputStyle.icon}/>
                ):(
                  <View></View>
                )}

                <TextInput
                  placeholder={props.placeholder}
                  placeholderTextColor="#A0A3BD"
                  autoCapitalize="sentences"
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  style = {HarmonyTextInputStyle.text}
                  // onFocus = {style}
                />
              </View>

              <TouchableOpacity  style = {HarmonyTextInputStyle.icon}>
                <MaterialIcons name='close' size={30} color = '#A0A3BD'/> 
              </TouchableOpacity>
            </View>
        );
        }
        
        // -------------- disabled --------------
        else if (props.state === HTextInputState.disabled)
        {
        return (
            <View style={{...HarmonyTextInputStyle.input,...HarmonyTextInputStyle.inputdisabled}}>
              <View style={HarmonyTextInputStyle.lefthalf}>
                { props.type === HTextInputStyle.searchIcon ?(  
                  <MaterialIcons name='search' size={30} color = '#14142B' style = {HarmonyTextInputStyle.icon}/>
                ):(
                  <View></View>
                )}

                <TextInput
                  placeholder={props.placeholder}
                  placeholderTextColor="#A0A3BD"
                  autoCapitalize="sentences"
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  style = {HarmonyTextInputStyle.text}
                  // onFocus = {style}
                  editable = {false}
                />
              </View>
            </View>
        );
        }
      }
   
  return (
    <View style={HarmonyTextInputStyle.container}>
    {
      textFunction()
    } 
    </View>
  )
}


export default HTextInput