import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ onPress, title }) => {
    return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      width: 100,
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
  export default Button;
  