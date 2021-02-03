import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/pages/Home';
import { createBrowserHistory as createHistory } from "history";

import './custom.css'
const history = createHistory();

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router history={history}>
                <Layout>
                    <Route exact path='/' component={Home} />
                </Layout>
            </Router>

        );
    }
}
