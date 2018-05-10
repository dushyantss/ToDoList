import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import checkedIcon from '../../resources/icons/ic_check_box.png';
import uncheckedIcon from '../../resources/icons/ic_check_box_outline_blank.png';

const styles = StyleSheet.create({
  image: {
    width: 16,
    height: 16,
    padding: 8,
    marginStart: 16,
    marginEnd: 16,
  },
});

const CheckBox = ({ checked, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={styles.image} source={checked ? checkedIcon : uncheckedIcon} />
  </TouchableOpacity>
);
CheckBox.propTypes = {
  checked: PropTypes.bool,
  onPress: PropTypes.func,
};
CheckBox.defaultProps = {
  checked: false,
  onPress: () => { },
};

export default CheckBox;
