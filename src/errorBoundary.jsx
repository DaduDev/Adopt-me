import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getStateDerivedFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error Caught", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There is an Error. <Link to="\">Click here to go to homepage</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
