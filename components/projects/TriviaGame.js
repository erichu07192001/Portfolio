// Trivia Game Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

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
                <View style = {styles.body}>
                    <Text style = {styles.subtitle}>Platinum Trivia App (Spring 2019)</Text>
                    <Text style = {styles.text}>Programmed a trivia game, where users can play preset or custom quizzes and compare scores</Text>
                    <Text style = {styles.text}>- Developed in Java, using object oriented programming and data structures</Text>
                    <Text style = {styles.text}>- Stored information locally by reading and writing to files</Text>
                    <Text style = {styles.text}>- Collaborated through GitHub</Text>
                    <TouchableOpacity  onPress={() => window.open('https://github.com/ianduffield/COSI12B_Final_Project_Team12')}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/logos/gitHubLogo.png')}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
    
}