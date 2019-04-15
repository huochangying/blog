import React, { Component } from 'react';
import { Layout } from 'antd'
import styles from './index.scss';

const {
    Header, Footer, Content,
} = Layout;

class LayOut extends Component {
    render() {
        return (
            <Layout>
                <Header >Header</Header>
                <Content className={styles.height}>
                    Content
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default LayOut