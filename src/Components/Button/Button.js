import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <div className={"Form-Control"}>
        <button id={this.props.displayText} type="submit" onClick={this.props.handler}>Submit</button>
      </div>
    );
  }
}

export default Button;
