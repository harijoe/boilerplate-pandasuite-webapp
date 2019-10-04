import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { MemoryRouter, Switch, Route, Link } from 'react-router-dom';

const theme = createMuiTheme({});

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    background: 'red',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MemoryRouter>
        <div className={classes.wrapper}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <p>about</p>
            </Route>
            <Route path="/users">
              <p>users</p>
            </Route>
            <Route path="/">
              <p>home</p>
            </Route>
          </Switch>
        </div>
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
