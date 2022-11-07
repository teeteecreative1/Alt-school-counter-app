import React from "react";
import { Component } from "react";

class ErrorBoundary extends Component {
  // this initialises variables in a state
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  //catches error in any component
  componentDidCatch(error, errorInfo) {
    console.log("logging", error, errorInfo);
  }

  //to render component wherever it is called
  render() {
    if (this.state.hasError) {
      return (
        <h1 className="error">
          An error Ocurred!! Please click
          <a className="back" href="Home">
            Here
          </a>
          to go back to the home page.
        </h1>
      );
    }
    //return this when no error is found
    return this.props.children;
  }
}

export default ErrorBoundary;
