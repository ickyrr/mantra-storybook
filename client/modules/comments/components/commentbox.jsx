import React from 'react';

import CommentInput from "./commentinput.jsx";
import CommentList from "./commentlist.jsx";


export default class CommentBox extends React.Component {

    render() {

        return (

          <div className="detailBox">

              <div className="titleBox">
                <label>Comment Box ({this.props.comments.length} comments ) </label>

              </div>

              <div className="commentBox">
                <p className="taskDescription">
                  Mantrajs + Astronomy :D
                </p>
              </div>

              <div className="actionBox">
                <CommentList comments={this.props.comments} />
                <CommentInput clearError={this.props.clearError} errors={this.props.errors} sendMessage={this.props.hitMe}  />
              </div>

          </div>
        );

    }

}
