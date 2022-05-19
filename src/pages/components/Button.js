import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button() {
  function handleAddNewSkill() {
    return null
  }
  
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>
        Add
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
})