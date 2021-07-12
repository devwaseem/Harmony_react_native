import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  ActivityIndicator
} from 'react-native';

import { HarmonyIconStyle } from './HIcon.stylesheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export enum HIconStyle {
  primary,
  secondary
}

export enum HIconState {
  initial,
  active,
  loading,
  disabled
}

export interface HIconProps {
  type: HIconStyle
  state: HIconState
  onPress?: ()=>void
  title?: string
  accessibilityLabel?: string
}

const HarmonyIcon = (props: HIconProps)=> {
   const firstswitch = () => {
    switch(props.type) {
      case HIconStyle.primary:
        //Running if for every state in primary
        if (HIconState.initial===props.state)
        {
            return(
                <TouchableOpacity style={HarmonyIconStyle.primarystates}
                type={props.type}
                state={props.state} 
                onPress={props.onPress}
                > 
                <MaterialIcons name='keyboard-arrow-right' size={40} color = 'white' />
                </TouchableOpacity>
            );
        }
        else if (HIconState.active===props.state)
        {
            return(
                <TouchableHighlight style={HarmonyIconStyle.primarystates}
                activeOpacity={0.15}
                underlayColor="#FCFCFC"
                type={props.type}
                state={props.state} 
                onPress={props.onPress} 
                >
                <MaterialIcons name='keyboard-arrow-right' size={40} color = 'white' />  
                </TouchableHighlight>
            );
        }
        else if (HIconState.loading===props.state)
        {   
            return(
                <View>
                    <TouchableOpacity style={HarmonyIconStyle.primarystates}
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
        {    var buttonstyle=null;
            buttonstyle = {...HarmonyIconStyle.primarydisabled , ...HarmonyIconStyle.disabled}
            return(
                <TouchableOpacity 
                style={buttonstyle}
                disabled
                type={props.type}
                state={props.state} 
                onPress={props.onPress}
                > 
                <MaterialIcons name='keyboard-arrow-right' size={40}  color = 'white' />
                </TouchableOpacity>
            );
        }
        
        //-------------------------------------SECONDARY-----------------------------------------

      case HIconStyle.secondary: 
      //Running if for every state in secondary
        if (HIconState.initial===props.state)
        {
            return(
                <TouchableOpacity style={HarmonyIconStyle.secstates}
                type={props.type}
                state={props.state} 
                onPress={props.onPress}
                > 
                <MaterialIcons name='keyboard-arrow-right' size={40} color = '#394867' />
                </TouchableOpacity>
            );
        }
        else if (HIconState.active===props.state)
        {
            return(
                <TouchableHighlight style={HarmonyIconStyle.secstates}
                activeOpacity={0.15}
                underlayColor="#D6D8E7"
                type={props.type}
                state={props.state} 
                onPress={props.onPress} 
                >
                <MaterialIcons name='keyboard-arrow-right' size={40} color = '#394867' />
                </TouchableHighlight>
            );
        }
        else if (HIconState.loading===props.state)
        {
            return(
                <TouchableOpacity 
                style={HarmonyIconStyle.secstates}
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
                <TouchableOpacity 
                style={HarmonyIconStyle.secondarydisabled}
                disabled
                type={props.type}
                state={props.state} 
                onPress={props.onPress}
                > 
                <MaterialIcons name='keyboard-arrow-right' size={40} color = '#394867' />
                </TouchableOpacity>
            );
        }
      default:
        break;
    }
}

//TODO: DO STYLING FOR HARMONY Icon
//WRAP Icon IN VIEW IF NECCESSARY TO CREATE THE EXPECTED STYLE

return (
    <View style={HarmonyIconStyle.container}>
        {
        firstswitch()
        } 
    </View>
  )
}

export default HarmonyIcon

//Can be imported as 
//import HIcon, {HIconProps, IconStyle} from '...path'