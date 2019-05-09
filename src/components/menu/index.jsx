import React, { Component } from 'react';
import style from './index.scss'


class Menu extends Component {
    render() {
        return (
            <div className={style.menuBar}>
                <ul>
                    <li className={style.active}>
                        <span >简介</span>
                    </li>
                    <li>
                        <span >项目</span>
                    </li>
                    <li>
                        <span >技术</span>
                    </li>
                    <li>
                        <span >杂谈</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu