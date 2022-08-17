// RunApp Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// Importing components
import styles from '../style';

export default function RunApp(){
    return(
        <View style = {styles.container}>
            <View style = {styles.splitscreen}>
                <Image 
                    style = {styles.picture}
                    source={require('../../images/runAppImages/runAppHomescreen.jpg')}
                />
                <View style = {styles.body}>
                    <Text style = {styles.subtitle}>RunApp (Summer 2020)</Text>
                    <Text style = {styles.text}>Developed a website to allow users to track and compare information for running sports</Text>
                    <Text style = {styles.text}>- Developed with NodeJS, stored in the cloud with MongoDB, while deployed with Heroku (some functions of the 
                    website may be down due to MongoDB turning off inactive clusters).  </Text>
                    <Text style = {styles.text}>- Implemented effortless account creation and login with Google Account Authentication</Text>
                    <Text style = {styles.text}>- Designed a leaderboard that sorted race times based on user’s information</Text>
                    <View style = {styles.splitscreen}>
                        <TouchableOpacity  onPress={() => window.open('https://runapp-152.herokuapp.com/')}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/logos/herokuLogo.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => window.open('https://github.com/erichu07192001/RunApp')}>
                            <Image
                                style={styles.logo}
                                source={require('../../images/logos/gitHubLogo.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    
}