import "./index.scss";

import { useState } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import MoviesPage from "./pages/MoviesPage";

import Footer from "./components/Footer";
import Movies from "./components/Movies";
import PrivateRoute from "./components/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loginState, setLoginState] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [selectMovie, useSelectMovie] = useState("ass");

  console.log(selectMovie);
  return (
    <div className="App">
      <Router>
        <Header loginState={loginState} setLoginState={setLoginState} />

        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route exact path="/login">
            <Login loginState={loginState} setLoginState={setLoginState} />
          </Route>

          <PrivateRoute exact path="/movies">
            <MoviesPage movie={selectMovie} loginState={loginState} />
          </PrivateRoute>

          <PrivateRoute exact path="/movies/:id"></PrivateRoute>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
