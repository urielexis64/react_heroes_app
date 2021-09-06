import React from "react";
import {Redirect, Switch, Route} from "react-router";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {HeroScreen} from "../components/heroes/HeroScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {Navbar} from "../components/ui/NavBar";

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div>
				<Switch>
					<Route exact path='/marvel' component={MarvelScreen} />
					<Route exact path='/heroe:heroeId' component={HeroScreen} />
					<Route exact path='/dc' component={DcScreen} />
					<Redirect to='/marvel' />
				</Switch>
			</div>
		</>
	);
};
