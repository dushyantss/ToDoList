/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Title from './Title';
import Footer from './Footer';
import Input from './Input';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Title>Todo List</Title>
    <Input />
    <View style={styles.dummy} />
    <Footer />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  dummy: {
    flex: 1,
  },
});
