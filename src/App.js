import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/pages/Home';
import { createBrowserHistory as createHistory } from "history";
import $ from 'jquery';
import ProgressBar from 'react-bootstrap/ProgressBar';

import './custom.css'
const history = createHistory();

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            now: 0
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
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

    mouseMove = event => {
        const cursor = document.querySelector(".cursor");
        cursor.style.left = `${event.pageX}px`;
        cursor.style.top = `${event.pageY}px`;
        console.log("left: ", cursor.style.left);
        console.log("top: ", cursor.style.top);
    }

    render() {
        return (
            <Router
                onMouseMove={this.mouseMove}
                history={history}
            >
                <Layout>
                    <ProgressBar
                        className="toppest"
                        now={this.state.now}
                        label={`${this.state.now}%`}
                        animated={true}
                        srOnly
                        variant='success striped'
                    />
                    <Route exact path='/' component={Home} />
                </Layout>
            </Router>

        );
    }
}
