import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Commentview from '../components/commentview.jsx';

export const composer = ({context}, onData) => {

    const {Models} = context();

  const filters = {
    _id: 'ASoT5DRZfuFjBiarE'
  };
  const activeComment = Models.Comment.find(filters).fetch();


  onData(null, { comment: activeComment[0] });

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Commentview);
