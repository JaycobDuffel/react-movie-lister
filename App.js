import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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
