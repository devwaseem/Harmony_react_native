import React, {useState} from 'react';
import HarmonyButton,{HButtonProps,HButtonStyle,HButtonState} from '../components/Forms/HButton';
import {
  SafeAreaView,
  StatusBar,
  View,
  Alert
} from 'react-native';

const HomeScreen= () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
              <HarmonyButton 
              type={HButtonStyle.text}
              state={HButtonState.loading}
              isLoading={true}
              title="Button"
              onPress={() => Alert.alert('Simple Button pressed')}
              />

              
          </View>
        </SafeAreaView>
      </>
    );
  };

export default HomeScreen;
