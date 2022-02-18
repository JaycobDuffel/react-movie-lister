import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { cardButtonBackgroundColor } from '../../constants/colors';

export default function MovieButton({ title, style, onPress }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: cardButtonBackgroundColor,
    borderRadius: 20,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    padding: 5,
    width: '100%',
  },
});