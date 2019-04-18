import React, { Component } from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class LoadingComponent extends Component {
    render() {
        return (<Spin indicator={antIcon} />)
    }
}

export default LoadingComponent

