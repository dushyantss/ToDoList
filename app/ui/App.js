/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import { remove, toggleCompleted } from '../data/redux/actions';

import Title from './Title';
import Input from './Input';
import List from './List';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: (item) => { dispatch(remove(item)); },
  _toggleCompleted: (item) => { (dispatch(toggleCompleted(item))); },
});

const App = ({ todos, onRemovePressed, _toggleCompleted }) => (
  <SafeAreaView style={styles.container}>
    <Title>Todo List</Title>
    <Input />
    <List todos={todos} onRemovePressed={onRemovePressed} toggleCompleted={_toggleCompleted} />
    <Footer />
  </SafeAreaView>
);
App.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes
      .shape({
        id: PropTypes.number, text: PropTypes.string, isCompleted: PropTypes.bool,
      })).isRequired,
  onRemovePressed: PropTypes.func.isRequired,
  _toggleCompleted: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
