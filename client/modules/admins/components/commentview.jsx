import React from 'react';

class Commentview extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {comment} = this.props;

    return (
      <div className="container">
          <form role="form" ref="commentForm">

            <label>comment ID </label>
            <span>{comment._id}</span>
            <br/>
            <label> Message </label>
            <input className="form-control" read-only ref="commentRef" type="text" defaultValue={comment.message} />
            <input type="submit" value="Update" className="btn btn-success" />
          </form>
      </div>

    );
  }
}

export default Commentview;
