// Trivia Game Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// Importing components
import styles from '../style';
import webLink from '../webLink';

export default function RunApp(){
    return(
        <View style = {styles.container}>
            <View style = {styles.splitscreen}>
                <Image 
                    style = {styles.picture}
                    source={require('../../images/runAppImages/runAppHomescreen.jpg')}
                />
                <View>
                    <Text style = {styles.subtitle}>RunApp (Summer 2020)</Text>
                    <Text style = {styles.text}> A website I built with NodeJS used to track running times based on distance.</Text>
                    <Text style = {styles.text}> Deployed to Heroku wtih cloud storage on MongoDB (some functions of the  </Text>
                    <Text style = {styles.text}> website may be down due to MongoDB turning off inactive clusters).  </Text>
                    <Text style = {styles.text}> RunApp enables users to login with their Google account, allowing them  </Text>
                    <Text style = {styles.text}> access to the leaderboard function to record and compare running times. </Text>
                    <Text style = {styles.text}> Furthermore, I also implemented a weather API for users to check the weather.</Text>
                    <View style = {styles.splitscreen}>
                        <TouchableOpacity  onPress={() => webLink('https://github.com/erichu07192001/RunApp')}>
                            <Image
                                style={styles.logo}
                                source={require('../../images/logos/gitHubLogo.jpg')}
                            />
                            <Text style = {styles.label}>GitHub</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={() => webLink('https://runapp-152.herokuapp.com/')}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/logos/herokuLogo.png')}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    
}