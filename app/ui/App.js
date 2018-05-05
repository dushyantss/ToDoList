/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Title from './Title';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Title>Todo List</Title>
    <View style={styles.dummy} />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  dummy: {
    flex: 1,
  },
});
