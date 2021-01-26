import React, {useState} from 'react';
import { IncrementStepper } from './IncrementStepper.stylesheet'
import {
    Button,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    TouchableOpacityBase,
  } from 'react-native';

const HStepper=(props:{disabled?:boolean})=>{
    const [count, setCount] = useState(0)
    var [ isPressdec, setIsPressdec ] = React.useState(false);
    var [ isPressinc, setIsPressinc ] = React.useState(false);
    

    var touchPropsdec = {
        activeOpacity: 1,
        underlayColor: 'white',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPressdec ? IncrementStepper.btnPress : IncrementStepper.stepper, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPressdec(false),
        onShowUnderlay: () => setIsPressdec(true),
                    
      };

      var touchPropsinc = {
        activeOpacity: 1,
        underlayColor: 'white',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPressinc ? IncrementStepper.btnPress : IncrementStepper.stepper, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPressinc(false),
        onShowUnderlay: () => setIsPressinc(true),
                    
      };

      var buttondisabled = {
        activeOpacity: 0.5,
                          
        style:IncrementStepper.btndisabled, // <-- but you can still apply other style changes
        
                    
      };
    
   
    
    function decrementCount(){
        setCount(prevCount => prevCount -1)
    }
    function incrementCount() {
        setCount(prevCount => prevCount +1)
    }

    return(
        <View style={IncrementStepper.container}>
        
        
        <TouchableHighlight  {...props.disabled===true?{...buttondisabled}:{...touchPropsdec}}
        onPress={decrementCount}
        disabled={props.disabled}    
        >
          
        <Text style={props.disabled===true ? {...IncrementStepper.textDisabled}:{...IncrementStepper.text}}>-</Text> 
        </TouchableHighlight >
        
        <Text  style={props.disabled===true ? {...IncrementStepper.textDisabled}:{...IncrementStepper.text}}>
          {count}
        </Text>

        <TouchableHighlight  {...props.disabled===true?{...buttondisabled}:{...touchPropsdec}}
        onPress={incrementCount}
        disabled={props.disabled}  
        >
          
        <Text style={props.disabled===true ? {...IncrementStepper.textDisabled}:{...IncrementStepper.text}}>+</Text> 
        </TouchableHighlight >
       
        </View>
    );
}

export default HStepper