// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TripsPage from './containers/Trips/Page';
import TripsNewPage from './containers/Trips/NewPage';
import TripsShowPage from './containers/Trips/ShowPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="trips" component={TripsPage}>
      <Route path="new" component={TripsNewPage} />
      <Route path=":tripId" component={TripsShowPage} />
    </Route>
  </Route>
);
