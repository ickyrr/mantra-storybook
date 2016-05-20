import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/layout.jsx';
import Comment from './containers/comment.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/comments', {
    name: 'Comments',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Comment />)
      });
    }
  });
}
