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
          boxType={'circle'}
          onValueChange={setSelection}
          style={HarmonyCheckbox.checkbox}
          tintColors={{ true: '#394867' , false:'#D6D8E7' }}
        />
        
      </View>
      {/* <Text>Is CheckBox selected: {isSelected ?
       <View>

       </View>
       : 
       <View>
           </View>}</Text> */}
    </View>
  );
};



export default HCheckbox;