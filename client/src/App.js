//
//  Main React application
//
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { AppBar } from "@material-ui/core";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Receiving from "./pages/Receiving";
import PutAway from "./pages/PutAway";
import Picking from "./pages/Picking";
import PickingData from "./pages/PickingData";
import Dispatch from "./pages/Dispatch";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer";
import Tasks from "./pages/Tasks";
import TaskData from "./pages/TaskData";

import Auth from "./utils/auth";
import LoginForm from "../src/components/SignInForm";

import {
  createTheme,
  ThemeProvider,
  Button,
  CssBaseline,
} from "@material-ui/core";

const theme = createTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
  palette: {
    primary: {
      light: "#ed4b82",
      main: "#e91e63",
      dark: "#a31545",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33eaff",
      main: "#00e5ff",
      dark: "#00a0b2",
      contrastText: "#000",
    },
    trio: {
      light: "#fce4ec",
      main: "#84ffff",
      dark: "#bdbdbd",
      contrastText: "#000",
    },
  },
});

// Construct the main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct the middleware that will be attached to the JWT token in every request as an authorization header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set the client to execute the authLink middleware prior to making the request to the GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const renderLogin = () => {
  if (Auth.loggedIn()) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/tasks" component={TaskData} />
          <Route exact path="/picking" component={PickingData} />
          {/* <Route exact path="/receiving" component={Receiving} />
      <Route exact path="/putaway" component={PutAway} />
      <Route exact path="/dispatch" component={Dispatch} /> */}
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
        <Footer />
      </>
    );
  } else {
    return (
      <AppBar>
        <LoginForm />
      </AppBar>
    );
  }
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>{renderLogin()}</ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
