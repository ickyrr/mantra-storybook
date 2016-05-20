import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

/* load component */
import Commentmanage from '../components/commentmanage.jsx';

export const composer = ({context}, onData) => {

  const {Models, Meteor} = context();

  const comments = Models.Comment.find().fetch();

  onData(null, {
    comments
  });

};

export const depsMapper = (context, actions) => ({
  removeComment: actions.CommentAdmin.removeComment,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Commentmanage);
