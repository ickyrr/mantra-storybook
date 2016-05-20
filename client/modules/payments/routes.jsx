import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';

import Home from './components/home.jsx';
import Paypal from './components/paypal.jsx';
import Stripe from './components/stripe.jsx';
import Creditcard from './components/creditcard.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/payments', {
    name: 'payments',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/payment/paypal', {
    name: 'payments',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Paypal />)
      });
    }
  });

  FlowRouter.route('/payment/stripe', {
    name: 'payments',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Stripe />)
      });
    }
  });

  FlowRouter.route('/payment/creditcard', {
    name: 'payments',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Creditcard />)
      });
    }
  });

}
