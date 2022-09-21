import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import { Home, Login, JobDetail, AddInfo, Position } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

export const Routes: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>

      <div className={classes.app}>
        <header className={classes.header}>
          <Route path="/login" component={Login} />
          <Route
            path="/logout"
            render={() => {
              logout();
              history.push('/');
              return null;
            }}
          />
          <Route exact path="/" component={Home} />
          <Route path="/jobDetail" component={JobDetail} />
          <Route path="/addInfo" component={AddInfo} />
          <Route path="/position" component={Position} />
        </header>
      </div>
    </Switch>
  );
};