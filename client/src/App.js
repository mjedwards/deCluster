import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";

import Home from "./marketing/Home";
import Login from "./User/Login";
import Register from "./User/Register";
import UserDashboard from "./User/UserDashboard";

function App() {
	return (
		<AuthProvider>
			<Router>
				<div>
					{/* <AuthRoute exact path="/dashboard" component={UserDashboard} /> */}
					<Route exact path='/dashboard' component={UserDashboard} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/' component={Home} />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
