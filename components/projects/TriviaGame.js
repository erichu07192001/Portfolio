// Trivia Game Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Linking} from 'react-native'
// import Carousel from '../carousel';

// Importing components
import styles from '../style';

export default function TriviaGame(){
    return(
        <View style = {styles.container}>
            <View style = {styles.splitscreen}>
                <Image 
                    style = {styles.picture}
                    source={require('../../images/triviaText.jpg')}
                />
                <View>
                    <Text style = {styles.subtitle}> Platinum Trivia App (Spring 2019)</Text>
                    <Text style = {styles.text}> A text based trivia game written in Java using basic data structures</Text>
                    
                </View>
                
            </View>
        </View>
    );
    
}