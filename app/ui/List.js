import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { ListItem } from './ListItem';

const styles = StyleSheet.create({
  dummy: {
    flex: 1,
  },
});

const List = ({ todos }) => (
  <View style={styles.dummy} />
);
List.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes
      .shape({
        id: PropTypes.number, text: PropTypes.string, isCompleted: PropTypes.bool,
      })).isRequired,
};

export default List;
