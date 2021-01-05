import React, {useState} from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  ActivityIndicator
} from 'react-native';

import { HarmonyButtonStyle } from './HButton.stylesheet'

import Spinner from 'react-native-loading-spinner-overlay';

export enum HButtonStyle {
  primary,
  secondary,
  subtle,
  text
}

export enum HButtonState {
  initial,
  active,
  loading,
  disabled
}

export interface HButtonProps {
  type: HButtonStyle
  state: HButtonState
  isLoading?: boolean
  onPress?: ()=>void
  title: string
  accessibilityLabel?: string
}

const HButton = (props: HButtonProps)=> {
    var buttonstyle=null;
   
    // console.log(HarmonyButtonStyle);
    
   const firstswitch = () => {
    switch(props.type) {
      case HButtonStyle.primary:
        // buttonstyle={...HarmonyButtonStyle.primary,...HarmonyButtonStyle.intial}
        // buttonstyle={...HarmonyButtonStyle.primary}
        if (HButtonState.initial===props.state)
        {

        return(
        <TouchableOpacity style={HarmonyButtonStyle.initial}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.primary}>{props.title}</Text>
        </TouchableOpacity>
        );

        }
        else if (HButtonState.active===props.state)
        {

        return(

        <TouchableHighlight style={HarmonyButtonStyle.active}
          activeOpacity={0.15}
          underlayColor="#FCFCFC"
          type={props.type}
          state={props.state} 
          onPress={props.onPress} 
        >

        <Text style={HarmonyButtonStyle.primary}>{props.title}</Text>
        
      </TouchableHighlight>

        );

        }
        else if (HButtonState.loading===props.state)
        {

        return(
          <View>
         
          <TouchableOpacity style={HarmonyButtonStyle.loading}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
          > 
          <ActivityIndicator size="small" color="#FFFFFF" />
        </TouchableOpacity>
        
        
        
        </View>
        );
        
        }
        else
        {

        return(
          <TouchableOpacity style={HarmonyButtonStyle.disabled}
          disabled
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.primary}>{props.title}</Text>
        </TouchableOpacity>
        
        );
        }
        
        //SECONDARY--------------------------------------------------------------------------------------------

      case HButtonStyle.secondary:
       
        if (HButtonState.initial===props.state)
        {

        return(
        <TouchableOpacity style={HarmonyButtonStyle.secinitial}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.secondary}>{props.title}</Text>
        </TouchableOpacity>
        );

        }
        else if (HButtonState.active===props.state)
        {

        return(
          <TouchableHighlight style={HarmonyButtonStyle.secActive}
          activeOpacity={0.15}
          underlayColor="#D6D8E7"
          type={props.type}
          state={props.state} 
          onPress={props.onPress} 
        >

        <Text style={HarmonyButtonStyle.secondary}>{props.title}</Text>
        
      </TouchableHighlight>
        );

        }
        else if (HButtonState.loading===props.state)
        {

        return(
          <TouchableOpacity style={HarmonyButtonStyle.secLoading}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        
        <ActivityIndicator size="small" color="#394867" />
        </TouchableOpacity>
        );
        
        }
        else
        {

        return(
          <TouchableOpacity style={HarmonyButtonStyle.secDisabled}
          disabled
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.secondary}>{props.title}</Text>
        </TouchableOpacity>
        
        );
        }
        
      //SUBTLE-------------------------------------------------------------------------------------------------------------------------------

      case HButtonStyle.subtle:
        if (HButtonState.initial===props.state)
        {

        return(
        <TouchableOpacity style={HarmonyButtonStyle.subinitial}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.subtle}>{props.title}</Text>
        </TouchableOpacity>
        );

        }
        else if (HButtonState.active===props.state)
        {

        return(
          <TouchableHighlight style={HarmonyButtonStyle.subActive}
          activeOpacity={0.15}
          underlayColor="#D6D8E7"
          type={props.type}
          state={props.state} 
          onPress={props.onPress} 
        >

        <Text style={HarmonyButtonStyle.subtle}>{props.title}</Text>
        
      </TouchableHighlight>
        );

        }
        else if (HButtonState.loading===props.state)
        {

        return(
          <TouchableOpacity style={HarmonyButtonStyle.subLoading}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        
        <ActivityIndicator size="small" color="#394867" />
        </TouchableOpacity>
        );
        
        }
        else
        {

        return(
          <TouchableOpacity style={HarmonyButtonStyle.subDisabled}
          disabled
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.subtle}>{props.title}</Text>
        </TouchableOpacity>
        
        );
        }
        
       //TEXT------------------------------------------------------------------------------------------------------------
        
      case HButtonStyle.text:
        if (HButtonState.initial===props.state)
        {

        return(
        <TouchableOpacity style={HarmonyButtonStyle.textInitial}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.text}>{props.title}</Text>
        </TouchableOpacity>
        );

        }
        else if (HButtonState.active===props.state)
        {

        return(
          <TouchableHighlight style={HarmonyButtonStyle.textActive}
          activeOpacity={0.8}
          underlayColor="#EFF0F7"
          type={props.type}
          state={props.state} 
          onPress={props.onPress} 
        >

        <Text style={HarmonyButtonStyle.text}>{props.title}</Text>
        
      </TouchableHighlight>
        );

        }
        else if (HButtonState.loading===props.state)
        {

        return(
          <TouchableOpacity style={HarmonyButtonStyle.textLoading}
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        
        <Text style={HarmonyButtonStyle.text}>Loading...</Text>
        </TouchableOpacity>
        );
        
        }
        else
        {

        return(
          <TouchableOpacity style={HarmonyButtonStyle.textDisabled}
          disabled
          type={props.type}
          state={props.state} 
          onPress={props.onPress}
        > 
        <Text style={HarmonyButtonStyle.text}>{props.title}</Text>
        </TouchableOpacity>
        
        );
        }
      default:

        break;
    }
}

  //TODO: DO STYLING FOR HARMONY BUTTON
  //WRAP BUTTON IN VIEW IF NECCESSARY TO CREATE THE EXPECTED STYLE

  return (
    <View style={HarmonyButtonStyle.container}>
    {

      firstswitch()
    } 
    </View>
  )
}

export default HButton

//Can be imported as 
//import HButton, {HButtonProps, ButtonStyle} from '...path'