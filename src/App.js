import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { MemoryRouter, Switch, Route, Link } from "react-router-dom";

const theme = createMuiTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MemoryRouter>
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
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
