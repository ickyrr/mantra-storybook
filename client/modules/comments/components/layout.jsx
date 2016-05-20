import React from 'react';

const Layout = ({content = () => null }) => (
  <div>

  <nav className="navbar navbar-inverse navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Main</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="/comments">Home</a></li>
      </ul>
    </div>
  </nav>

    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
