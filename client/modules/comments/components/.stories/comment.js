import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CommentBox from '../commentbox.jsx';
import CommentInput from "../commentinput.jsx";
import CommentList from "../commentlist.jsx";

/**
 * Defining 'stories' for Comment
 */
storiesOf('Comments', module)
  .add('Comment Box ', () => (

    <CommentBox />
  ))
  .add('Comment Input', () => (

    <div className="container">
      <br />
      <br />
      <CommentInput />
    </div>

  ))
  .add('Comment List', () => (

    <div className="container">
      <br />
      <br />
      <CommentList />
    </div>

  ))
;
