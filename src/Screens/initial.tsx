import React, { useState } from "react";
import {Image , View} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './home'
import HTab1 from '../components/Forms/HTabs/HTab1'
import HTab2 from '../components/Forms/HTabs/HTab2'
import HTab3 from '../components/Forms/HTabs/HTab3'
import HTab4 from '../components/Forms/HTabs/HTab4'
import { NavigationContainer } from '@react-navigation/native';
 

const Tab = createMaterialBottomTabNavigator();

const initial = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      activeColor="black"
      inactiveColor="#3e2465"
      barStyle = {{backgroundColor : '#D0E8F2'}}
      labeled = {false}
      >
        <Tab.Screen 
          options={{
            tabBarIcon: () => (
              <Image
              style={{ width: 20, height: 20, resizeMode: 'contain'}}
              source={{ uri : 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png'}}
              />
            ),
          }}
          name="Home" 
          component={HomeScreen} />
          
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color }) => (
              <Image
              style={{ width: 20, height: 20, resizeMode: 'contain'}}
              source={{ uri : 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png'}}
              />
            ),
          }}
          name="xyz" 
          component={HTab1} />

        <Tab.Screen 
          options={{
            tabBarIcon: () => (
              <View style = {{height : 30 , width : 30 , borderRadius : 22 , backgroundColor : '#394867' , justifyContent : 'center' , alignItems : 'center' }}>
                <Image
                style={{ width: 20, height: 20, resizeMode: 'contain'}}
                source={{ uri : 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png'}}
                />
              </View>
            ),
          }}
          name="Add" 
          component={HTab2} />

        <Tab.Screen 
          options={{
            tabBarIcon: () => (
              <Image
              style={{ width: 20, height: 20, resizeMode: 'contain'}}
              source={{ uri : 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png'}}
              />
            ),
          }}
          name="Notif" 
          component={HTab3} />

        <Tab.Screen 
          options={{
            tabBarIcon: ({ color }) => (
              <Image
              style={{ width: 20, height: 20, resizeMode: 'contain'}}
              source={{ uri : 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png'}}
              />
            ),
          }}
          name="folder" 
          component={HTab4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default initial