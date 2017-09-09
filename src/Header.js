/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Seqbook
        </Link>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
