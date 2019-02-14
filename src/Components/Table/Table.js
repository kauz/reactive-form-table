import React, {Component} from 'react';
import './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    this.onSort = this.props.onSort;
  };

  render() {
    return (
      <table className={"Table"}>
        <thead>
        <tr>
          <th onClick={(e) => this.onSort(e, "name")}>First Name</th>
          <th onClick={(e) => this.onSort(e, "surname")}>Last Name</th>
          <th onClick={(e) => this.onSort(e, "phone")}>Phone</th>
          <th onClick={(e) => this.onSort(e, "age")}>Age</th>
        </tr>

        </thead>
        <tbody>
        {this.props.entries.map((entry, i) => {
          return (
            <tr key={i}>
              <td>{entry.name}</td>
              <td>{entry.surname}</td>
              <td>{entry.phone}</td>
              <td>{entry.age}</td>
            </tr>);
        })}

        </tbody>

      </table>
    );
  }
}

export default Table;
