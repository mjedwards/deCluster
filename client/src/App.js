import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import Home from "./marketing/Home";
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <AuthRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
