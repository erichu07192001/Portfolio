// Styling component used for the entire project

// Importing react packages
import {StyleSheet, Dimensions} from 'react-native';
import { ImageBackground } from 'react-native-web';

// Variable used to find dimensions of screen
const dimensions = Dimensions.get('window');
const height = Math.round(dimensions.width * 9 / 16);
const width = dimensions.width;
const fontScale = width / 1980

// Used to keep styling consistent
const styles = StyleSheet.create({
  // Styles for navigation
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
  
  // Styles
  body:{
    flex: 1,
    padding: 20
  },
    title:{
      fontFamily: 'sans-serif',
      // fontSize: 64,
      fontSize: fontScale * 64,
      fontWeight: 'bold',
      // textAlign: 'center',
      bottomPadding: 20,
    },

    subtitle:{
      fontFamily: 'sans-serif',
      fontSize: fontScale * 32,
      fontWeight: 'bold',
      bottomPadding: 10,
    },
  
    text:{
      fontFamily: 'sans-serif',
      fontSize: fontScale * 24,
      bottomPadding: 10
    },

    label:{
      fontFamily: 'sans-serif',
      fontSize: 16,
      textAlign: 'center',
      color: '#171780',
      padding: 5
    },
  
    profilePicture: {
      width: width / 3,
      height: height / 2,
      borderRadius: 2000,
      alignSelf: 'center',
      resizeMode: 'contain',
      // borderWidth: 5,
      // borderColor: 'red',
      padding: 20
    },
    
    projectPicture: {
      width: width / 3,
      height: height / 2,
      borderRadius: 500,
      alignSelf: 'center',
      resizeMode: 'contain',
      
    },

    picture:{
      height: height / 3,
      width: width / 3,
      // borderRadius: 75,
      alignSelf:'center',
      resizeMode: 'contain',
    },

    logo:{
      height: height / 10,
      width: width / 10,
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