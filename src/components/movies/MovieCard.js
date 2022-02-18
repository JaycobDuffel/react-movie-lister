import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import { cardBackgroundColor } from '../../constants/colors';
import MovieButton from './MovieButton';

export default function MovieCard({ movie }) {

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.poster}
          source={movie.Poster === 'N/A' ? require('../../../assets/missing_poster.jpeg') : { uri: movie.Poster }}
        />
      </View>
      <View style={styles.movieDetails}>
        <Text>{movie.Title}</Text>
        <Text>{movie.Year}</Text>
        <MovieButton title="Details" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: cardBackgroundColor,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    height: 300,
    justifyContent: 'space-evenly',
    marginVertical: 15,
    width: '95%'
  },
  movieDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '33%',
    height: '100%',
  },
  poster: {
    width: 187,
    height: 275,
  },
});