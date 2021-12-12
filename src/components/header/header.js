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
          
            <Button onClick={()=>location.href="https://ramizregat-todo-app.netlify.app/"} className="bp3-minimal" icon="home" text="Home" />
          
          </Navbar.Group>
          </Navbar>
        </>
    );
}

export default Header;

