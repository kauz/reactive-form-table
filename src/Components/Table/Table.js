import React, {Component} from 'react';
import './Table.scss';

class Table extends Component {

  render() {
    return (
      <table className={"Table"}>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Age</th>
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
