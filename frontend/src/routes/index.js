import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Sign from '~/pages/Sign';

import Lobby from '~/pages/Lobby';
import Arena from '~/pages/Arena';
import Room from '~/pages/Room';
import Profile from '~/pages/Profile';
import Checkout from '~/pages/Checkout';

import SRoom from '~/pages/SRoom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/lobby" exact component={Lobby} isPrivate />
      <Route path="/arena/:id" component={Arena} isPrivate />
      <Route path="/room/:slug" component={Room} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/sroom/:slug" component={SRoom} isPrivate />
      <Route path="/checkout" component={Checkout} isPrivate />

    </Switch>
  );
}
