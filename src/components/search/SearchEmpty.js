import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { cardBackgroundColor } from '../../constants/colors';

export default function SearchEmpty() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Use the search bar to find your favorite movies!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: cardBackgroundColor,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 125,
    width: '90%'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  }
});
