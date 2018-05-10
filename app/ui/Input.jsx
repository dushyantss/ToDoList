import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { add } from '../data/redux/actions';

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});

class Input extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  onChangeText = text => this.setState({ text })

  onSubmitEditing = () => {
    const { text } = this.state;
    if (!text) return;
    this.props.dispatch(add(text));
    this.setState({ text: '' });
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        value={this.state.text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        placeholder={this.props.placeholder}
      />
    );
  }
}
Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  placeholder: 'Enter an item!',
};

export default connect()(Input);
