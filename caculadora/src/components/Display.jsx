import React from 'react';
import './Display.css';

class Display extends React.Component {
  render() {
    return (
        <p className="display">{this.props.value}</p>
    )
  }
}

export default Display;