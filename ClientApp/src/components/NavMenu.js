import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import $ from 'jquery';


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
        $(window).on("scroll", () => {
            this.amountscrolled();
        });
    }

    amountscrolled = () => {
        var winheight = $(window).height();
        var docheight = $(document).height();
        var scrollTop = $(window).scrollTop();
        var trackLength = docheight - winheight;
        var pctScrolled = Math.floor(scrollTop / trackLength * 100); // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
        //console.log(pctScrolled + '% scrolled');
        this.setState({
            now: pctScrolled
        })
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
                        <NavbarBrand href="#first-image">Portfolio</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow go-right">
                                <a className="my-nav-link" href="#first-image">Personal Statement</a><div className="spacer my-nav-link"> | </div>
                                <a className="my-nav-link" href="#third-image">Contact Info</a><div className="spacer my-nav-link"> | </div>
                                <a className="my-nav-link" href="#fifth-image">Education and Experience</a><div className="spacer my-nav-link"> | </div>
                                <a className="my-nav-link" href="#seventh-image">Projects</a><div className="spacer my-nav-link"> | </div>
                                <a className="my-nav-link" href="#tenth-credits">About</a>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
                
            </header>
        );
    }
}
