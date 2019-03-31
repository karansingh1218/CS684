import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute"
// import Footer from "./containers/Footer";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
// import Register from "./containers/Register";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;


// export default () =>
//   <Switch>
//     <Route path="/" exact component={Home} />
//     <Route path="/" exact component={Footer} />
//     <Route path="/login" exact component={Login} />
//     <Route path="/register" exact component={Register} />
//     <Route component={NotFound} />
    
//   </Switch>;