import React, {useState} from 'react';
import HarmonyButton,{HButtonProps,HButtonStyle,HButtonState} from '../components/Forms/HButton';
import HarmonyIcon,{HIconProps,HIconStyle,HIconState} from '../components/Forms/HIcon';
import HTextInput,{HTextInputProps,HTextInputStyle,HTextInputState} from '../components/Forms/HTextInput';
import HarmonyToggle,{HToggleState} from '../components/Forms/HToggle';
import { SafeAreaView, StatusBar, View, Alert } from 'react-native';
import HRadio from '../components/Forms/HRadio';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HAdd from '../components/Forms/HTabs/HTab1';

const options = ['1','2'];
const Tab = createMaterialBottomTabNavigator();

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
              state={HTextInputState.initial}
              placeholder="search"
              caption= "caption here!"
              filled="999-999-999"
              success
            />
            <HarmonyToggle
              state={HToggleState.initial}
            />
            <HRadio 
             options = {options}
            />
            
          </View>
        </SafeAreaView>
      </>
    );
  };

export default HomeScreen;

