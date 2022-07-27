// Component used for opening a link to a website

// Importing react packages
import React from 'react';
import { Linking} from 'react-native'

export default async function webLink(url){
        await Linking.canOpenURL(url);
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
}