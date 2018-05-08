import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import CheckBox from './CheckBox';
import closeIcon from '../../resources/icons/ic_close.png';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  itemSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EAEAEA',
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  image: {
    width: 16,
    height: 16,
    padding: 8,
    marginStart: 16,
    marginEnd: 16,
  },
});

const ListItem = ({ item, onRemovePressed, toggleCompleted }) => {
  this.toggleCompleted = () => toggleCompleted(item);
  this.onRemovePressed = () => onRemovePressed(item);

  const { text, isCompleted } = item;
  return (
    <View style={isCompleted ? styles.itemSelected : styles.item}>
      <Text style={styles.text}>{text}</Text>
      <CheckBox checked={isCompleted} onPress={this.toggleCompleted} />
      <TouchableOpacity onPress={this.onRemovePressed}>
        <Image style={styles.image} source={closeIcon} />
      </TouchableOpacity>
    </View>
  );
};
ListItem.propTypes = {
  item: PropTypes.shape().isRequired,
  onRemovePressed: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default ListItem;

