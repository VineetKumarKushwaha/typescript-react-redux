import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/notFound";

const Routes: React.FC= () => (
	<BrowserRouter>
		<nav
			style={{
				position: "absolute",
				top: 0
			}}
		>
			<Link to="/">Login</Link>
			<br/>
			<Link to="/signup">Sign Up</Link>
		</nav>
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/login" component={Login}/>
			<Route path="/signup" component={SignUp}/>
			<Route component={NotFound}/>
		</Switch>
	</BrowserRouter>
)

export default Routes;