import React from 'react';
import _ from 'underscore';

export default class CommentInput extends React.Component {

  sendMessage(e) {

    e.preventDefault();

    this.props.clearError();
    this.props.sendMessage(this.refs.commentRef.value.trim());

    this.refs.commentForm.reset();

  }


  _renderErrors(errors) {

    return (
      <div>
        {_.pluck(errors, 'message').map(function(errorMessage, key){
            return (
              <div className="alert alert-danger" key={key}>
                  <b>{errorMessage}!</b>
              </div>
            );
        })}
      </div>
    );

  }

  render() {

    const {errors} = this.props;

    return (
      <form role="form" ref="commentForm" onSubmit={this.sendMessage.bind(this)}>

        <div>
          { (errors) ? this._renderErrors(errors) : null}
        </div>

          <input className="form-control" ref="commentRef" type="text" multiple="true"
              placeholder="Your comments" />

          <span className="font-italic small">
            <strong>Limitation(s):</strong>
            <ul>
                <li> Message limit from 6 to 30 characters. </li>
                <li> Alphanumeric Only </li>
            </ul>

          </span>

      </form>

    );

  }

}
