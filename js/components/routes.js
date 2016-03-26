/**
 * Created by krelix on 26/03/2016.
 */

import React from 'react';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './main'
import About from './content/about';
import Contact from './content/contact';
import ProjectList from './content/project_list';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={ProjectList}/>
        </Route>
      </Router>
    );
  }
}