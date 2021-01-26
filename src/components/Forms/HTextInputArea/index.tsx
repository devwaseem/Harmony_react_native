import React, {useState , useCallback, useRef} from 'react';
import {
  View,
  TextInput,    
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HarmonyTextInputStyle , PlaceholderLabel } from './HTextInputArea.stylesheet';

interface InputProps {
  placeholder: string;
 }
 interface InputReference extends TextInput {
  value: string;
 }
 

export enum HTextInputAreaState {
    initial,
    active,
    disabled,
    caption,
    success,
    error,
    typing,
    filled
}

export interface HTextInputAreaProps {
    state: HTextInputAreaState
    placeholder: string
    onPress?: ()=>void
    caption?: string
    filled?:string
    
}
const HTextInputArea = (props: HTextInputAreaProps)=> {
    const textFunction = () => {
        const [value, onChangeText] = React.useState('');
        if (props.state === HTextInputAreaState.initial || props.state === HTextInputAreaState.caption)
        {
        return (
            <View>
              <View style={{...HarmonyTextInputStyle.input,...HarmonyTextInputStyle.inputinitial}}>
                <View style={HarmonyTextInputStyle.lefthalf}>
                  <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor="#A0A3BD"
                    autoCapitalize="sentences"
                    multiline
                    numberOfLines={4}
                    textAlignVertical={'top'}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style = {HarmonyTextInputStyle.text} 
                   
                    
                  />
                </View>
              </View>
              {props.state === HTextInputAreaState.caption ?(
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
        
        else if (props.state === HTextInputAreaState.active)
        {
        return (
            <View style={{...HarmonyTextInputStyle.input,...HarmonyTextInputStyle.inputactive}}>
              <View style={HarmonyTextInputStyle.lefthalf}>
                

                <TextInput
                  placeholder={props.placeholder}
                  placeholderTextColor="#A0A3BD"
                  multiline
                  numberOfLines={4}
                  textAlignVertical={'top'}
                  autoCapitalize="sentences"
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  style = {HarmonyTextInputStyle.text}
                
                />
              </View>

              <TouchableOpacity  style = {HarmonyTextInputStyle.icon}>
                <MaterialIcons name='close' size={30} color = '#A0A3BD'/> 
              </TouchableOpacity>
            </View>
        );
        }
        
        // -------------- disabled --------------
        else if (props.state === HTextInputAreaState.disabled)
        {
        return (
            <View style={{...HarmonyTextInputStyle.input,...HarmonyTextInputStyle.inputdisabled}}>
              <View style={HarmonyTextInputStyle.lefthalf}>
                

                <TextInput
                  placeholder={props.placeholder}
                  placeholderTextColor="#A0A3BD"
                  autoCapitalize="sentences"
                  multiline
                  numberOfLines={4}
                  textAlignVertical={'top'}
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

        // -------------- typing --------------

        else if (props.state === HTextInputAreaState.typing)
        {
        
          const [isFocused, setIsFocused] = useState(false);
          const [isFilled, setIsFilled] = useState(false);
          const inputRef = useRef<InputReference>(null);
          const handleInputFocus = useCallback(() => {
           setIsFocused(true);
          }, []);
          const handleInputBlur = useCallback(() => {
           setIsFocused(false);
           if (inputRef.current) setIsFilled(!!inputRef.current.value);
          }, []);
          const handleChangeText = useCallback((text) => {
           if (inputRef.current) inputRef.current.value = text;
          },[]);
          return (
            <View style={{...HarmonyTextInputStyle.input, ...HarmonyTextInputStyle.inputtyping}}>
              <View style={HarmonyTextInputStyle.lefthalf}>
                
              <View>
                <PlaceholderLabel
                isFocused={isFocused}
                isFilled={isFilled}
                placeholderTextColor="#A0A3BD"
                multiline
                numberOfLines={4}
                textAlignVertical={'top'}
                onPress={() => setIsFocused(!isFocused)}
                >
                  {props.placeholder}
                </PlaceholderLabel>

                <TextInput
                ref={inputRef}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={handleChangeText}
                style = {HarmonyTextInputStyle.text}
                />
              </View>
              </View>
              <TouchableOpacity  style = {HarmonyTextInputStyle.icon}>
                <MaterialIcons name='close' size={30} color = '#A0A3BD' /> 
              </TouchableOpacity>
            </View>
          );
         }

         // -------------- filled --------------

        else if (props.state === HTextInputAreaState.filled)
        {
          return (
            <View style={{...HarmonyTextInputStyle.input, ...HarmonyTextInputStyle.inputtyping}}>
              <View style={HarmonyTextInputStyle.lefthalf}>
                
                <View>
                  <PlaceholderLabel
                  placeholderTextColor="#A0A3BD"
                  isFocused={true}
                  >
                    {props.placeholder}
                  </PlaceholderLabel>

                  <TextInput
                  value = {props.filled}
                  editable = {false}
                  style = {HarmonyTextInputStyle.text}
                  multiline
                  numberOfLines={4}
                  textAlignVertical={'top'}
                  />
                </View>
              </View>
              <TouchableOpacity  style = {HarmonyTextInputStyle.icon}>
                <MaterialIcons name='close' size={30} color = '#A0A3BD'/> 
              </TouchableOpacity>
            </View>
          );
         }
         // -------------- success --------------

         else if (props.state === HTextInputAreaState.success ) //|| props.state === HTextInputState.caption
        {
          return (
            <View style={{...HarmonyTextInputStyle.input, ...HarmonyTextInputStyle.inputSuccess}}>
              <View style={HarmonyTextInputStyle.lefthalf}>

                <View>
                  <PlaceholderLabel
                  placeholderTextColor="#839B97"
                  isFocused={true}
                  >
                    {props.placeholder}
                  </PlaceholderLabel>

                  <TextInput
                  value = {props.filled}
                 
                  style = {HarmonyTextInputStyle.text}
                  />
                </View>
              </View>
              <TouchableOpacity  style = {HarmonyTextInputStyle.icon}>
                <MaterialIcons name='close' size={30} color = '#A0A3BD'/> 
              </TouchableOpacity>
              <View>
                {/* {props.state === HTextInputState.caption ?(
                  <Text style = {HarmonyTextInputStyle.success}>
                    {props.caption}
                  </Text>
                ):(
                  <View></View>
                )}  */}
              </View>
            </View>
          );
         }

          // -------------- error --------------

          else if (props.state === HTextInputAreaState.error ) //|| props.state === HTextInputState.caption
          {
            return (
              <View style={{...HarmonyTextInputStyle.input, ...HarmonyTextInputStyle.inputError}}>
                <View style={HarmonyTextInputStyle.lefthalf}>
                  
                  <View>
                    <PlaceholderLabel
                    placeholderTextColor="#D93535"
                    isFocused={true}
                    >
                      {props.placeholder}
                    </PlaceholderLabel>
  
                    <TextInput
                    value = {props.filled}
                    
                    style = {HarmonyTextInputStyle.text}
                    />
                  </View>
                </View>
                <TouchableOpacity  style = {HarmonyTextInputStyle.icon}>
                  <MaterialIcons name='close' size={30} color = '#A0A3BD'/> 
                </TouchableOpacity>
                <View>
                  {/* {props.state === HTextInputState.caption ?(
                    <Text style = {HarmonyTextInputStyle.error}>
                      {props.caption}
                    </Text>
                  ):(
                    <View></View>
                  )}  */}
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


export default HTextInputArea