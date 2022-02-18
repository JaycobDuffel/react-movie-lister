import React, { useContext, forwardRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

import { FilterContext } from '../../context/Context';
import { searchBarBackgroundColor, searchBarTextColor } from '../../constants/colors';

export default SearchBar = forwardRef((props, ref) => {
  const { titleFilter, setTitleFilter } = useContext(FilterContext);

  return (
    <TextInput
      className="searchInput"
      id={titleFilter}
      onChangeText={text => setTitleFilter(text)}
      placeholder="Search by title..."
      placeholderTextColor={searchBarTextColor}
      style={styles.searchBar}
      type="text"
      value={titleFilter}
    ></TextInput>
  )
});
