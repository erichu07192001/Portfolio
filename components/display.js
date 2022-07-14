// Display Component used to tie all of the components together for each tab

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing components
import About from './about'

const Tab = createBottomTabNavigator(); // Creating tabs

export default function display(){
    // 
    return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}