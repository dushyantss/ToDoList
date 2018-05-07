/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import Title from './Title';
import Input from './Input';
import List from './List';
import Footer from './Footer';

const mapStateToProps = state => ({
  todos: state.todos,
});

const App = ({ todos }) => (
  <SafeAreaView style={styles.container}>
    <Title>Todo List</Title>
    <Input />
    <List todos={todos} />
    <Footer />
  </SafeAreaView>
);
App.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes
      .shape({
        id: PropTypes.number, text: PropTypes.string, isCompleted: PropTypes.bool,
      })).isRequired,
};

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
