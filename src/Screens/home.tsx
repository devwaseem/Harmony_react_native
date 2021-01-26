import React, {useState} from 'react';
import HarmonyButton,{HButtonProps,HButtonStyle,HButtonState} from '../components/Forms/HButton';
import HarmonyIcon,{HIconProps,HIconStyle,HIconState} from '../components/Forms/HIcon';
import HTextInput,{HTextInputProps,HTextInputStyle,HTextInputState} from '../components/Forms/HTextInput';
import HTextInputArea,{HTextInputAreaProps,HTextInputAreaState} from '../components/Forms/HTextInputArea';
import HCheckbox from '../components/Forms/Checkbox';
import HStepper from '../components/Forms/IncrementStepper'

import { SafeAreaView, StatusBar, View, Alert } from 'react-native';

const HomeScreen= () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <View>
          
            <HarmonyButton 
              type={HButtonStyle.secondary}
              state={HButtonState.disabled}
              isLoading={true}
              title="Button"
              onPress={() => Alert.alert('Simple Button pressed')}
            />   
            <HarmonyIcon
              type={HIconStyle.primary}
              state={HIconState.disabled}
              title="Icon"
              onPress={() => Alert.alert('icon pressed')}
            /> 
            <HTextInput
              type={HTextInputStyle.searchIcon}
              state={HTextInputState.filled}
              placeholder="search"
              caption= "Success message"
              filled="999-999-999"
              
            />
           
            <HTextInputArea
              state={HTextInputAreaState.filled}
              placeholder="search"
              caption= "Success message"
              filled="999-999-999"
            />

            <HCheckbox/>
          
            <HStepper
            //disabled
            />
            
          </View>
        </SafeAreaView>
      </>
    );
  };

export default HomeScreen;

