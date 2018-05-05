import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'stretch',
    color: 'white',
    backgroundColor: 'skyblue',
    textAlign: 'center',
    padding: 15,
  },
});

const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);
Title.propTypes = {
  children: PropTypes.string,
};
Title.defaultProps = {
  children: '',
};

export default Title;
