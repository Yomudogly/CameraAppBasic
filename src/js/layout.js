import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";

import { Start } from "./component/start";
import { One } from "./component/one";
import { Two } from "./component/two";
import { Three } from "./component/three";
import { Four } from "./component/four";
import { Five } from "./component/five";
import { Six } from "./component/six";
import { Finish } from "./component/finish";

export const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<MemoryRouter>
				<Switch>
					<Route exact path="/" component={Start} />
					<Route exact path="/one" component={One} />
					<Route exact path="/two" component={Two} />
					<Route exact path="/three" component={Three} />
					<Route exact path="/four" component={Four} />
					<Route exact path="/five" component={Five} />
					<Route exact path="/six" component={Six} />
					<Route exact path="/finish" component={Finish} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</MemoryRouter>
		</div>
	);
};
