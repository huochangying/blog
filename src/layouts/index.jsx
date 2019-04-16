import React, { Component } from 'react';
import { Layout } from 'antd'
import styles from './index.scss';
import TitleImg from '../assets/img/cat.jpg';
import HeaderImg from '../assets/img/header.png';

const {
    Header, Footer, Content,
} = Layout;

class LayOut extends Component {
    render() {
        return (
            <Layout>
                <Header className={styles.header}>
                    <div className={styles.singnature}>
                    <img src={HeaderImg} alt=""/>
                    </div>
                    <div className={styles['profile-img']}>
                        <img src={TitleImg} alt="" />
                    </div>
                </Header>
                <Content>
                    Content
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default LayOut