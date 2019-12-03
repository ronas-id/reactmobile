import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import MoviesList from './components/MoviesList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Header title='Movies' />
        <MoviesList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
};