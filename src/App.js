import React from 'react';
import {Provider} from 'react-redux';
import './App.css';

import { store } from "./store/store";
import { Layout } from "antd";
import VideoList from "./components/VideoList";
import HeaderMenu from "./components/HeaderMenu";

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout hasSider="true" className="app-wrapper">
        <div className="header">
            <HeaderMenu />
        </div>
        <Content>
            <VideoList />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
