import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
  <nav className="navbar navbar-inverse navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Pukangkang</a>
      </div>
      <ul className="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/contactus">Contact Us</a></li>
        <li><a href="/comments">Comments</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Payments
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="/payments/paypal">Paypal</a></li>
            <li><a href="/payments/stripe">Stripe</a></li>
            <li><a href="/payments/creditcard">Credit Card</a></li>
          </ul>
        </li>
        <li><a href="/admins">Admins</a></li>
      </ul>
    </div>
  </nav>
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
