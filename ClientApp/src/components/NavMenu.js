import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            elements: []
        };
    }

    componentDidMount = () => {
        this.setState({
            elements: [
                document.getElementById("first-image"),
                document.getElementById("second-statement"),
                document.getElementById("third-image"),
                document.getElementById("fourth-contact"),
                document.getElementById("fifth-image"),
                document.getElementById("sixth-education"),
                document.getElementById("seventh-image"),
                document.getElementById("eighth-projects"),
                document.getElementById("ninth-image")
            ]
        });
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="topNav navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Portfolio</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow go-right">
                                <a href="#first-image">Personal Statement</a><div className="spacer"> | </div>
                                <a href="#third-image">Contact Info</a><div className="spacer"> | </div>
                                <a href="#fifth-image">Education and Experience</a><div className="spacer"> | </div>
                                <a href="#seventh-image">Projects</a>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
