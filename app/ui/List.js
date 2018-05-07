import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import Reactotron from 'reactotron-react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

const List = ({ todos, onRemovePressed, toggleCompleted }) => {
  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      onRemovePressed={onRemovePressed}
      toggleCompleted={toggleCompleted}
    />
  );
  renderItem.propTypes = {
    item: PropTypes.shape().isRequired,
  };

  Reactotron.log(`todos ${todos}`);

  return (
    <FlatList
      style={styles.list}
      renderItem={renderItem}
      data={todos}
      keyExtractor={item => `${item.id}`}
    />
  );
};
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
