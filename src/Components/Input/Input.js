import React, { Component } from 'react';

class Input extends Component {


  errorHandler(event) {
    if (event.target.dataset.error) {
      event.target.className = "Form-Input Form-Input_Error";
    }
  }

  render() {
    return (
      <div className={"Form-Control"}>
        <label htmlFor={this.props.name}>{this.props.displayText}</label>
        <input className={"Form-Input"} name={this.props.name} id={this.props.name} type="text" data-error={this.props.error} value={this.props.value} onBlur={this.errorHandler} onChange={this.props.handler}/>
        <p className={"Form-Error"}>{this.props.error}</p>
      </div>
    );
  }
}

export default Input;
