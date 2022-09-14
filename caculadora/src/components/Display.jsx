import React from 'react';
import './Display.css';

class Display extends React.Component {
  render() {
    return (
        <p>{this.props.value}</p>
    )
  }
}

export default Display;