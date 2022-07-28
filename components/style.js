// Styling component used for the entire project

// Importing react packages
import {StyleSheet, Dimensions} from 'react-native';
import { ImageBackground } from 'react-native-web';

// Variable used to find dimensions of screen
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

// Used to keep styling consistent
const styles = StyleSheet.create({
    about:{
      padding: 24,
      flex: 1,
      backgroundColor: '#FFFDE7'
    },

    projects:{
      padding: 24,
      flex: 1,
      backgroundColor: '#D3D3D3'
    },
  
    title:{
      fontFamily: 'sans-serif',
      fontSize: 64,
      fontWeight: 'bold',
      // textAlign: 'center',
      paddingBottom: 10
    },

    subtitle:{
      fontFamily: 'sans-serif',
      fontSize: 32,
      fontWeight: 'bold',
      paddingBottom: 10
    },
  
    text:{
      fontFamily: 'sans-serif',
      fontSize: 24,
      paddingBottom: 8
    },

    label:{
      fontFamily: 'sans-serif',
      fontSize: 16,
      textAlign: 'center',
      color: '#171780',
      padding: 5
    },
  
    profilePicture: {
      width: imageWidth / 3,
      height: imageHeight / 2,
      borderRadius: 2000,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
    
    projectPicture: {
      width: imageWidth / 3,
      height: imageHeight / 2,
      borderRadius: 500,
      alignSelf: 'center',
      resizeMode: 'contain'
    },

    picture:{
      height: imageHeight / 3,
      width: imageWidth / 3,
      // borderRadius: 75,
      alignSelf:'center',
      resizeMode: 'contain',
    },

    logo:{
      height: imageHeight / 10,
      width: imageWidth / 10,
      alignSelf:'center',
      borderRadius: 10,
      resizeMode: 'contain',
    },
  
    splitscreen: {
      flexDirection: 'row',
      padding: 20,
      // backgroundColor: 'gray',
      justifyContent: 'space-evenly',
    }
  });

  

  export default styles;