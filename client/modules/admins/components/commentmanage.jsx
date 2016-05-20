import React from 'react';
import moment from 'moment';

class Commentmanage extends React.Component {

  constructor(props) {
    super(props);
  }

  removeComment(commentID, e) {

      e.preventDefault();

      this.props.removeComment(commentID);

  }

  render() {

    const myParent = this;

    return (
      <div className="container">
        <h2>Manage Comments</h2>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Comment</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.props.comments.map( function (value, key) {

              return (
                      <tr key={key}>
                        <td className="col-lg-5">{value.message}</td>
                        <td className="col-lg-2">{moment(value.createdAt).calendar()}</td>
                        <td>
                            <a href={'/admins/comment/view/' + value._id} className="btn btn-success">
                              Update
                            </a> &nbsp;
                            <a href="#" onClick={myParent.removeComment.bind(myParent, value._id)} className="btn btn-danger">
                                Remove
                            </a>
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

export default Commentmanage;
