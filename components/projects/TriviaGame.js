// Trivia Game Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Linking} from 'react-native'

// Importing components
import styles from '../style';

export default function projects(){
    return(
        <View style = {styles.container}>
            <View style = {styles.splitscreen}>
                

                <Text style = {styles.subtitle}>Platinum Trivia App</Text>
            </View>
        </View>
    );
}