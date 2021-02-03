import "./index.scss";
import React from "react";
import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import logo from "../../../images/letter.png";
import Button from "../Button";
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  NavLink,
} from "react-router-dom";

function Header(loginState) {
  return (
    <header className="header">
      {/* <nav className="nav">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo-felix" />
        </Link>
        <Switch>
          <Route exact path="/login">
            {null}
          </Route>
          <Route exact path="/">
            <Button to="/login" size="big">
              Sign In
            </Button>
          </Route>
          <Route path="*">
            <Button to="/" size="big" onClick={() => localStorage.clear()}>
              Logout
            </Button>
          </Route>
        </Switch>
      </nav> */}
      <nav>
        <NavLink to="/">
          <img src={logo} className="header-logo" alt=""></img>
        </NavLink>
        {loginState.loginState ? (
          <NavLink to="/">
            <Button logout={loginState.setLoginState} size="big">
              Log Out
            </Button>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <Button size="big">Sign In</Button>
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default withRouter(Header);
