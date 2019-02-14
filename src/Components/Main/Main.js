import React, { Component } from 'react';
import './Main.scss';
import Form from "../Form/Form";
import Table from "../Table/Table";

class Main extends Component {

  render() {
    return (
      <main className="Main">
        <Form/>
        <Table/>
      </main>
    );
  }
}

export default Main;
