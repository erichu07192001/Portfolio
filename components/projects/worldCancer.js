// World Cancer Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// Importing components
import styles from '../style';

export default function WorldCancer(){
    return(
        <View style = {styles.container}>
            <View style = {styles.splitscreen}>
                <Image 
                    style = {styles.picture}
                    source={require('../../images/worldCancerImages/worldCancerHungary.png')}
                />
                <View style = {styles.body}>
                    <Text style = {styles.subtitle}>World Cancer Data (Spring 2022)</Text>
                    <Text style = {styles.text}>Data analysis of malignant types of Cancer from 2000 - 2012</Text>
                    <Text style = {styles.text}>- Evaluated with JupyterNotebook (Python) while using NumPy and Pandas packages</Text>
                    <Text style = {styles.text}> </Text>
                    <Text style = {styles.text}> </Text>
                    <TouchableOpacity  onPress={() => window.open('https://github.com/erichu07192001/cs103a-cpa01')}>
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