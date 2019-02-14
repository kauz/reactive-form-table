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
        <tr>
          <td>Demo</td>
          <td>Demo</td>
          <td>Demo</td>
          <td>Demo</td>
        </tr>
        </tbody>

      </table>
    );
  }
}

export default Table;
