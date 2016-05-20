import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';

import Component from '../components/commentbox.jsx';

export const composer = ({context, clearErrors, postId}, onData) => {

  const {Models, LocalState} = context();

  const comments = Models.Comment.find().fetch();

  onData(null, {
    comments,
    errors: LocalState.get('SAVING_ERRORS')
  });

};

export const depsMapper = (context, actions) => (
  {
    hitMe: actions.Comment.hitMe,
    clearError: actions.Comment.clearError,
    context: () => context
  }
);

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
