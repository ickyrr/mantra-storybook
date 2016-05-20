import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/layout.jsx';

import Home from './components/home.jsx';
import CommentManage from './containers/commentmanage.js';
import CommentView from './containers/commentview.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/admins', {
    name: 'Admins',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/admins/comments', {
    name: 'Admins-Comments',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CommentManage />)
      });
    }
  });


  FlowRouter.route('/admins/comment/view/:commentID', {
      name: 'admins.comment.view',
      action() {

        mount(MainLayoutCtx, {
          content: () => (<CommentView />)
        });
      }
  });


}
