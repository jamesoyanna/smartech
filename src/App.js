import React, { Component } from "react";
//import routes from "./routes";
import Layout from "./Layout/Layout";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/pe-icon-7.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    render() {
        return (
          <React.Fragment>
          <Router>
            <Switch>
              <Route path='/' component={Layout}  />
            </Switch>
          </Router>
        </React.Fragment>
      );
    }
  }
  
  export default withRouter(App);