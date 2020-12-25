import React, {useState} from 'react';
import {
  Button
} from 'react-native';

import { HarmonyButtonStyle } from './HButton.stylesheet'

export enum ButtonStyle {
  primary,
  secondary,
  subtle,
  text
}

export interface HButtonProps {
  type: ButtonStyle
  onPress?: ()=>void
  title: string
  accessibilityLabel: string
}

const HButton = (props: HButtonProps)=> {
    
  //TODO: DO STYLING FOR HARMONY BUTTON
  //WRAP BUTTON IN VIEW IF NECCESSARY TO CREATE THE EXPECTED STYLE
  return (
    <Button
      onPress={props.onPress}
      title={props.title}
      accessibilityLabel={props.accessibilityLabel}
    />
  )
}

export default HButton

//Can be imported as 
//import HButton, {HButtonProps, ButtonStyle} from '...path'