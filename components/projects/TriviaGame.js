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
                    source={require('../../images/TriviaGameImages/triviaText.jpg')}
                />
                <View>
                    <Text style = {styles.subtitle}> Platinum Trivia App (Spring 2019)</Text>
                    <Text style = {styles.text}> A text based trivia game written in Java I built with a couple of classmates. </Text>
                    <Text style = {styles.text}> You can play trivia other people have created or make your own for other's to play.  </Text>
                    <Text style = {styles.text}> This game was built using object oriented programming, with quizzes and scores being saved to file. </Text>
                    <Text style = {styles.text}> Various data structures were used when running the game to create better performance.  </Text>
                    
                </View>
                
            </View>
        </View>
    );
    
}