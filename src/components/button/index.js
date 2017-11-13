import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  static propTypes = {
    label: PropTypes.string,
  };

  static defaultProps = {
    label: 'hello',
  };

  render() {
    const { label } = this.props;
    return <button style={{ fontSize: 20 }}>{label}</button>;
  }
}
