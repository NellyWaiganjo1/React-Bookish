import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm.trim()); // Call onSearch with trimmed searchTerm
    };

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
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 d-flex"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
                    />
                    <Button className="form-button" variant="outline-success" onClick={handleSearch}>
                        Search
                    </Button>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
