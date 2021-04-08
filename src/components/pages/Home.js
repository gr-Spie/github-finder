import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from './components/users/Users';

export const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);
