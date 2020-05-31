import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import  { Layout } from 'antd';

import routes from 'routes';
import Breadcrumbs from 'shared/Breadcrumbs';
import { getData } from "./api";

import './app.css';

const { Content } = Layout;

function App(history) {
  const [data, setData] = useState([]);
  const [isDataLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    getData().then(data => {
      setData(data);
      setLoadingStatus(false);
    });
  }, []);

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumbs isRegionPage={/\/region\//.test(history.location.pathname)}/>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              render={props => {
                const Component = route.component;
                return (
                  <Component
                    {...props}
                    data={data}
                    isDataLoading={isDataLoading}
                  />
                )
              }}
            />
          ))}
        </Switch>
      </Content>
    </Layout>
  );
}

export default withRouter(App);
