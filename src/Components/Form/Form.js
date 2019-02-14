import React, {Component, Fragment} from 'react';
import './Form.scss';
import Input from "../Input/Input";
import Button from "../Button/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.props.handleInput.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  render() {
    return (
      <Fragment>
        <form className={"Form"}>

          <Input name={"name"} displayText={"First Name"} error={this.props.errors.name} value={this.props.name} handler={this.handleInput}/>
          <Input name={"surname"} displayText={"Last Name"} error={this.props.errors.surname} value={this.props.surname} handler={this.handleInput}/>
          <Input name={"phone"} displayText={"Phone"} error={this.props.errors.phone} value={this.props.phone} handler={this.handleInput}/>
          <Input name={"age"} displayText={"Age"} error={this.props.errors.age} value={this.props.age} handler={this.handleInput}/>
          <Button displayText={"Submit"} handler={this.handleSubmit}/>

        </form>
      </Fragment>
    );
  }
}

export default Form;
