import React, { Component, useState } from 'react';
import $ from 'jquery';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: ""
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount = () => {
        // mounting schtuff
    }
    onChange = event => {
        const target = event.target;
        const eventName = target.name;
        const value = target.value;

        // changing schtuff
    }
    onSubmit = event => {
        // submitting schtuff
    }
}