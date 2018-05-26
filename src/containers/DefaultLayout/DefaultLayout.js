import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import axios from 'axios';

import { jsonData } from '../../data/groups_102523307031776_23-05-2018-15-02-44.json';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
  constructor() {
    super();
    this.state = {
      fileName: "",
      data: []
    }
  }

  componentWillMount() {
    let url = "data/groups_102523307031776_23-05-2018-15-02-44.json";
    this.state.fileName = url;

    axios.get(url)
      .then(res => {
        const jsonData = res.data;
        this.setState({ data: jsonData });
      });
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader jsonfilePath={ this.state.fileName } />
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} data={ this.state.data }/>
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          {/* <AppAside fixed hidden>
            <DefaultAside />
          </AppAside> */}
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
