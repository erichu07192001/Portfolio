// RenTree Project

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// Importing components
import styles from '../style';

export default function RenTree(){
    return(
        <View style = {styles.container}>
            <View style = {styles.splitscreen}>
                <Image 
                    style = {styles.picture}
                    source={require('../../images/renTreeImages/oneSlide.jpg')}
                />
                <View style = {styles.body}>
                    <Text style = {styles.subtitle}>Rentree (Fall 2021)</Text>
                    <Text style = {styles.text}>Designed a mobile app aimed at students for renting household items. </Text>
                    <Text style = {styles.text}>Utilized the interaction design process by exploring the problem space, 
                    collecting data from users, and creating prototypes iteratively.</Text>
                    <Text style = {styles.text}> </Text>
                    <TouchableOpacity  onPress={() => window.open('https://docs.google.com/document/d/15J6iff051kFF0meZH-qHulz0qBqcVLrNutITQBIkmXs/edit?usp=sharing')}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/logos/googleDocsLogo.png')}
                        />
                        <Text style = {styles.label}>Final Report</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
    
}