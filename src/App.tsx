import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Login, { UserCredentials } from "./pages/Login";

import "./App.css";
import Posts from "./pages/Posts";
import { postLoginUser } from "./utils/apiClient";

export type User = {
  id: number;
  username: string;
  password: string;
  bio?: string;
};

function App() {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const history = useHistory();

  function loginUser(userCreds: UserCredentials) {
    postLoginUser(userCreds).then(user => {
      setLoggedUser(user);
      history.push("/");
    });
  }

  function clearUserState(data: null) {
    setLoggedUser(data);
  }

  return (
    <>
      <Header loggedUser={loggedUser} clearUserState={clearUserState} />
      <main>
        <Switch>
          <Route path="/login">
            <Login handleSubmit={loginUser} />
          </Route>
          <Route path="/">
            {loggedUser ? <Posts /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
