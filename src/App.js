import React from 'react';
import {Provider} from 'react-redux';
import './App.css';

import { store } from "./store/store";
import {Layout} from "antd";
import VideoList from "./components/VideoList";
import HeaderMenu from "./components/HeaderMenu";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import VideoPage from "./components/VideoPage";

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Layout className="app-wrapper">
            <div className="header">
                <HeaderMenu />
            </div>
            <Content>
                <Switch>
                    <Route path="/video/:videoId">
                        <VideoPage />
                    </Route>
                    <Route path="/">
                        <VideoList />
                    </Route>
                </Switch>
            </Content>
          </Layout>
        </Router>
    </Provider>
  );
}

export default App;
