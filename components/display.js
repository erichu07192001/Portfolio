// Display Component used to tie all of the components together for each tab

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Importing components
import About from './about'
import Projects from './projects'

const Tab = createMaterialTopTabNavigator(); // Creating tabsexpo

export default function display(){
    return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About Me" component={About} />
        <Tab.Screen name="Projects" component={Projects} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}