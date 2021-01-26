import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { HarmonyCheckbox} from './checkbox.stylesheet';

const HCheckbox = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={HarmonyCheckbox.container}>
      <View style={HarmonyCheckbox.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={HarmonyCheckbox.checkbox}
          tintColors={{ true: '#ffffff' , false:'green' }}
          onCheckColor={'red'}
          
          
        />
        
      </View>
    </View>
  );
};



export default HCheckbox;