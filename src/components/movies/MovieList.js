import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Constants from 'expo-constants';

import { MovieContext } from '../../context/Context';
import MovieCard from './MovieCard';

export default function MovieList() {
  const { movies } = useContext(MovieContext);
  const renderItem = ({ item }) => (
    <MovieCard movie={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.imdbID}${index}`}
        contentContainerStyle={styles.flatList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: Constants.statusBarHeight + 30,
  },
  flatList: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});