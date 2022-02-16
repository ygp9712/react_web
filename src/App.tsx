import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input } from "antd"

function App() {
  return (
    <div className={styles.App}>
      <div>
        <Layout.Header>
          <img src={logo} />
          <Typography.Title level={3}>React旅游网</Typography.Title>
          <Input.Search placeholder='请输入旅游目的地、主题或关键字' />
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
