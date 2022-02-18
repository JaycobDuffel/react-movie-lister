import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import { isObjectEmpty } from './src/helpers/isObjectEmpty';
import { FilterContext, MovieContext } from './src/context/Context';
import SearchBar from './src/components/search/SearchBar';
import SearchEmpty from './src/components/search/SearchEmpty';
import SearchNoResults from './src/components/search/SearchNoResults';
import MovieList from './src/components/movies/MovieList';
import { mainBackgroundColor } from './src/constants/colors';


export default function App() {
  const [titleFilter, setTitleFilter] = useState('');
  const [movies, setMovies] = useState({});
  const [noMovies, setNoMovies] = useState(false);

  const getMovies = async (search) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=e8c6ff63`)
    const data = await response.json();

    if (data.Response === "False") {
      setMovies({});
      setNoMovies(true);
    }
    if (data.Search) {
      setMovies(data.Search);
      setNoMovies(false);
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
    display: 'flex',
    backgroundColor: mainBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
