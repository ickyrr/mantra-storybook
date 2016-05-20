import React from 'react';

const Layout = ({content = () => null }) => (
  <div>

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Payment</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/payment/paypal">Paypal</a></li>
          <li><a href="/payment/stripe">Stripe</a></li>
          <li><a href="/payment/creditcard">Credit Card</a></li>
        </ul>
      </div>
    </nav>

    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
