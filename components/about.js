// About component to describe myself

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Linking} from 'react-native'

// Importing components
import styles from './style';

export default function About (){

    // What is visually returned to display
    return(
    <View style = {styles.container}>
      <View style = {styles.splitscreen}>
        <Image
            style={styles.profilePicture}
            source={require('../images/profilePicture.jpg')}
        />
        <View> 
            <Text style = {{fontSize: 20, textAlign: 'center', fontFamily: 'sans-serif',}}>Hello! I'm... </Text>
            <Text style = {styles.title}>Eric Hu</Text>
            <Text style = {styles.subtitle}> I'm a senior at Brandeis University and majoring in Computer Science</Text>
            <Text style = {styles.subtitle}> and minoring in Asian American Pacific Islander Studies</Text>
            <Text style = {styles.subtitle}> and Film & Interactive Media Studies. </Text>
            <Text style = {styles.text}> I'm from Seattle, WA and I go to univesity in Boston, MA. Growing up, </Text>
            <Text style = {styles.text}> I was always interested in computers. When I was 13 years old, I built my</Text>
            <Text style = {styles.text}> first PC, which I've kept up and running up to this day. When I was 15,</Text>
            <Text style = {styles.text}> I took my first programming class in high school, where I learned C#</Text>
            <Text style = {styles.text}> and participated in the game design competition, Hunt The Wumpus!</Text>
            <Text style = {styles.text}> That class ignited my interest in computer programming which inspired</Text>
            <Text style = {styles.text}> me to pursue Computer Science and the rest is history!  </Text>
            {/* <Text style = {styles.text}> In my free time, I like to run, watch TV & movies, and play video games. Another hobby of</Text>
            <Text style = {styles.text}> mine is learning card magic!</Text> */}
        </View>
      </View>

      <View style = {styles.splitscreen}>
      <TouchableOpacity  onPress={() => webBrowser('https://docs.google.com/document/d/1RezT5OlxuhlwE_pwlQdn2xrkyLxE9JMZjGaygHm7UGs/edit?usp=sharing')}>
            <Image
                style={styles.logo}
                source={require('../images/googleDocsLogo.jpg')}
            />
            <Text style = {styles.label}>Resume</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => webBrowser('https://www.linkedin.com/in/eric-hu-0aa96b1b0/')}>
            <Image
                style={styles.logo}
                source={require('../images/linkedInLogo.jpg')}
            />
            <Text style = {styles.label}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => webBrowser('https://github.com/erichu07192001')}>
            <Image
                style={styles.logo}
                source={require('../images/gitHubLogo.jpg')}
            />
            <Text style = {styles.label}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <View style = {{padding: 20}}> 
        <Text style = {styles.label}>Click Me To Learn More!</Text>
    </View>

    </View>
    );
}

// Use to open up a new link
const webBrowser = async (url) => {
    await Linking.canOpenURL(url);
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
}