import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MyLoadable from '../../utils/loadable'

import style from './index.scss'


const Menu = MyLoadable({ loader: () => import( /* webpackChunkName: "menu" */ '../../components/menu') })
class Home extends Component {
    render() {
        return (
            <div className={style.container}>
                <Menu />
                <Row>
                    <Col className={style.information} span={20} offset={2}>Chay / 1992 / 前端开发</Col>
                </Row>
            </div>
        );
    }
}

export default Home