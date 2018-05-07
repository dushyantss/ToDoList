import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

const List = ({ todos, onRemovePressed, toggleCompleted }) => (
  <ScrollView style={styles.list}>
    {todos.map(item => (
      <ListItem
        key={item.id}
        item={item}
        onRemovePressed={onRemovePressed}
        toggleCompleted={toggleCompleted}
      />
    ))}
  </ScrollView>
);
List.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes
      .shape({
        id: PropTypes.number, text: PropTypes.string, isCompleted: PropTypes.bool,
      })).isRequired,
  onRemovePressed: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default List;
