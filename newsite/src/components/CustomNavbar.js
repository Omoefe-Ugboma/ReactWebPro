import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './CustomNavbar.css';


class HeaderNav extends Component {
  render() {
    return (
            <div className="App">
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">LifeCode With Omoefe</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active">
      <Link to="/" className="nav-item r-item">Home</Link></li>
      <li className="dropdown1">
      <Link to="/about" className="nav-item r-item">About</Link></li>
      <li><Link to="/news" className="nav-item r-item">News</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>

      </div>
    );
  }
}
export default HeaderNav;
