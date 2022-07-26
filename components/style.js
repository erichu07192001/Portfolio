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
      backgroundColor: 'gray'
    },
  
    title:{
      fontSize: 64,
      fontWeight: 'bold',
    },

    subtitle:{
      fontSize: 32,
      fontWeight: 'bold',
    },
  
    text:{
      fontSize: 24,
    },

    label:{
      fontSize: 16,
      textAlign: 'center',
      color: 'blue'
    },
  
    pic: {
      width: imageWidth / 3,
      height: imageHeight / 2,
      borderRadius: 1000,
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
      
      // backgroundColor: '#add8e6',
      // borderWidth: 1,
      // borderColor: 'black',
      justifyContent: 'space-evenly',
    }
  });

  

  export default styles;