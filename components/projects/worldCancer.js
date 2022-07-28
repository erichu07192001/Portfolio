// World Cancer Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// Importing components
import styles from '../style';
import webLink from '../webLink';

export default function WorldCancer(){
    return(
        <View style = {styles.container}>
            <View style = {styles.splitscreen}>
                <Image 
                    style = {styles.picture}
                    source={require('../../images/worldCancerImages/worldCancerHungary.png')}
                />
                <View>
                    <Text style = {styles.subtitle}>World Cancer Data (Spring 2022)</Text>
                    <Text style = {styles.text}> Analysis of a world cancer data set through JupyterLabs (Python) using</Text>
                    <Text style = {styles.text}> NumPy and pandas. </Text>
                    <Text style = {styles.text}> </Text>
                    <Text style = {styles.text}> </Text>
                    <TouchableOpacity  onPress={() => webLink('https://github.com/erichu07192001/cs103a-cpa01')}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/logos/gitHubLogo.jpg')}
                        />
                        <Text style = {styles.label}>GitHub</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
    
}