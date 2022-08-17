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
                    <Text style = {styles.subtitle}>RenTree (Fall 2021)</Text>
                    <Text style = {styles.text}>Designed a mobile application aimed to connect students for renting household items</Text>
                    <Text style = {styles.text}>- Utilized the iterative design process: data gathering, defining requirements, prototyping, and evaluating solutions</Text>
                    <Text style = {styles.text}>- Explored the problem space by conducting focus groups and interviews to learn about stakeholders and produce a conceptual model and interface type.</Text>
                    <Text style = {styles.text}>- Analyzed walkthroughs by assigning tasks for participants to complete and optimized the design of our application based on observation and feedback</Text>
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