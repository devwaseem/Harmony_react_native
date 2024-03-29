import React, {useState , useCallback, useRef} from 'react';
import {
  Button,
  View,
  TextInput,    
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HarmonyTextInputStyle , PlaceholderLabel } from './HTextInput.stylesheet';

interface InputProps {
  placeholder: string;
 }
 interface InputReference extends TextInput {
  value: string;
 }
 
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
    typing,
    filled
}
export interface HTextInputProps {
    type: HTextInputStyle
    state: HTextInputState
    placeholder: string
    onPress?: ()=>void
    caption?: string
    filled?:string
    success:boolean
}

const HTextInput = (props: HTextInputProps)=> {
    const textFunction = () => {
        // const [value, onChangeText] = React.useState('');
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

        if (props.state === HTextInputState.initial || props.state === HTextInputState.caption)
          {
          return (
              <View>
                <View style={isFocused === true ? {...HarmonyTextInputStyle.input , ...HarmonyTextInputStyle.inputactive} : {...HarmonyTextInputStyle.input , ...HarmonyTextInputStyle.inputinitial}}>
                  <View style={HarmonyTextInputStyle.lefthalf}>
                    { props.type === HTextInputStyle.searchIcon ?(  
                      <MaterialIcons name='search' size={30} color = '#14142B' style = {HarmonyTextInputStyle.icon}/>
                    ):(
                      <View></View>
                    )}
                          <View>
                            <PlaceholderLabel
                            isFocused={isFocused}
                            isFilled={isFilled}
                            placeholderTextColor="#A0A3BD"
                            onPress={() => setIsFocused(!isFocused)}
                            >
                              {props.placeholder}
                            </PlaceholderLabel>

                            <TextInput
                            placeholderTextColor="#A0A3BD"
                            autoCapitalize="sentences"
                            ref={inputRef}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChangeText={handleChangeText}
                            style = {HarmonyTextInputStyle.text}
                            />
                          </View>

                    {/* initial's code
                    <TextInput
                      placeholder={props.placeholder}
                      placeholderTextColor="#A0A3BD"
                      autoCapitalize="sentences"
                      onChangeText={text => onChangeText(text)}
                      // value={value}
                      style = {HarmonyTextInputStyle.text}
                      onFocus= {onfocusfn}
                    /> */}

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
                  // onChangeText={text => onChangeText(text)}
                  // value={value}
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
                  // value={value}
                  style = {HarmonyTextInputStyle.text}
                  editable = {false}
                />
              </View>
            </View>
        );
        }
         // -------------- filled --------------

        else if (props.state === HTextInputState.filled)
        {
          return (
            <View style={{...HarmonyTextInputStyle.input, ...HarmonyTextInputStyle.inputtyping}}>
              <View style={HarmonyTextInputStyle.lefthalf}>
                { props.type === HTextInputStyle.searchIcon ?(  
                  <MaterialIcons name='search' size={30} color = '#14142B' style = {HarmonyTextInputStyle.icon}/>
                ):(
                  <View></View>
                )}
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
                  />
                </View>
              </View>
              <TouchableOpacity  style = {HarmonyTextInputStyle.icon}>
                <MaterialIcons name='close' size={30} color = '#A0A3BD'/> 
              </TouchableOpacity>
            </View>
          );
         }
        
      else 
      {
        // -------------- typing --------------
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
                { props.type === HTextInputStyle.searchIcon ?(  
                  <MaterialIcons name='search' size={30} color = '#14142B' style = {HarmonyTextInputStyle.icon}/>
                ):(
                  <View></View>
                )}
              <View>
                <PlaceholderLabel
                isFocused={isFocused}
                isFilled={isFilled}
                placeholderTextColor="#A0A3BD"
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