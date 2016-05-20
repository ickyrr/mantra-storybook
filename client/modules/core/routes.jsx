import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import ContactUs from './components/contactus.jsx';
import AboutUs from './components/aboutus.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/contactus', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ContactUs />)
      });
    }
  });

  FlowRouter.route('/aboutus', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AboutUs />)
      });
    }
  });

}
