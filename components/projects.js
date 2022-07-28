// Project component to show off projects I've worked on

// Importing react packages
import React from 'react';
import { View,  Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Linking} from 'react-native'

// Importing components
import styles from './style';
import Trivia from './projects/triviaGame';
import RunApp from './projects/runApp';
import RenTree from './projects/renTree';
import WorldCancer from './projects/worldCancer';
import Explorer from './projects/explorer'

export default function Projects(){
    return(
        <View style = {styles.container}> 
            <View style = {styles.splitscreen}>
                <View>
                    <Text style = {styles.title}>Projects</Text>
                    <Text style = {styles.subtitle}>Check out some of the projects</Text>
                    <Text style = {styles.subtitle}>I have worked on during my time at Brandeis!</Text>
                    <Text style = {styles.text}> Of course, there will be many more projects to come. </Text>
                    <Text style = {styles.text}> These are just a few that I thought were cool and would love to share!</Text>
                    <Text style = {styles.text}> Also, I built this website myself with ReactJS and Expo!</Text>
                </View>

                <Image
                    style={styles.profilePicture}
                    source={require('../images/projectHeadImage.jpg')}
                />
            </View>
                <Explorer/>
                <WorldCancer/>
                <RenTree/>
                <RunApp/>
                <Trivia/>
        </View>
    );
}