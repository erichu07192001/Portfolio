// Explorer Project

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
                    source={require('../../images/explorerImages/explorerSeattle.png')}
                />
                <View style = {styles.body}>
                    <Text style = {styles.subtitle}>Explorer (Summer 2022)</Text>
                    <Text style = {styles.text}>Developed a mobile application to help users search food and activities </Text>
                    <Text style = {styles.text}>- Developed with ReactJS and Expo, while deployed with Heroku</Text>
                    <Text style = {styles.text}>- Implemented APIs (Yelp & Weather) to gather information to help users choose an activity</Text>
                    <Text style = {styles.text}>- Streamlined user experience with Expo SDK allowing users current location information from APIs to be initially displayed </Text>
                    <Text style = {styles.text}> </Text>
                    <View style = {styles.splitscreen}>
                        <TouchableOpacity  onPress={() => window.open('https://explorer153.herokuapp.com/')}>
                            <Image
                                style={styles.logo}
                                source={require('../../images/logos/herokuLogo.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => window.open('https://github.com/erichu07192001/explorer')}>
                            <Image
                                style={styles.logo}
                                source={require('../../images/logos/gitHubLogo.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => window.open('https://drive.google.com/file/d/192T9wSQhURCWHrJt0ffJaCc7bTqy96Y-/view?usp=sharing')}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/logos/youtubeLogo.png')}
                        />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        </View>
    );
    
}