import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Constants from 'expo-constants';

import { MovieContext } from '../../context/Context';
import MovieCard from './MovieCard';
