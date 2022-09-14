import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
        <button className={`
          button
          ${this.props.operation ? 'opration' : ''}
          ${this.props.double ? 'double' : ''}
          ${this.props.triple ? 'triple' : ''}
        `}
        onClick={ e => this.props.click && this.props.click(this.props.label)}
        >
          { this.props.label }
        </button>
    )
  }
}

export default Button;

