import React, {Component} from 'react';
import './Main.scss';
import Form from "../Form/Form";
import Table from "../Table/Table";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      name: "",
      surname: "",
      phone: "",
      age: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getEntries();
  }

  handleSubmit(event) {
    let newEntry = {
      name: this.state.name,
      surname: this.state.surname,
      phone: this.state.phone,
      age: this.state.age,
    };

    this.createEntry(newEntry);
    this.storeEntryInLocalStorage(newEntry);
    event.preventDefault();
  }

  handleInput(event) {
    let input = event.target.id;
    let value = event.target.value;

    this.setState({[input]: value});
  }

  getEntries() {
    let entries;
    // let save = this.createEntry();

    if (localStorage.getItem('entries') === null) {
      entries = [];
    } else {
      entries = JSON.parse(localStorage.getItem('entries'));
    }

    this.setState({entries: entries});
    for (let i = 0; i < entries; i++) {
      this.createEntry(entries[i]);
    }
  }


  storeEntryInLocalStorage (entry) {
    let entries;

    if (localStorage.getItem('entries') === null) {
      entries = [];
    } else {
      entries = JSON.parse(localStorage.getItem('entries'));
    }

    entries.push(entry);

    localStorage.setItem('entries', JSON.stringify(entries));
  }

  createEntry(entry = null) {
    if (entry) this.state.entries.push(entry);
    this.setState({name: "", surname: "", phone: "", age: ""});
  }

  render() {
    return (
      <main className="Main">

        <Form
          name={this.state.name}
          surname={this.state.surname}
          phone={this.state.phone}
          age={this.state.age}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />

        <Table entries={this.state.entries}/>

      </main>
    );
  }
}

export default Main;
