// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TripsPage from './containers/Trips/TripsPage';
import TripsViewPage from './containers/Trips/ViewPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="trips" component={TripsPage}>
      <Route path=":tripId" component={TripsViewPage} />
    </Route>
  </Route>
);
