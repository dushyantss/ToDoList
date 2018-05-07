import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { removeCompleted } from '../data/redux/actions';

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgb(204,204,204)',
    padding: 15,
  },
  button: {
    color: 'rgb(206,102,103)',
    textAlign: 'center',
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  removeCompletedProp: () => dispatch(removeCompleted()),
});

const Footer = ({ removeCompletedProp }) => (
  <TouchableOpacity
    style={styles.footer}
    onPress={removeCompletedProp}
  >
    <Text style={styles.button}>Remove completed items</Text>
  </TouchableOpacity>
);
Footer.propTypes = {
  removeCompletedProp: PropTypes.func.isRequired,
};

const ExportedFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default ExportedFooter;
