import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Style from './index.sass'
const dog = {
    name: '大黄',
    age: 3,
    gender: '熊'
}


class Dog extends Component {
    render() {
        return (<div className={Style.div}>123<div> {JSON.stringify({...dog})}</div></div>);
    }
}

export default Dog