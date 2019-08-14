import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { clickLogin, clickRegister } from "../redux/actions/userauthAction";
import ReactDOM from "react-dom";

class UserAuth extends Component {

  loginButton = () => {
    this.props.clickLogin();
    console.log("clicked login");
    
  };

  registerButton = () => {
    this.props.clickRegister();
    console.log("clicked register");
  };

  componentDidMount() {
    console.log(this.props.login);
  }

  render() {
    let { login, register } = this.props;
    console.log(login);
    return (
      <div className="userAuth">
        {(login && <Link to={"/login"}></Link> ) || (
          <Button id="loginButton" onClick={this.loginButton}>
            Login
            <Link to={"/login"}></Link>
          </Button>
        )}
        {register || (
          <Button id="registerButton" onClick={this.registerButton}>
            Register
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { login, register } = state.userauthReducer;
  return {
    login,
    register
  };
};

const mapDispatchToProps = {
  clickLogin,
  clickRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserAuth));
