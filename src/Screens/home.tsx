import React, {useState} from 'react';
import HarmonyButton,{HButtonProps,HButtonStyle,HButtonState} from '../components/Forms/HButton';
import HarmonyIcon,{HIconProps,HIconStyle,HIconState} from '../components/Forms/HIcon';
import HTextInput,{HTextInputProps,HTextInputStyle,HTextInputState} from '../components/Forms/HTextInput';
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
              type={HTextInputStyle.standard}
              state={HTextInputState.caption}
              placeholder="search"
              caption= "caption here!"
            />
          </View>
        </SafeAreaView>
      </>
    );
  };

export default HomeScreen;