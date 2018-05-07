import React from 'react';
import { View, Text, Switch, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({ item, onRemovePressed, onValueChange }) => {
  const { text, isCompleted } = item;
  return (
    <View>
      <Text>{text}</Text>
      <Switch value={isCompleted} onValueChange={onValueChange(item)} />
      <TouchableOpacity onPress={onRemovePressed(item)}>
        <Image source={{ uri: '../../resources/icons/ic_close.png' }} />
      </TouchableOpacity>
    </View>
  );
};
ListItem.propTypes = {
  item: PropTypes.shape().isRequired,
  onRemovePressed: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default ListItem;

