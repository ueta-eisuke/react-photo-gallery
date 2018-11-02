import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,  Container } from 'reactstrap';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  toggleNavbar = ()  => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <Navbar fixed="top" color="dark" dark>
        <Container>
          <NavbarBrand className="text-ghost" href="https://kace-study.github.io/react-photo-gallery/">KACE GALLERY</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://twitter.com/ace_tech_note?lang=ja">Twitter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/kace-study/react-photo-gallery">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
