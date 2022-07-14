// About component to describe myself

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image} from 'react-native';

// Importing components
import styles from './style';

export default function About (){

    // What is visually returned to display
    return(
    <View style = {styles.containter}>
      <View style = {styles.splitscreen}>
        <Image
            style={styles.pic}
            source={require('../images/profilePicture.jpg')}
        />
        <View> 
            <Text style = {styles.text}>Hi, my name is ... </Text>
            <Text></Text>
            <Text style = {styles.title}>Eric Hu</Text>
            <Text style = {styles.subtitle}> I'm a senior at Brandeis University and majoring in Computer Science</Text>
            <Text style = {styles.subtitle}> and minoring in Asian American Pacific Islander Studies</Text>
            <Text style = {styles.subtitle}> & Film and Interactive Media Studies. </Text>
        </View>
      </View>

    </View>
    );
}
