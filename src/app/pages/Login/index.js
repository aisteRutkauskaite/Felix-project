import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./index.css";

import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(loginState, setLoginState) {
    super();
    this.state = {
      password: "",
      username: "",
      error: "",
    };
  }

  onSubmit = (e) => {
    const { password, username } = this.state;
    const { history } = this.props;

    e.preventDefault();

    fetch("https://academy-video-api.herokuapp.com/auth/login ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.status);
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        history.replace("/movies");
        // this.props.setLoginState(true);
        // this.props.history.replace("/movies");
        // history.replace need to do to go to next page
      })
      .catch((e) => {
        console.log(e);
        this.setState({ error: "Failure: please check the login details" });
      });
  };

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { error } = this.state;
    return (
      <article className="login-content">
        <section className="login-content-box">
          <form className="form-box" onSubmit={this.onSubmit}>
            <label className="login-label" for="username">
              Username
            </label>
            <Input
              id="username"
              className="login-input"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e, "username")}
            />
            <label className="login-label" for="password">
              Password
            </label>
            <Input
              id="password"
              label="password"
              className="login-input"
              type="password"
              placeholder="Password"
              onChange={(e) => this.handleChange(e, "password")}
            />
            {error && <p className="form__error">{error}</p>}
            <div className="login_button">
              <Button size="big" type="submit">
                Sign In
              </Button>
            </div>
          </form>
        </section>
      </article>
    );
  }
}

export default withRouter(Login);
