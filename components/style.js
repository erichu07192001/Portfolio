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
    container:{
      padding: 24,
      flex: 1,
      backgroundColor: 'transparent'
    },
  
    title:{
      fontFamily: 'sans-serif',
      fontSize: 64,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5
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
      borderRadius: 1000,
      alignSelf: 'center',
    },
    
    projectPicture: {
      width: imageWidth / 4,
      height: imageHeight / 3,
      borderRadius: 500,
      alignSelf: 'center',
    },

    logo:{
      height: 150,
      width: 150,
      alignSelf:'center',
      borderRadius: 10
    },
  
    splitscreen: {
      flexDirection: 'row',
      padding: 20,
      // backgroundColor: 'gray',
      justifyContent: 'space-evenly',
    }
  });

  

  export default styles;