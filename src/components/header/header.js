import React, { useContext } from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import './header.scss';
import {ListContext} from '../setting/setting.js';
import { Link } from 'react-router-dom';

function Header(props) {
    const {incomplete}=useContext(ListContext);
    return (
        <>
            <Navbar className="bp3-navbar bp3-dark">
        <Navbar.Group>
          <Navbar.Heading>To Do List: {incomplete} items pending</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Divider />
          <Link to="/">
            <Button className="bp3-minimal" icon="home" text="Home" />
          </Link>
          </Navbar.Group>
          </Navbar>
        </>
    );
}

export default Header;

