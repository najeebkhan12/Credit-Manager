import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {

  render() {
    const clients = [{
      id: '123',
      firstName: 'Sajid',
      lastName: 'Khan',
      email: 'sajid@techscape.pk',
      phone:'111-111-1111',
      balance: '150'
    }];

    if ( clients ) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2> <i className="fa fa-users"></i> Clients</h2>
            </div>
            <div className="col-md-6">

            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                clients.map( client => (
                  <tr key={ client.id }>
                    <td> { client.firstName } { client.lastName } </td>
                    <td> { client.email } </td>
                    <td> { client.balance } </td>
                    <td> 
                      <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                        <i className="fa fa-arrow-circle-right"></i> Details  
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          <h1> Loading.. </h1>
        </div>
      )
    }

    
  }
}

export default Clients;
