// Project component to show off projects I've worked on
// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Linking} from 'react-native'

// Importing components
import styles from './style';

export default function projects(){
    return(
        <Text style = {styles.title}>Projects</Text>
    );
}