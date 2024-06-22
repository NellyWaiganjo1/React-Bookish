import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='custom-navbar' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <h1 className='mt-1'>Bookish</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/library'>
                            Library
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink className='nav-link' to='about' smooth={true} duration={500}>
                            About
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <ScrollLink className='nav-link' to='contact' smooth={true} duration={500}>
                            Contact
                        </ScrollLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
