import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <div className={"Form-Control"}>
        <label htmlFor={this.props.name}>{this.props.displayText}</label>
        <input name={this.props.name} id={this.props.name} type="text" value={this.props.value} onChange={this.props.handler}/>
      </div>
    );
  }
}

export default Input;
