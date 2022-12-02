// router

import React from 'react';
import Dashboard from './Dashborad';
import Slido from './Slido';
import Blanko from './Blanko';
import Tetro from './Tetro';

import {
    //BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    //Redirect,
  } from "react-router-dom";

  function Site() {
    return (
      <div>
        <Switch>
          <Route path='/blanko'>
            <Blanko />
          </Route>
          <Route path='/slido'>
            <Slido />
          </Route>
          <Route path='/tetro'>
            <Tetro />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    )
  }

  export default Site;