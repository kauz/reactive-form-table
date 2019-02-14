import React, {Component, Fragment} from 'react';
import './Form.scss';

class Form extends Component {


  handleSubmit() {
    console.log("Submit!")
  }

  render() {
    return (
      <Fragment>
        <form className={"Form"}>

          <div className={"Form-Control"}>
            <label htmlFor="name">First Name</label>
            <input name={'name'} id={'name'} type="text"/>
          </div>

          <div className={"Form-Control"}>
            <label htmlFor="surname">Last Name</label>
            <input name={'surname'} id={'surname'} type="text"/>
          </div>

          <div className={"Form-Control"}>
            <label htmlFor="phone">Phone</label>
            <input name={'phone'} id={'phone'} type="text"/>
          </div>

          <div className={"Form-Control"}>
            <label htmlFor="age">Age</label>
            <input name={'age'} id={'age'} type="number"/>
          </div>

          <div className={"Form-Control"}>
            <button id={'submit'} type="button" onClick={this.handleSubmit}>Submit</button>
          </div>

        </form>
      </Fragment>
    );
  }
}

export default Form;
