import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Sign from '~/pages/Sign';

import Lobby from '~/pages/Lobby';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/lobby" exact component={Lobby} />
    </Switch>
  );
}
