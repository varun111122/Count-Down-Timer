import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ReusableButton = ({ title, onPress, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin : 5
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ReusableButton;


// ...props 