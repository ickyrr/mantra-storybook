import React from 'react';
import moment from 'moment';

class Contactmanage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const dataLists = [
        {message: 'Message 1', createdAt: new Date(), subject: "Service", email: "rod1@snapzio.com", mobile: "123"},
        {message: 'Message 2', createdAt: new Date(), subject: "Payment", email: "rod2@snapzio.com", mobile: "789"},
        {message: 'Message 3', createdAt: new Date(), subject: "Registration", email: "rod3@snapzio.com", mobile: "456"}
      ];

    return (
      <div className="container">
        <h2>Manage Contact Us</h2>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Message</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>CreatedAt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { dataLists.map( function (value, key) {

                  return (
                      <tr key={key}>
                        <td className="col-lg-5">{value.message}</td>
                        <td className="col-lg-5">{value.subject}</td>
                        <td className="col-lg-5">{value.email}</td>
                        <td className="col-lg-5">{value.mobile}</td>
                        <td className="col-lg-2">{moment(value.createdAt).calendar()}</td>
                        <td>
                        <button type="button" className="btn btn-primary">View</button> &nbsp;
                        <button type="button" className="btn btn-success">Update</button> &nbsp;
                        <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                  );
              })

            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contactmanage;
