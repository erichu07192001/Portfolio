// Project component to show off projects I've worked on

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// Importing components
import styles from './style';
import Trivia from './projects/triviaGame';
import RunApp from './projects/runApp';
import RenTree from './projects/renTree';
import WorldCancer from './projects/worldCancer';
import Explorer from './projects/explorer'

export default function Projects(){
    return(
        <View style = {styles.projects}> 
            <View style = {styles.splitscreen}>
                <View style = {styles.body}>
                    <Text style = {styles.title}>Projects</Text>
                    <Text style = {styles.subtitle}>Check out some of the projects</Text>
                    <Text style = {styles.subtitle}>I have worked on during my time at Brandeis!</Text>
                    <Text style = {styles.text}>Of course, there will be many more projects to come.
                    These are just a few that I thought were cool and would love to share! </Text>
                    <Text style = {styles.text}>Also, I built this website myself with ReactJS and Expo!
                    Click on any of the icons on the following project to learn more!</Text>
                </View>

                <Image
                    style={styles.profilePicture}
                    source={require('../images/projectHeadImage.jpg')}
                />
            </View>
                <View style = {{backgroundColor: 'azure', padding: 20, borderRadius: 20}}><Explorer/></View>
                <br/>
                <View style = {{backgroundColor: '#89C4F4', padding: 20, borderRadius: 20}}><WorldCancer/></View>
                <br/>
                <View style = {{backgroundColor: '#4B77BE', padding: 20, borderRadius: 20}}><RenTree/></View>
                <br/>
                <View style = {{backgroundColor: '#1F4788', padding: 20, borderRadius: 20}}><RunApp/></View>
                <br/>
                <View style = {{backgroundColor: '#003171', padding: 20, borderRadius: 20}}><Trivia/></View>
        </View>
    );
}