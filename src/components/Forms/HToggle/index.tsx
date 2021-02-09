import React, {useState} from 'react';
import {
  View,
  Switch
} from 'react-native';

export enum HToggleState {
  initial,
  disabled
}

export interface HToggleProps {
  state: HToggleState
  onPress?: ()=>void
  title?: string
  accessibilityLabel?: string
}

const HarmonyToggle = (props: HToggleProps)=> {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        if (HToggleState.initial===props.state)
        {
            return(
              <View style = {{alignItems : 'center', margin : 10}}>
                <Switch
                    trackColor={{ false: "#D6D8E7", true: "#394867" }}
                    thumbColor={isEnabled ? "#FCFCFC" : "#FCFCFC"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                </View>
            );
        }
        else
        {   
            return(
              <View style = {{alignItems : 'center', margin : 10}}>
                <Switch
                    trackColor={{ false: "#D6D8E7", true: "#394867" }}
                    thumbColor={isEnabled ? "#FFFFFF" : "#E8E8E8"}
                    ios_backgroundColor="#D0E8F2"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    disabled
                />
              </View>
            );
        }
}

export default HarmonyToggle

//Can be imported as 
//import HIcon, {HIconProps, IconStyle} from '...path'