import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cardBackgroundColor } from '../../constants/colors';

export default function SearchNoResults() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Oops!</Text>
      <Text style={styles.text}>Looks like we didn't find any results for your search.</Text>
      <Text style={styles.text}>Please edit your search and try again!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  button: {
    marginVertical: 15,
    width: '60%'
  },
  container: {
    backgroundColor: cardBackgroundColor,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '90%'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  }
});
