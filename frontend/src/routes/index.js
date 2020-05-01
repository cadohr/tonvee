import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Sign from '~/pages/Sign';

import Lobby from '~/pages/Lobby';
import Arena from '~/pages/Arena';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/lobby" exact component={Lobby} isPrivate />
      <Route path="/arena/:id" component={Arena} isPrivate />
    </Switch>
  );
}
