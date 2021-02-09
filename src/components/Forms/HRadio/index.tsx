import React, { useState } from "react";
import { View , TouchableOpacity , Text } from "react-native";
import { HarmonyRadiostyle} from './HRadio.stylesheet';

const HRadio = ({options}) => {
    const [value, setValue] = useState(null);
            function setOption(currentkey) {
                setValue(currentkey)
            }
    return(
        <View>
        {options.map((option , index) => {
            return(
            <View key={index} style={HarmonyRadiostyle.container}>
                <Text>{option}</Text>
                <TouchableOpacity
                style={HarmonyRadiostyle.circle}
                onPress = {() => setOption(index)}
                >
                    {value === index && (<View style={HarmonyRadiostyle.checkedCircle} />) }
                </TouchableOpacity>
            </View>
            )
        })}
        </View>
    )
    
}

export default HRadio;