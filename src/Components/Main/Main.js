import React, {Component} from 'react';
import './Main.scss';
import Form from "../Form/Form";
import Table from "../Table/Table";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      errors: {name: "name is required.", surname: "surname is required.", phone: "phone is required.", age: "age is required."},
      name: "",
      surname: "",
      phone: "",
      age: ""
    };

    this.baseState = this.state;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  componentDidMount() {
    this.getEntries();
  }

  handleSubmit(event) {
    event.preventDefault();
    let errors =  Object.values(this.state.errors);

    for (let i = 0; i < errors.length; i++) {
      if (this.state.name.length === 0
        || this.state.surname.length === 0
        || this.state.phone.length === 0
        || this.state.age.length === 0
        || errors[i].length > 0) return
    }

    let newEntry = {
      name: this.state.name,
      surname: this.state.surname,
      phone: this.state.phone,
      age: this.state.age,
    };

    this.createEntry(newEntry);
    this.storeEntryInLocalStorage(newEntry);
    this.setState({errors: this.baseState.errors});
  }

  handleInput(event) {
    let name = event.target.id;
    let value = event.target.value;
    event.target.className = "Form-Input";

    if (name === "age") {
      this.handleNumber(name, value)
    } else {
      this.handleString(name, value)
    }

    this.setState({[name]: value});
  }

  handleNumber(name, num) {
    let errors = this.state.errors;

    if (isNaN(parseInt(num))) {
      errors[name] = `${name} must be a number.`;
    } else {
      errors[name] = ``;
    }

    this.setState({errors: errors});
  }

  handleString(name, str) {
    let errors = this.state.errors;

    if (str.trim().length < 1) {
      errors[name] = `${name} is required.`;
    } else {
      errors[name] = ``;
    }

    this.setState({errors: errors});
  }

  getEntries() {
    let entries;

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

  onSort(event, sortKey){

    const data = this.state.entries;
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({entries: data})
  }

  render() {
    return (
      <main className="Main">

        <Form
          errors={this.state.errors}
          name={this.state.name}
          surname={this.state.surname}
          phone={this.state.phone}
          age={this.state.age}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />

        <Table
          onSort={this.onSort}
          entries={this.state.entries}
        />

      </main>
    );
  }
}

export default Main;
