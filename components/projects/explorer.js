// Explorer Project

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
                    source={require('../../images/explorerImages/explorerSeattle.png')}
                />
                <View>
                    <Text style = {styles.subtitle}>Explorer (Summer 2022)</Text>
                    <Text style = {styles.text}> A mobile application I built with ReactJS and Expo.</Text>
                    <Text style = {styles.text}> Explorer helps users find activities to do nearby. Users are asked for</Text>
                    <Text style = {styles.text}> their location and can search for food and activities nearby.</Text>
                    <Text style = {styles.text}> Explorer uses Yelp and Weather API to help users find activities</Text>
                    <Text style = {styles.text}> </Text>
                    <Text style = {styles.text}> </Text>
                    <View style = {styles.splitscreen}>
                        <TouchableOpacity  onPress={() => webLink('https://github.com/erichu07192001/explorer')}>
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