import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import { FilterContext, MovieContext } from './src/context/Context';

export default function App() {
  const [titleFilter, setTitleFilter] = useState('');
  const [movies, setMovies] = useState({});

  const getMovies = async (search) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=e8c6ff63`)
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    getMovies(titleFilter);
  }, [titleFilter])

  useEffect(() => {
    if (titleFilter.length < 3) {
      setMovies({});
    }
  }, [titleFilter])

  return (
    <SafeAreaView style={styles.container}>
      <FilterContext.Provider value={{ titleFilter, setTitleFilter }}>
        <SearchBar />
        <MovieContext.Provider value={{ movies, setMovies }} style={styles.movieList}>
          {titleFilter.length < 3 ? <SearchEmpty /> : !isObjectEmpty(movies) ? <MovieList /> : <SearchNoResults />}
        </MovieContext.Provider>
        <StatusBar style="auto" />
      </FilterContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
