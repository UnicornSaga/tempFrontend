import React, { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { increment, decrement, incrementByAmount } from '../../redux/reducers/exampleSlice';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import './Home.scss';

import { getMessage } from '../../utils/api';
import { isAuthenticated } from '../../utils/auth';

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#61dafb',
  },
}));

export const Home: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const classes = useStyles();

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const queryBackend = async () => {
    try {
      const message = await getMessage();
      setMessage(message);
    } catch (err) {
      setError(String(err));
    }
  };

  return (
    <>
      {!message && !error && (
        <Link className={classes.link} to="#" onClick={() => queryBackend()}>
          Click to make request to backend
        </Link>
      )}
      {message && (
        <p>
          <code>{message}</code>
        </p>
      )}
      {error && (
        <p>
          Error: <code>{error}</code>
        </p>
      )}
      <Link className={classes.link} to="/admin">
        Admin Dashboard
      </Link>
      <Link className={classes.link} to="/jobDetail">
        Job Detail
      </Link>
      <Link className={classes.link} to="/addInfo">
        Add Info
      </Link>
      <Link className={classes.link} to="/position">
        Position
      </Link>
      {isAuthenticated() ? (
        <a className={classes.link} href="/logout">
          Logout
        </a>
      ) : (
        <>
          <Link className={classes.link} to="/login">
            Login
          </Link>
          <Link className={classes.link} to="/signup">
            Sign Up
          </Link>
        </>
      )}

      {/* Example counter using Redux */}
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>
      </div>
    </>
  );
};
