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
